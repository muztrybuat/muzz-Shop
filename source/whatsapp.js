// ==================== WHATSAPP INTEGRATION ====================

const CONFIG = require('./config.js');

function sendToOwner(order) {
    const message = `Hai owner, saya habis membeli ${order.productName} saya ingin mengambil benda ini, ini biodata saya

ID Pesanan : ${order.orderId}
Nama Pembeli : ${order.customerName}
Barang Dibeli : ${order.productName}
Harga : Rp ${order.price.toLocaleString()}
Metode Bayar : ${order.paymentMethod || 'Belum dipilih'}
Tanggal Beli : ${order.date}

Mohon segera kirimkan ini

Note : 
!! JANGAN HAPUS , LANGSUNG KIRIM SAJA !!`;
    
    const ownerNumber = CONFIG.OWNER.phone;
    return `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
}

function getCSLink() {
    const message = 'Halo CS, saya butuh bantuan untuk order di Muzz Shop Order';
    return `https://wa.me/${CONFIG.CS.phone}?text=${encodeURIComponent(message)}`;
}

function getOwnerLink() {
    return `https://wa.me/${CONFIG.OWNER.phone}`;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sendToOwner,
        getCSLink,
        getOwnerLink
    };
}