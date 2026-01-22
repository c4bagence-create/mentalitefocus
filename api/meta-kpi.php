<?php
/**
 * API Meta KPI - Récupère les stats Meta Ads en temps réel
 * Focus Business - Dashboard KPI
 */

// CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Config Meta
$ACCESS_TOKEN = 'EAAGzHBKZCJ4QBQlQxAOQwbi4j9pdZCh43m2m9aMRNjcwj8QR58OqBDVDgL96UqMUvZAdactNqkZCUsyenZCRZASRrsXKwpZBktPlx9b0JEBLLxkZCmZB3qrDbYG0fBgnQWnd3OUFMYUrFpxCUZCBrPpPKUiSJ3IYTIXZB9ifZBjOagc7L8Gf4xq0vUCCyumdfbOjvvQOmgZDZD';
$AD_ACCOUNT_ID = 'act_1033559093760674';

// Période (7 derniers jours par défaut)
$date_preset = $_GET['preset'] ?? 'last_7d';

// Champs à récupérer
$fields = 'spend,impressions,clicks,cpc,cpm,ctr,reach,frequency,actions';

// URL API Meta
$url = "https://graph.facebook.com/v18.0/{$AD_ACCOUNT_ID}/insights?fields={$fields}&date_preset={$date_preset}&access_token={$ACCESS_TOKEN}";

// Fetch data
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 15);
$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

if ($error) {
    http_response_code(500);
    echo json_encode(['error' => 'Curl error: ' . $error]);
    exit();
}

$result = json_decode($response, true);

if ($http_code !== 200) {
    // Si erreur, renvoyer des données de démo
    echo json_encode([
        'demo' => true,
        'message' => 'Configure AD_ACCOUNT_ID pour les vraies données',
        'data' => [
            'spend' => '247.50',
            'impressions' => '45230',
            'clicks' => '1847',
            'cpc' => '0.13',
            'cpm' => '5.47',
            'ctr' => '4.08',
            'reach' => '32150',
            'purchases' => '23',
            'cpa' => '10.76',
            'roas' => '3.85'
        ],
        'updated_at' => date('Y-m-d H:i:s')
    ]);
    exit();
}

// Parser les actions pour trouver les purchases
$purchases = 0;
$purchase_value = 0;
if (isset($result['data'][0]['actions'])) {
    foreach ($result['data'][0]['actions'] as $action) {
        if ($action['action_type'] === 'purchase') {
            $purchases = $action['value'];
        }
        if ($action['action_type'] === 'omni_purchase') {
            $purchase_value = $action['value'];
        }
    }
}

// Calculer CPA et ROAS
$spend = floatval($result['data'][0]['spend'] ?? 0);
$cpa = $purchases > 0 ? round($spend / $purchases, 2) : 0;
$roas = $spend > 0 && $purchase_value > 0 ? round($purchase_value / $spend, 2) : 0;

// Réponse formatée
echo json_encode([
    'demo' => false,
    'data' => [
        'spend' => $result['data'][0]['spend'] ?? '0',
        'impressions' => $result['data'][0]['impressions'] ?? '0',
        'clicks' => $result['data'][0]['clicks'] ?? '0',
        'cpc' => $result['data'][0]['cpc'] ?? '0',
        'cpm' => $result['data'][0]['cpm'] ?? '0',
        'ctr' => $result['data'][0]['ctr'] ?? '0',
        'reach' => $result['data'][0]['reach'] ?? '0',
        'purchases' => $purchases,
        'cpa' => $cpa,
        'roas' => $roas
    ],
    'updated_at' => date('Y-m-d H:i:s')
]);
