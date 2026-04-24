const { getProducts } = require('../source/database.js');

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
        const { category } = req.query;
        let products = getProducts();
        
        if (category && category !== 'all') {
            products = products.filter(p => p.category === category);
        }
        
        res.status(200).json({
            success: true,
            data: products,
            categories: ['all', 'Panel', 'Bug', 'Bot', 'Script', 'BaseAPK']
        });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};