// ==================== DATA PRODUK ====================
const products = [
    { id: 1, name: "Panel Pterodactyl", price: 150000, icon: "🖥️", desc: "Premium game hosting panel", category: "Panel", features: ["Unlimited RAM", "Unlimited CPU"], type: "ram" },
    { id: 2, name: "Murid Bug", price: 85000, icon: "🐛", desc: "Bug exploit for various services", category: "Bug", features: ["Regular Update", "7 Days Warranty"], type: "normal" },
    { id: 3, name: "Aplikasi Bug Manta", price: 0, icon: "🦈", desc: "Unlimited quota bug for Manta", category: "Bug", features: ["Pilih Paket Sesuai Kebutuhan"], type: "bugManta" },
    { id: 4, name: "Bot WhatsApp", price: 0, icon: "🤖", desc: "Bot WhatsApp dengan berbagai pilihan paket", category: "Bot", features: ["Pilih Paket Sesuai Kebutuhan"], type: "bot" },
    { id: 5, name: "Script Auto Order", price: 350000, icon: "📝", desc: "Auto order script for marketplace", category: "Script", features: ["Multi Account", "Anti Detect"], type: "normal" },
    { id: 6, name: "Base APK", price: 0, icon: "📱", desc: "Base APK untuk berbagai kebutuhan", category: "BaseAPK", features: ["Pilih Base APK Sesuai Kebutuhan"], type: "baseApk" },
    { id: 7, name: "Web Create Script WA", price: 5000, icon: "🌐", desc: "Web create script WhatsApp dengan pilihan rank", category: "Script", features: ["20 Rank Tersedia", "Premium Quality"], type: "webScript" }
];

// Data RAM Panel
const ramOptions = [
    { size: "1 GB", price_myr: 0.40, price_idr: 4000 },
    { size: "2 GB", price_myr: 0.50, price_idr: 5000 },
    { size: "3 GB", price_myr: 0.60, price_idr: 6000 },
    { size: "4 GB", price_myr: 0.70, price_idr: 7000 },
    { size: "5 GB", price_myr: 0.80, price_idr: 8000 },
    { size: "6 GB", price_myr: 0.90, price_idr: 9000 },
    { size: "7 GB", price_myr: 1.00, price_idr: 10000 },
    { size: "8 GB", price_myr: 1.10, price_idr: 11000 },
    { size: "9 GB", price_myr: 1.20, price_idr: 12000 },
    { size: "Unlimited", price_myr: 2.00, price_idr: 20000 },
    { size: "PT (Premium)", price_myr: 25, price_idr: 430000 }
];

// Data Paket Bot WhatsApp
const botPackages = [
    { name: "Bot Jaga Group", desc: "Bot untuk menjaga group WhatsApp", price_myr: 3, price_idr: 50000, features: ["Auto jaga group", "Anti link", "Anti spam"] },
    { name: "Bot Panel via WS", desc: "Bot panel via WhatsApp", price_myr: 3, price_idr: 50000, features: ["Panel control", "Admin command"] },
    { name: "Bot Promote", desc: "Bot untuk promote produk", price_myr: 3, price_idr: 50000, features: ["Auto promote", "Broadcast message"] },
    { name: "Bot Sederhana", desc: "300+ fitur siap pakai", price_myr: 4, price_idr: 70000, features: ["300+ fitur", "Downloader", "Sticker maker"] },
    { name: "Bot MD", desc: "2.000+ fitur premium", price_myr: 7, price_idr: 120000, features: ["2000+ fitur", "Anti spam", "Auto reply"] },
    { name: "Custom Bot", desc: "Bebas request fitur", price_myr: 10, price_idr: 175000, features: ["Custom fitur", "Full support"] }
];

// Data Paket Bug Manta
const bugMantaPackages = [
    { name: "Member Harian", desc: "Akses 1 hari", price_myr: 1, price_idr: 17000, duration: "1 Hari", features: ["Full akses bug"] },
    { name: "Member Bulanan", desc: "Akses 30 hari", price_myr: 10, price_idr: 170000, duration: "30 Hari", features: ["Full akses bug", "Update berkala"] },
    { name: "Full Up", desc: "Akses permanen", price_myr: 15, price_idr: 255000, duration: "Permanen", features: ["Full akses bug", "Update forever"] },
    { name: "Reseller", desc: "Jual kembali bug Manta", price_myr: 20, price_idr: 340000, duration: "Permanen", features: ["Harga reseller", "Support bisnis"] }
];

// Data Base APK
const baseApkPackages = [
    { name: "Base APK Xcube", desc: "Ada RAT", price_myr: 10, price_idr: 170000, features: ["Premium Xcube", "Ada RAT"] },
    { name: "Base APK Miyako", desc: "No RAT", price_myr: 3, price_idr: 51000, features: ["Miyako Base", "Clean", "No RAT"] },
    { name: "Base APK RVSDP", desc: "No RAT", price_myr: 5, price_idr: 85000, features: ["RVSDP Base", "No RAT"] },
    { name: "Base APK Dheat Core", desc: "No RAT", price_myr: 5, price_idr: 85000, features: ["Dheat Core", "No RAT"] },
    { name: "Base APK Magnum X", desc: "Ada RAT", price_myr: 10, price_idr: 170000, features: ["Magnum X", "Ada RAT"] },
    { name: "Base APK Dheat Core V2", desc: "Ada RAT", price_myr: 10, price_idr: 170000, features: ["Dheat Core V2", "Ada RAT"] },
    { name: "Base APK Glacier", desc: "Ada RAT", price_myr: 5, price_idr: 85000, features: ["Glacier Base", "Ada RAT"] },
    { name: "Base APK Valhalla", desc: "No RAT", price_myr: 7, price_idr: 120000, features: ["Valhalla Base", "No RAT"] }
];

// Data Rank Web Script WA
const rankOptions = [
    { name: "Silver", icon: "⚪", price_idr: 5000 },
    { name: "Gold", icon: "🟠", price_idr: 5000 },
    { name: "Platinum", icon: "🔵", price_idr: 5000 },
    { name: "Diamond", icon: "🟣", price_idr: 5000 },
    { name: "Master", icon: "🔴", price_idr: 5000 },
    { name: "Grandmaster", icon: "🟡", price_idr: 5000 },
    { name: "Legend", icon: "☣️", price_idr: 5000 },
    { name: "Heroic", icon: "♋", price_idr: 5000 },
    { name: "Mytich", icon: "Ⓜ️", price_idr: 5000 },
    { name: "Supreme", icon: "🌀", price_idr: 5000 },
    { name: "Eternal", icon: "✡️", price_idr: 5000 },
    { name: "Imortal", icon: "🪯", price_idr: 5000 },
    { name: "Phantom", icon: "♒", price_idr: 5000 },
    { name: "Dominator", icon: "🚹", price_idr: 5000 },
    { name: "Conqueror", icon: "⚛️", price_idr: 5000 },
    { name: "Emperor", icon: "☦️", price_idr: 5000 },
    { name: "Nether", icon: "✡️", price_idr: 5000 },
    { name: "Aether", icon: "🔯", price_idr: 5000 },
    { name: "Wither", icon: "♋", price_idr: 5000 },
    { name: "Epsilon", icon: "☯️", price_idr: 5000 }
];

// ==================== AUTHENTICATION ====================
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const publicPages = ['index.html', 'login.html', 'register.html'];
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (!currentUser && !publicPages.includes(currentPage)) {
        window.location.href = 'login.html';
    }
    return currentUser;
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function login() {
    const email = document.getElementById('loginEmail')?.value;
    const password = document.getElementById('loginPassword')?.value;
    const errorDiv = document.getElementById('errorMsg');
    
    if (!email || !password) {
        if (errorDiv) {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Email dan password wajib diisi!';
        }
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
    } else {
        if (errorDiv) {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Email atau password salah!';
        }
    }
}

function register() {
    const name = document.getElementById('regName')?.value.trim();
    const email = document.getElementById('regEmail')?.value.trim();
    const wa = document.getElementById('regWa')?.value.trim();
    const password = document.getElementById('regPassword')?.value;
    const confirmPassword = document.getElementById('regConfirmPassword')?.value;
    const errorDiv = document.getElementById('errorMsg');
    const successDiv = document.getElementById('successMsg');
    
    if (errorDiv) errorDiv.style.display = 'none';
    if (successDiv) successDiv.style.display = 'none';
    
    if (!name || !email || !password) {
        if (errorDiv) {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Semua field harus diisi!';
        }
        return;
    }
    
    if (password !== confirmPassword) {
        if (errorDiv) {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Password tidak cocok!';
        }
        return;
    }
    
    if (password.length < 4) {
        if (errorDiv) {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Password minimal 4 karakter!';
        }
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.email === email)) {
        if (errorDiv) {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Email sudah terdaftar!';
        }
        return;
    }
    
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        wa: wa || '-',
        password: password,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    if (successDiv) {
        successDiv.style.display = 'block';
        successDiv.innerHTML = 'Registrasi berhasil! Redirecting to login...';
    }
    
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

// ==================== DASHBOARD ====================
function loadDashboard() {
    const user = checkAuth();
    if (!user) return;
    
    document.getElementById('welcomeName').innerHTML = 'Halo, ' + user.name + '!';
    
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const userOrders = orders.filter(o => o.customerEmail === user.email);
    
    document.getElementById('orderCount').innerHTML = userOrders.length;
    
    const ordersList = document.getElementById('ordersList');
    if (ordersList) {
        if (userOrders.length === 0) {
            ordersList.innerHTML = '<div class="empty-orders">Belum ada pesanan<br><a href="products.html" style="color:#00d2ff;">Mulai belanja</a></div>';
        } else {
            ordersList.innerHTML = userOrders.reverse().map(order => `
                <div class="order-item">
                    <div style="display:flex; justify-content:space-between; flex-wrap:wrap;">
                        <div>
                            <strong>${order.productName}</strong><br>
                            <small>ID: ${order.orderId}</small><br>
                            <small>${order.date}</small>
                        </div>
                        <span style="background:${order.status === 'paid' ? '#22c55e' : '#eab308'}; color:white; padding:4px 12px; border-radius:20px; font-size:0.75rem;">
                            ${order.status === 'paid' ? 'Lunas' : 'Menunggu'}
                        </span>
                    </div>
                </div>
            `).join('');
        }
    }
}

// ==================== PRODUCTS ====================
let currentFilter = 'all';
let selectedProduct = null;
let selectedRam = null;
let selectedBot = null;
let selectedBugManta = null;
let selectedBaseApk = null;
let selectedRank = null;

function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    let filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
    
    if (filtered.length === 0) {
        grid.innerHTML = '<div style="text-align:center; grid-column:1/-1; padding:3rem; color:white;">No products in this category</div>';
        return;
    }
    
    grid.innerHTML = filtered.map(product => `
        <div class="product-card" onclick="buyProduct(${product.id})">
            <div class="badge-category">${product.category}</div>
            <div class="product-icon">${product.icon}</div>
            <div class="product-title">${product.name}</div>
            <div class="product-price">${product.price > 0 ? 'Rp ' + product.price.toLocaleString() : 'Mulai RM 1'}</div>
            <div class="product-desc">${product.desc}</div>
            <div class="product-features">${product.features.map(f => `<span>✓ ${f}</span>`).join('')}</div>
            <button class="btn-buy">Beli Sekarang →</button>
        </div>
    `).join('');
}

function filterProducts(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === category.toLowerCase() || (category === 'all' && btn.textContent === 'All')) {
            btn.classList.add('active');
        }
    });
    renderProducts();
}

function buyProduct(productId) {
    const user = checkAuth();
    const product = products.find(p => p.id === productId);
    selectedProduct = product;
    
    if (product.type === 'ram') {
        showRamModal();
    } else if (product.type === 'bot') {
        showBotModal();
    } else if (product.type === 'bugManta') {
        showBugMantaModal();
    } else if (product.type === 'baseApk') {
        showBaseApkModal();
    } else if (product.type === 'webScript') {
        showWebScriptModal();
    } else {
        proceedToCheckout(product.price, product.name, null);
    }
}

// RAM Modal
function showRamModal() {
    const modal = document.getElementById('ramModal');
    if (!modal) return;
    const optionsDiv = document.getElementById('ramOptions');
    selectedRam = null;
    
    optionsDiv.innerHTML = ramOptions.map((ram, index) => `
        <div class="package-option" onclick="selectRam(${index})" id="ramOption${index}">
            <div class="package-name">${ram.size}</div>
            <div class="package-price">RM ${ram.price_myr.toFixed(2)}</div>
        </div>
    `).join('');
    
    modal.classList.add('active');
}

function selectRam(index) {
    document.querySelectorAll('#ramOptions .package-option').forEach(opt => opt.classList.remove('selected'));
    document.getElementById(`ramOption${index}`).classList.add('selected');
    selectedRam = ramOptions[index];
}

function confirmRamSelection() {
    if (!selectedRam) {
        alert('Silakan pilih RAM terlebih dahulu!');
        return;
    }
    closeRamModal();
    proceedToCheckout(selectedRam.price_idr, `${selectedProduct.name} (${selectedRam.size} RAM)`, selectedRam);
}

function closeRamModal() {
    document.getElementById('ramModal')?.classList.remove('active');
}

// Bot Modal
function showBotModal() {
    const modal = document.getElementById('botModal');
    if (!modal) return;
    const optionsDiv = document.getElementById('botOptions');
    selectedBot = null;
    
    optionsDiv.innerHTML = botPackages.map((bot, index) => `
        <div class="package-option" onclick="selectBot(${index})" id="botOption${index}">
            <div class="package-name">${bot.name}</div>
            <div class="package-desc">${bot.desc}</div>
            <div class="package-price">RM ${bot.price_myr} / Rp ${bot.price_idr.toLocaleString()}</div>
        </div>
    `).join('');
    
    modal.classList.add('active');
}

function selectBot(index) {
    document.querySelectorAll('#botOptions .package-option').forEach(opt => opt.classList.remove('selected'));
    document.getElementById(`botOption${index}`).classList.add('selected');
    selectedBot = botPackages[index];
}

function confirmBotSelection() {
    if (!selectedBot) {
        alert('Silakan pilih paket bot ter dahulu!');
        return;
    }
    closeBotModal();
    proceedToCheckout(selectedBot.price_idr, `${selectedProduct.name} - ${selectedBot.name}`, selectedBot);
}

function closeBotModal() {
    document.getElementById('botModal')?.classList.remove('active');
}

// Bug Manta Modal
function showBugMantaModal() {
    const modal = document.getElementById('bugMantaModal');
    if (!modal) return;
    const optionsDiv = document.getElementById('bugMantaOptions');
    selectedBugManta = null;
    
    optionsDiv.innerHTML = bugMantaPackages.map((bug, index) => `
        <div class="package-option" onclick="selectBugManta(${index})" id="bugMantaOption${index}">
            <div class="package-name">${bug.name}</div>
            <div class="package-desc">${bug.desc} | ${bug.duration}</div>
            <div class="package-price">RM ${bug.price_myr} / Rp ${bug.price_idr.toLocaleString()}</div>
        </div>
    `).join('');
    
    modal.classList.add('active');
}

function selectBugManta(index) {
    document.querySelectorAll('#bugMantaOptions .package-option').forEach(opt => opt.classList.remove('selected'));
    document.getElementById(`bugMantaOption${index}`).classList.add('selected');
    selectedBugManta = bugMantaPackages[index];
}

function confirmBugMantaSelection() {
    if (!selectedBugManta) {
        alert('Silakan pilih paket Bug Manta terlebih dahulu!');
        return;
    }
    closeBugMantaModal();
    proceedToCheckout(selectedBugManta.price_idr, `${selectedProduct.name} - ${selectedBugManta.name} (${selectedBugManta.duration})`, selectedBugManta);
}

function closeBugMantaModal() {
    document.getElementById('bugMantaModal')?.classList.remove('active');
}

// Base APK Modal
function showBaseApkModal() {
    const modal = document.getElementById('baseApkModal');
    if (!modal) return;
    const optionsDiv = document.getElementById('baseApkOptions');
    selectedBaseApk = null;
    
    optionsDiv.innerHTML = baseApkPackages.map((apk, index) => `
        <div class="package-option" onclick="selectBaseApk(${index})" id="baseApkOption${index}">
            <div class="package-name">${apk.name}</div>
            <div class="package-desc">${apk.desc}</div>
            <div class="package-price">RM ${apk.price_myr} / Rp ${apk.price_idr.toLocaleString()}</div>
        </div>
    `).join('');
    
    modal.classList.add('active');
}

function selectBaseApk(index) {
    document.querySelectorAll('#baseApkOptions .package-option').forEach(opt => opt.classList.remove('selected'));
    document.getElementById(`baseApkOption${index}`).classList.add('selected');
    selectedBaseApk = baseApkPackages[index];
}

function confirmBaseApkSelection() {
    if (!selectedBaseApk) {
        alert('Silakan pilih Base APK terlebih dahulu!');
        return;
    }
    closeBaseApkModal();
    proceedToCheckout(selectedBaseApk.price_idr, `${selectedProduct.name} - ${selectedBaseApk.name}`, selectedBaseApk);
}

function closeBaseApkModal() {
    document.getElementById('baseApkModal')?.classList.remove('active');
}

// Web Script Modal
function showWebScriptModal() {
    const modal = document.getElementById('webScriptModal');
    if (!modal) return;
    const optionsDiv = document.getElementById('rankOptions');
    selectedRank = null;
    
    optionsDiv.innerHTML = rankOptions.map((rank, index) => `
        <div class="package-option" onclick="selectRank(${index})" id="rankOption${index}">
            <div class="package-name">${rank.icon} ${rank.name}</div>
            <div class="package-price">Rp ${rank.price_idr.toLocaleString()}</div>
        </div>
    `).join('');
    
    modal.classList.add('active');
}

function selectRank(index) {
    document.querySelectorAll('#rankOptions .package-option').forEach(opt => opt.classList.remove('selected'));
    document.getElementById(`rankOption${index}`).classList.add('selected');
    selectedRank = rankOptions[index];
}

function confirmRankSelection() {
    if (!selectedRank) {
        alert('Silakan pilih rank terlebih dahulu!');
        return;
    }
    closeWebScriptModal();
    proceedToCheckout(selectedRank.price_idr, `${selectedProduct.name} - ${selectedRank.icon} ${selectedRank.name}`, selectedRank);
}

function closeWebScriptModal() {
    document.getElementById('webScriptModal')?.classList.remove('active');
}

// Proceed to Checkout
function proceedToCheckout(price, productName, detail) {
    const user = checkAuth();
    
    const pendingOrder = {
        orderId: 'ORD' + Date.now() + Math.floor(Math.random() * 1000),
        productId: selectedProduct.id,
        productName: productName,
        price: price,
        detail: detail,
        customerName: user.name,
        customerEmail: user.email,
        customerPhone: user.wa || '-',
        date: new Date().toLocaleString('id-ID'),
        timestamp: Date.now()
    };
    
    localStorage.setItem('pendingOrder', JSON.stringify(pendingOrder));
    window.location.href = 'checkout.html';
}

// ==================== CHECKOUT ====================
function loadCheckout() {
    const user = checkAuth();
    const pendingOrder = JSON.parse(localStorage.getItem('pendingOrder'));
    
    if (!pendingOrder) {
        window.location.href = 'products.html';
        return;
    }
    
    const container = document.getElementById('checkoutContent');
    if (container) {
        container.innerHTML = `
            <div class="order-summary">
                <h3>📋 Detail Pesanan</h3>
                <div class="order-detail"><span>ID Pesanan</span><strong>${pendingOrder.orderId}</strong></div>
                <div class="order-detail"><span>Produk</span><strong>${pendingOrder.productName}</strong></div>
                <div class="order-detail"><span>Total Harga</span><strong class="price-total">Rp ${pendingOrder.price.toLocaleString()}</strong></div>
            </div>
            <div class="order-summary">
                <h3>👤 Informasi Pembeli</h3>
                <div class="order-detail"><span>Nama</span><strong>${pendingOrder.customerName}</strong></div>
                <div class="order-detail"><span>Email</span><strong>${pendingOrder.customerEmail}</strong></div>
                <div class="order-detail"><span>WhatsApp</span><strong>${pendingOrder.customerPhone}</strong></div>
            </div>
            <button class="btn" onclick="processPayment()">Lanjut ke Pembayaran →</button>
            <a href="products.html" style="display:block; text-align:center; margin-top:1rem; color:#00d2ff;">← Kembali ke Produk</a>
        `;
    }
}

function processPayment() {
    const pendingOrder = JSON.parse(localStorage.getItem('pendingOrder'));
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push({ ...pendingOrder, status: 'pending_payment' });
    localStorage.setItem('orders', JSON.stringify(orders));
    window.location.href = 'payment.html';
}

// ==================== PAYMENT ====================
let currentMethod = null;
let timerInterval = null;

function loadPayment() {
    const user = checkAuth();
    const pendingOrder = JSON.parse(localStorage.getItem('pendingOrder'));
    
    if (!pendingOrder) {
        window.location.href = 'products.html';
        return;
    }
    
    const summaryDiv = document.getElementById('orderSummary');
    if (summaryDiv) {
        summaryDiv.innerHTML = `
            <p><strong>ID Pesanan:</strong> ${pendingOrder.orderId}</p>
            <p><strong>Produk:</strong> ${pendingOrder.productName}</p>
            <p><strong>Total:</strong> <span style="color:#00d2ff; font-weight:700;">Rp ${pendingOrder.price.toLocaleString()}</span></p>
        `;
    }
    
    const qrisApps = ['Dana', 'OVO', 'GoPay', 'LinkAja', 'ShopeePay'];
    const duitnowApps = ['Maybank2u', 'Touch n Go', 'GrabPay', 'Boost', 'RHB Bank'];
    
    const qrisAppsDiv = document.getElementById('qrisApps');
    const duitnowAppsDiv = document.getElementById('duitnowApps');
    if (qrisAppsDiv) qrisAppsDiv.innerHTML = qrisApps.map(app => `<span>${app}</span>`).join('');
    if (duitnowAppsDiv) duitnowAppsDiv.innerHTML = duitnowApps.map(app => `<span>${app}</span>`).join('');
    
    const qrisImage = document.getElementById('qrisImage');
    if (qrisImage) {
        qrisImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=QRIS-MUZZ-${pendingOrder.orderId}-${pendingOrder.price}`;
    }
    
    const duitnowImage = document.getElementById('duitnowImage');
    if (duitnowImage) {
        duitnowImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=DUITNOW-MUZZ-${pendingOrder.orderId}-${pendingOrder.price}`;
    }
}

function selectMethod(method) {
    currentMethod = method;
    document.querySelectorAll('.method-card').forEach(card => card.classList.remove('selected'));
    document.getElementById(method + 'Card')?.classList.add('selected');
    document.querySelectorAll('.payment-detail').forEach(detail => detail.classList.remove('active'));
    document.getElementById(method + 'Detail')?.classList.add('active');
    
    if (timerInterval) clearInterval(timerInterval);
    startTimer(method === 'qris' ? 'qrisTimer' : 'duitnowTimer');
}

function startTimer(elementId) {
    let timeLeft = 1800;
    const timerElement = document.getElementById(elementId);
    if (!timerElement) return;
    
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.innerHTML = `⏳ Sisa waktu: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timeLeft--;
        if (timeLeft < 0) clearInterval(timerInterval);
    }, 1000);
}

function confirmQRISPayment() {
    confirmPayment('QRIS Indonesia');
}

function confirmDuitNowPayment() {
    confirmPayment('DuitNow Malaysia (HitPay)');
}

function confirmPayment(paymentMethod) {
    const pendingOrder = JSON.parse(localStorage.getItem('pendingOrder'));
    if (!pendingOrder) return;
    
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const existingIndex = orders.findIndex(o => o.orderId === pendingOrder.orderId);
    
    const orderData = {
        ...pendingOrder,
        paymentMethod: paymentMethod,
        status: 'paid',
        paidAt: new Date().toISOString()
    };
    
    if (existingIndex !== -1) {
        orders[existingIndex] = orderData;
    } else {
        orders.push(orderData);
    }
    localStorage.setItem('orders', JSON.stringify(orders));
    
    const message = `Hai owner, saya habis membeli ${pendingOrder.productName} saya ingin mengambil benda ini, ini biodata saya

ID Pesanan : ${pendingOrder.orderId}
Nama Pembeli : ${pendingOrder.customerName}
Barang Dibeli : ${pendingOrder.productName}
Harga : Rp ${pendingOrder.price.toLocaleString()}
Metode Bayar : ${paymentMethod}
Tanggal Beli : ${pendingOrder.date}

Mohon segera kirimkan ini

Note : 
!! JANGAN HAPUS , LANGSUNG KIRIM SAJA !!`;
    
    const ownerNumber = '60175632450';
    const waLink = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
    
    alert('✅ Pembayaran berhasil dikonfirmasi!');
    window.open(waLink, '_blank');
    
    localStorage.removeItem('pendingOrder');
    window.location.href = 'dashboard.html';
}

// ==================== CONTACT ====================
function contactCS() {
    const csNumber = '60175632450';
    const message = 'Halo CS, saya butuh bantuan untuk order di Muzz Shop Order';
    window.open(`https://wa.me/${csNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// ==================== PROFILE ====================
function loadProfile() {
    const user = checkAuth();
    if (!user) return;
    
    document.getElementById('profileName').innerHTML = user.name;
    document.getElementById('profileEmail').innerHTML = user.email;
    document.getElementById('profilePhone').innerHTML = user.wa || '-';
    document.getElementById('profileSince').innerHTML = new Date(user.createdAt).toLocaleDateString('id-ID');
}

function viewOrders() {
    window.location.href = 'orders.html';
}

// ==================== ORDERS HISTORY ====================
function loadOrdersHistory() {
    const user = checkAuth();
    if (!user) return;
    
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const userOrders = orders.filter(o => o.customerEmail === user.email);
    
    const container = document.getElementById('ordersHistoryList');
    if (container) {
        if (userOrders.length === 0) {
            container.innerHTML = '<div class="empty-orders">Belum ada pesanan</div>';
        } else {
            container.innerHTML = userOrders.reverse().map(order => `
                <div class="order-item">
                    <div style="display:flex; justify-content:space-between; flex-wrap:wrap;">
                        <div>
                            <strong>${order.productName}</strong><br>
                            <small>ID: ${order.orderId}</small><br>
                            <small>Tanggal: ${order.date}</small><br>
                            <small>Total: Rp ${order.price.toLocaleString()}</small>
                        </div>
                        <span style="background:${order.status === 'paid' ? '#22c55e' : '#eab308'}; color:white; padding:4px 12px; border-radius:20px;">
                            ${order.status === 'paid' ? 'Lunas' : 'Menunggu'}
                        </span>
                    </div>
                </div>
            `).join('');
        }
    }
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    
    if (page === 'dashboard.html') loadDashboard();
    if (page === 'products.html') renderProducts();
    if (page === 'checkout.html') loadCheckout();
    if (page === 'payment.html') loadPayment();
    if (page === 'profile.html') loadProfile();
    if (page === 'orders.html') loadOrdersHistory();
    
    // Set active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });
});