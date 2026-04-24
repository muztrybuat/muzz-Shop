const CONFIG = require('../source/config.js');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    try {
        const { orderId, amount, customerName } = req.body;
        
        if (!orderId || !amount || !customerName) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        const qrisImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=QRIS-MUZZ-${orderId}-${amount}`;
        
        res.status(200).json({
            success: true,
            data: {
                payment_id: 'QRIS_' + Date.now(),
                order_id: orderId,
                amount: amount,
                currency: 'IDR',
                method: 'QRIS',
                qris_image_url: qrisImageUrl,
                status: 'pending',
                supported_apps: CONFIG.PAYMENT.QRIS.supported_apps,
                expires_at: new Date(Date.now() + 30 * 60 * 1000).toISOString()
            }
        });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};