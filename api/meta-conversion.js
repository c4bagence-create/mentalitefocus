// API Conversions Meta - Focus Business
// Serverless function pour Vercel

const PIXEL_ID = '26364309749823828';
const ACCESS_TOKEN = 'EAAGzHBKZCJ4QBQlQxAOQwbi4j9pdZCh43m2m9aMRNjcwj8QR58OqBDVDgL96UqMUvZAdactNqkZCUsyenZCRZASRrsXKwpZBktPlx9b0JEBLLxkZCmZB3qrDbYG0fBgnQWnd3OUFMYUrFpxCUZCBrPpPKUiSJ3IYTIXZB9ifZBjOagc7L8Gf4xq0vUCCyumdfbOjvvQOmgZDZD';

export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { event_name, event_data, user_data, event_source_url } = req.body;

        // Construire le payload pour Meta
        const payload = {
            data: [{
                event_name: event_name || 'PageView',
                event_time: Math.floor(Date.now() / 1000),
                action_source: 'website',
                event_source_url: event_source_url || 'https://mentalitefocus.com',
                user_data: {
                    client_ip_address: req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown',
                    client_user_agent: req.headers['user-agent'] || 'unknown',
                    ...user_data
                },
                custom_data: event_data || {}
            }]
        };

        // Envoyer à Meta
        const response = await fetch(
            `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }
        );

        const result = await response.json();

        if (!response.ok) {
            console.error('Meta API Error:', result);
            return res.status(response.status).json({ error: result });
        }

        return res.status(200).json({ 
            success: true, 
            events_received: result.events_received,
            fbtrace_id: result.fbtrace_id
        });

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
