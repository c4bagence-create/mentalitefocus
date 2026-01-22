<?php
/**
 * API Conversions Meta - Focus Business
 * Endpoint PHP pour Hostinger
 */

// CORS Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
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

// Config
$PIXEL_ID = '26364309749823828';
$ACCESS_TOKEN = 'EAAGzHBKZCJ4QBQlQxAOQwbi4j9pdZCh43m2m9aMRNjcwj8QR58OqBDVDgL96UqMUvZAdactNqkZCUsyenZCRZASRrsXKwpZBktPlx9b0JEBLLxkZCmZB3qrDbYG0fBgnQWnd3OUFMYUrFpxCUZCBrPpPKUiSJ3IYTIXZB9ifZBjOagc7L8Gf4xq0vUCCyumdfbOjvvQOmgZDZD';

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit();
}

// Extract event data
$event_name = $data['event_name'] ?? 'PageView';
$event_data = $data['event_data'] ?? [];
$user_data = $data['user_data'] ?? [];
$event_source_url = $data['event_source_url'] ?? 'https://mentalitefocus.com';

// Get client info
$client_ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['HTTP_X_REAL_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$client_ua = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';

// Build Meta payload
$payload = [
    'data' => [[
        'event_name' => $event_name,
        'event_time' => time(),
        'action_source' => 'website',
        'event_source_url' => $event_source_url,
        'user_data' => array_merge([
            'client_ip_address' => $client_ip,
            'client_user_agent' => $client_ua
        ], $user_data),
        'custom_data' => $event_data
    ]]
];

// Send to Meta
$url = "https://graph.facebook.com/v18.0/{$PIXEL_ID}/events?access_token={$ACCESS_TOKEN}";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);

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
    http_response_code($http_code);
    echo json_encode(['error' => $result]);
    exit();
}

// Success
echo json_encode([
    'success' => true,
    'events_received' => $result['events_received'] ?? 0,
    'fbtrace_id' => $result['fbtrace_id'] ?? null
]);
