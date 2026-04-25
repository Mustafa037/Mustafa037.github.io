document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ETKİLEŞİM: Tema Değiştirme (Bootstrap 5 data-bs-theme kullanılarak) ---
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    themeToggleBtn.addEventListener('click', () => {
        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        
        // Temayı tersine çevir
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-bs-theme', newTheme);
        
        // Buton metnini güncelle
        themeToggleBtn.textContent = newTheme === 'light' ? 'Karanlık Tema' : 'Aydınlık Tema';
    });

    // --- 2. ETKİLEŞİM: Form Doğrulama ve Özet Üretme ---
    const applicationForm = document.getElementById('applicationForm');
    const resultArea = document.getElementById('resultArea');

    applicationForm.addEventListener('submit', (event) => {
        // Sayfanın yenilenmesini engelle
        event.preventDefault();

        // Form elemanlarını al
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const eventSelect = document.getElementById('eventSelect').value;
        const notes = document.getElementById('notes').value.trim();
        const termsCheck = document.getElementById('termsCheck').checked;

        // Eksik alan kontrolü
        if (!fullName || !email || !eventSelect || !termsCheck) {
            alert("Lütfen zorunlu alanları (Ad, E-posta, Etkinlik ve Şartlar) eksiksiz doldurunuz.");
            return; // İşlemi durdur
        }

        // Başarılı durumda özet kartını oluştur
        resultArea.innerHTML = `
            <div class="alert alert-success shadow-sm" role="alert">
                <h4 class="alert-heading">Başvurunuz Alındı!</h4>
                <p>Aşağıdaki bilgilerle kaydınız başarıyla oluşturulmuştur:</p>
                <hr>
                <ul class="list-unstyled mb-0">
                    <li><strong>Ad Soyad:</strong> ${fullName}</li>
                    <li><strong>E-posta:</strong> ${email}</li>
                    <li><strong>Seçilen Etkinlik:</strong> ${eventSelect}</li>
                    <li><strong>Ek Notlar:</strong> ${notes ? notes : 'Belirtilmedi'}</li>
                </ul>
            </div>
        `;

        // Formu temizle
        applicationForm.reset();
    });
});
