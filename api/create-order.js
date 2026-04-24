const { saveOrder } = require('../source/database.js');
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
        const { productName, price, customerName, customerEmail } = req.body;
        
        if (!productName || !price || !customerName || !customerEmail) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        const newOrder = {
            orderId: CONFIG.generateOrderId(),
            productName,
            price,
            customerName,
            customerEmail,
            status: 'pending',
            date: new Date().toLocaleString('id-ID'),
            timestamp: Date.now()
        };
        
        const savedOrder = saveOrder(newOrder);
        
        res.status(200).json({
            success: true,
            data: savedOrder
        });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
