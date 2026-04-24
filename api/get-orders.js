const { getOrdersByEmail } = require('../source/database.js');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    try {
        const { email } = req.query;
        
        if (!email) {
            return res.status(400).json({ error: 'Email required' });
        }
        
        const orders = getOrdersByEmail(email);
        
        res.status(200).json({
            success: true,
            data: orders
        });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};