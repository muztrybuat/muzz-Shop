// ==================== DATABASE SIMULASI ====================

const defaultProducts = [
    { id: 1, name: "Panel Pterodactyl", price: 150000, icon: "🖥️", category: "Panel", type: "ram" },
    { id: 2, name: "Murid Bug", price: 85000, icon: "🐛", category: "Bug", type: "normal" },
    { id: 3, name: "Aplikasi Bug Manta", price: 0, icon: "🦈", category: "Bug", type: "bugManta" },
    { id: 4, name: "Bot WhatsApp", price: 0, icon: "🤖", category: "Bot", type: "bot" },
    { id: 5, name: "Script Auto Order", price: 350000, icon: "📝", category: "Script", type: "normal" },
    { id: 6, name: "Base APK", price: 0, icon: "📱", category: "BaseAPK", type: "baseApk" },
    { id: 7, name: "Web Create Script WA", price: 5000, icon: "🌐", category: "Script", type: "webScript" }
];

function getProducts() {
    return defaultProducts;
}

function getProductById(id) {
    return defaultProducts.find(p => p.id === id);
}

function saveOrder(orderData) {
    const orders = JSON.parse(localStorage.getItem('orders_backup') || '[]');
    orders.push(orderData);
    localStorage.setItem('orders_backup', JSON.stringify(orders));
    return orderData;
}

function getOrdersByEmail(email) {
    const orders = JSON.parse(localStorage.getItem('orders_backup') || '[]');
    return orders.filter(o => o.customerEmail === email);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getProducts,
        getProductById,
        saveOrder,
        getOrdersByEmail,
        defaultProducts
    };
}