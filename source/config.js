// ==================== KONFIGURASI MUZZ SHOP ORDER ====================

const CONFIG = {
    APP_NAME: 'Muzz Shop Order',
    APP_VERSION: '3.0.0',
    
    OWNER: {
        name: 'Muhammad Muzakir',
        email: 'muhammadmuzakir808@gmail.com',
        phone: '60175632450',
        country: 'Malaysia',
        instagram: '@muzzshop_official',
        whatsapp_link: 'https://wa.me/60175632450'
    },
    
    CS: {
        phone: '60175632450',
        whatsapp_link: 'https://wa.me/60175632450'
    },
    
    PAYMENT: {
        QRIS: {
            name: 'QRIS Indonesia',
            enabled: true,
            supported_apps: ['Dana', 'OVO', 'GoPay', 'LinkAja', 'ShopeePay'],
            currency: 'IDR',
            currency_symbol: 'Rp'
        },
        DUITNOW: {
            name: 'DuitNow Malaysia',
            enabled: true,
            provider: 'HitPay',
            supported_apps: ['Maybank2u', 'Touch n Go', 'GrabPay', 'Boost', 'RHB Bank'],
            currency: 'MYR',
            currency_symbol: 'RM'
        }
    },
    
    generateOrderId: () => {
        const prefix = 'MZZ';
        const timestamp = Date.now().toString().slice(-8);
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        return `${prefix}${timestamp}${random}`;
    },
    
    formatCurrency: (amount, currency = 'IDR') => {
        if (currency === 'MYR') return `RM ${amount.toLocaleString()}`;
        return `Rp ${amount.toLocaleString()}`;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
