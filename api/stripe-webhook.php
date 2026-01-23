<?php
/**
 * Stripe Webhook - Focus Business
 * Reçoit les événements Stripe et envoie aux APIs de conversion
 * (Meta CAPI + Snapchat CAPI)
 */

// CORS Headers
header('Content-Type: application/json');

// ==========================================
// CONFIG
// ==========================================

// Stripe Webhook Secret (à récupérer dans Stripe Dashboard)
$STRIPE_WEBHOOK_SECRET = 'whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // TODO: Remplacer

// URLs des APIs de conversion
$META_CAPI_URL = 'https://mentalitefocus.com/api/meta-conversion.php';
$SNAP_CAPI_URL = 'https://mentalitefocus.com/api/snap-conversion.php';

// ==========================================
// VERIFY STRIPE SIGNATURE
// ==========================================
$payload = file_get_contents('php://input');
$sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'] ?? '';

// Pour le dev, on peut désactiver la vérification
$VERIFY_SIGNATURE = false; // Mettre à true en production

if ($VERIFY_SIGNATURE && $STRIPE_WEBHOOK_SECRET !== 'whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') {
    $elements = explode(',', $sig_header);
    $timestamp = null;
    $signature = null;
    
    foreach ($elements as $element) {
        $parts = explode('=', $element, 2);
        if ($parts[0] === 't') $timestamp = $parts[1];
        if ($parts[0] === 'v1') $signature = $parts[1];
    }
    
    $signed_payload = $timestamp . '.' . $payload;
    $expected_signature = hash_hmac('sha256', $signed_payload, $STRIPE_WEBHOOK_SECRET);
    
    if (!hash_equals($expected_signature, $signature)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid signature']);
        exit();
    }
}

// ==========================================
// PARSE STRIPE EVENT
// ==========================================
$event = json_decode($payload, true);

if (!$event || !isset($event['type'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid event']);
    exit();
}

$event_type = $event['type'];
$event_data = $event['data']['object'] ?? [];

// Log event
error_log("Stripe Webhook: " . $event_type);

// ==========================================
// HANDLE EVENTS
// ==========================================
$results = [];

switch ($event_type) {
    
    // ✅ PAIEMENT RÉUSSI
    case 'checkout.session.completed':
    case 'payment_intent.succeeded':
        $amount = ($event_data['amount_total'] ?? $event_data['amount'] ?? 990) / 100;
        $currency = strtoupper($event_data['currency'] ?? 'eur');
        $customer_email = $event_data['customer_email'] ?? $event_data['receipt_email'] ?? '';
        $transaction_id = $event_data['id'] ?? '';
        $customer_name = $event_data['customer_details']['name'] ?? '';
        
        // ====== SEND TO META CAPI ======
        $meta_payload = [
            'event_name' => 'Purchase',
            'event_source_url' => 'https://mentalitefocus.com',
            'user_data' => [
                'em' => $customer_email ? hash('sha256', strtolower(trim($customer_email))) : '',
            ],
            'event_data' => [
                'value' => $amount,
                'currency' => $currency,
                'content_name' => 'Focus Business Membership',
                'content_type' => 'product',
                'order_id' => $transaction_id
            ]
        ];
        
        $results['meta'] = sendToAPI($META_CAPI_URL, $meta_payload);
        
        // ====== SEND TO SNAPCHAT CAPI ======
        $snap_payload = [
            'event_type' => 'PURCHASE',
            'event_source_url' => 'https://mentalitefocus.com',
            'user_data' => [
                'email' => $customer_email
            ],
            'event_data' => [
                'value' => $amount,
                'currency' => $currency,
                'transaction_id' => $transaction_id,
                'item_category' => 'Focus Business Membership',
                'number_items' => 1
            ]
        ];
        
        $results['snapchat'] = sendToAPI($SNAP_CAPI_URL, $snap_payload);
        
        // Log success
        error_log("✅ Purchase tracked: €{$amount} - {$customer_email}");
        break;
        
    // 💳 DÉBUT DE CHECKOUT
    case 'checkout.session.created':
        $amount = ($event_data['amount_total'] ?? 990) / 100;
        $currency = strtoupper($event_data['currency'] ?? 'eur');
        
        // Meta - InitiateCheckout
        $meta_payload = [
            'event_name' => 'InitiateCheckout',
            'event_source_url' => 'https://mentalitefocus.com',
            'event_data' => [
                'value' => $amount,
                'currency' => $currency,
                'content_name' => 'Focus Business Membership'
            ]
        ];
        $results['meta'] = sendToAPI($META_CAPI_URL, $meta_payload);
        
        // Snapchat - START_CHECKOUT
        $snap_payload = [
            'event_type' => 'START_CHECKOUT',
            'event_source_url' => 'https://mentalitefocus.com',
            'event_data' => [
                'value' => $amount,
                'currency' => $currency
            ]
        ];
        $results['snapchat'] = sendToAPI($SNAP_CAPI_URL, $snap_payload);
        break;
        
    // 🔄 ABONNEMENT CRÉÉ
    case 'customer.subscription.created':
        $customer_email = $event_data['customer_email'] ?? '';
        
        // Meta - Subscribe
        $meta_payload = [
            'event_name' => 'Subscribe',
            'event_source_url' => 'https://mentalitefocus.com',
            'user_data' => [
                'em' => $customer_email ? hash('sha256', strtolower(trim($customer_email))) : '',
            ],
            'event_data' => [
                'value' => 9.90,
                'currency' => 'EUR',
                'content_name' => 'Focus Business Membership'
            ]
        ];
        $results['meta'] = sendToAPI($META_CAPI_URL, $meta_payload);
        
        // Snapchat - SUBSCRIBE (si disponible) ou PURCHASE
        $snap_payload = [
            'event_type' => 'PURCHASE',
            'event_source_url' => 'https://mentalitefocus.com',
            'user_data' => [
                'email' => $customer_email
            ],
            'event_data' => [
                'value' => 9.90,
                'currency' => 'EUR',
                'transaction_id' => $event_data['id'] ?? '',
                'item_category' => 'Focus Business Subscription'
            ]
        ];
        $results['snapchat'] = sendToAPI($SNAP_CAPI_URL, $snap_payload);
        break;
        
    default:
        // Event non géré
        $results['status'] = 'Event ignored: ' . $event_type;
        break;
}

// ==========================================
// RESPONSE
// ==========================================
echo json_encode([
    'success' => true,
    'event_type' => $event_type,
    'results' => $results
]);

// ==========================================
// HELPER FUNCTION
// ==========================================
function sendToAPI($url, $data) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    
    if ($error) {
        return ['success' => false, 'error' => $error];
    }
    
    return [
        'success' => $http_code === 200,
        'http_code' => $http_code,
        'response' => json_decode($response, true)
    ];
}
