function bukaUndangan() {
    // 1. Munculkan konten utama
    document.getElementById('main-content').classList.remove('hidden');

    // 2. MUNCULKAN TOMBOL NAVIGASI MELAYANG
    document.getElementById('floating-nav').classList.remove('hidden');

    // 3. Buka kunci scroll body
    document.body.classList.remove('no-scroll');
    
    // 4. Scroll halus ke bagian profil
    document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
}

function goToPage(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    
    // Ambil elemen form dan daftar ucapan
    const wishesForm = document.getElementById('wishesForm');
    const messagesList = document.getElementById('messagesList');

    wishesForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah halaman me-refresh saat tombol ditekan

        // Ambil nilai yang diketik tamu
        const name = document.getElementById('senderName').value;
        const status = document.getElementById('attendanceStatus').value;
        const message = document.getElementById('wishMessage').value;

        // Tentukan warna badge berdasarkan kehadiran
        let badgeColor = "#e1bee7"; // Default ungu (Hadir)
        let textColor = "#6a1b9a";
        if (status === "Tidak Hadir") {
            badgeColor = "#ffcdd2"; // Merah muda
            textColor = "#c62828";
        } else if (status === "Masih Ragu") {
            badgeColor = "#fff9c4"; // Kuning
            textColor = "#f57f17";
        }

        // Buat elemen kotak ucapan baru
        const newMessage = document.createElement('div');
        newMessage.classList.add('message-card');
        
        newMessage.innerHTML = `
            <div class="message-header">
                <strong>${name}</strong>
                <span class="badge-hadir" style="background-color: ${badgeColor}; color: ${textColor};">${status}</span>
            </div>
            <p class="message-body">${message}</p>
        `;

        // Masukkan ucapan baru ke daftar paling atas
        messagesList.prepend(newMessage);

        // Bersihkan form setelah dikirim
        wishesForm.reset();
    });

});