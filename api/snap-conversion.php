<?php
/**
 * API Conversions Snapchat - Focus Business
 * Endpoint PHP pour tracker les ventes via Snapchat CAPI
 */

// CORS Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only POST allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// ==========================================
// CONFIG SNAPCHAT
// ==========================================
$SNAP_PIXEL_ID = '827ae1c2-5cf7-44db-9761-0a858ab2e2e6';
$SNAP_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzY5MDk0NTIzLCJzdWIiOiI2M2FlMGU5Yi02YzZhLTRkZmEtYWU5ZS1lZmZiOTdhZDZhZmN-UFJPRFVDVElPTn4yNGVmOGQzNC1kNTFhLTRiODAtYTFmYy0wOTJiZTU4YzFlNTgifQ.gPtSUr07K_EPtZggZHy2peP1pQl737vRyJGOFfaXwig';

// ==========================================
// GET POST DATA
// ==========================================
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit();
}

// ==========================================
// EXTRACT EVENT DATA
// ==========================================
$event_type = $data['event_type'] ?? 'PAGE_VIEW';
$event_data = $data['event_data'] ?? [];
$user_data = $data['user_data'] ?? [];
$event_source_url = $data['event_source_url'] ?? 'https://mentalitefocus.com';

// Get client info
$client_ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['HTTP_X_REAL_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? '';
$client_ua = $_SERVER['HTTP_USER_AGENT'] ?? '';

// Hash email if provided (SHA256 required by Snapchat)
$hashed_email = '';
if (!empty($user_data['email'])) {
    $hashed_email = hash('sha256', strtolower(trim($user_data['email'])));
}

// Hash phone if provided
$hashed_phone = '';
if (!empty($user_data['phone'])) {
    $hashed_phone = hash('sha256', preg_replace('/[^0-9]/', '', $user_data['phone']));
}

// Generate unique event ID
$event_id = $data['event_id'] ?? uniqid('snap_', true);

// ==========================================
// BUILD SNAPCHAT CAPI PAYLOAD
// ==========================================
$payload = [
    'pixel_id' => $SNAP_PIXEL_ID,
    'timestamp' => (string)(time() * 1000), // Snapchat wants milliseconds
    'event_type' => $event_type,
    'event_conversion_type' => 'WEB',
    'event_tag' => $data['event_tag'] ?? 'focus_business',
    'uuid_c1' => $data['uuid_c1'] ?? '', // Snapchat click ID if available
    'page_url' => $event_source_url,
    'user_agent' => $client_ua,
    'ip_address' => $client_ip,
    'integration' => 'focus_capi_v1'
];

// Add hashed user data
if ($hashed_email) {
    $payload['hashed_email'] = $hashed_email;
}
if ($hashed_phone) {
    $payload['hashed_phone_number'] = $hashed_phone;
}

// Add event-specific data based on type
switch ($event_type) {
    case 'PURCHASE':
        $payload['price'] = $event_data['value'] ?? 9.90;
        $payload['currency'] = $event_data['currency'] ?? 'EUR';
        $payload['transaction_id'] = $event_data['transaction_id'] ?? $event_id;
        $payload['item_category'] = $event_data['item_category'] ?? 'Focus Business Membership';
        $payload['number_items'] = $event_data['number_items'] ?? 1;
        break;
        
    case 'SIGN_UP':
        $payload['sign_up_method'] = $event_data['sign_up_method'] ?? 'website';
        break;
        
    case 'START_CHECKOUT':
        $payload['price'] = $event_data['value'] ?? 9.90;
        $payload['currency'] = $event_data['currency'] ?? 'EUR';
        $payload['item_category'] = $event_data['item_category'] ?? 'Focus Business Membership';
        break;
        
    case 'VIEW_CONTENT':
        $payload['content_type'] = $event_data['content_type'] ?? 'product';
        $payload['item_category'] = $event_data['item_category'] ?? 'Focus Business';
        break;
}

// ==========================================
// SEND TO SNAPCHAT CONVERSIONS API
// ==========================================
$url = 'https://tr.snapchat.com/v2/conversion';

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([$payload])); // Snapchat expects array
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $SNAP_ACCESS_TOKEN
]);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

// ==========================================
// HANDLE RESPONSE
// ==========================================
if ($error) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Curl error: ' . $error
    ]);
    exit();
}

$result = json_decode($response, true);

// Log for debugging (remove in production)
error_log("Snapchat CAPI Response: " . $response);

if ($http_code !== 200) {
    http_response_code($http_code);
    echo json_encode([
        'success' => false,
        'error' => $result,
        'http_code' => $http_code
    ]);
    exit();
}

// Success
echo json_encode([
    'success' => true,
    'event_type' => $event_type,
    'event_id' => $event_id,
    'snapchat_response' => $result
]);
