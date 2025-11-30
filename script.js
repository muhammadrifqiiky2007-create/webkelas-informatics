// Ambil elemen popup
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closePopup = document.getElementById("closePopup");

// Semua gambar di galeri
const galleryImages = document.querySelectorAll(".gallery img");

// Saat gambar diklik → tampilkan popup
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
    });
});

// Tutup popup
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Tutup popup jika klik area gelap
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
