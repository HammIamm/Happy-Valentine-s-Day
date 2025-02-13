// *Typing Effect*
const text = `First of all, aku mau bilang ini, makasih yaa sayang udah nerima aku yang ke sekian kali, walaupun mungkin buat kamu itu nggak gampang. Akhir-akhir ini aku mikir, dengan semua naik turunnya hubungan kita, dengan aku yang pengen selalu sama kamu dan nggak mau udahan, tapi justru karena itu kita masih bisa bareng terus. Dan yang aku lihat, kita tuh bahagia yaa, kaya makin bisa saling nerima satu sama lain. Terus juga aku ngerasa kalau bercanda tuh kayanya bahagia banget gitu, dan kita juga sama-sama saling butuh gitu lhoo. Jadi kaya, ih gemes banget gitu mwehehehe.

Sama kamu itu gregetan tauu, wkwkwk. Dengan sifat kamu yang gengsian itu, yaa walaupun di balik sifat itu ada orang yang sebenernya sayang dan peduli banget sama aku. Cuma yaa gengsian aja orangnya 😗😗. Makasih yaa, sudah selalu ada buat aku dan buat kita. Makasih juga sudah bertahan sama aku di sini sampai sejauh ini. Makasih sudah membuat aku merasa disayang. Semoga kita selalu bareng yaa, sayangg 😖❤.

Walaupun kita sekarang jauh, dan itu terkadang nggak gampang buat jalaninnya, tapi semoga kita selalu punya alasan buat mau berusaha dan bertahan dengan segala masalah yang bakal ada nanti. Pasti kita bisaa yaaa, sayangg‼

There’s one thing you should know: I’m so happy with you. I met the happiest version of myself when I’m with you, and I hope you feel the same ❤🧸.

Walaupun kadang kamu nyebelin, tapi aku tetep sayang sama kamu 😚.

Aku juga minta maaf yaa sayangg, untuk semua hal yang mungkin kurang aku usahakan, dan semua dari diri aku yang masih banyak kekurangannya. Maaf aku juga kadang nyebelin, terlalu pengen tau tentang kamu, terlalu banyak nuntut kamu. Aku minta maaf yaa sayang, maaf sekalii. Tapi sekarang aku sedang ubah pelan-pelan supaya lebih baik untuk kita yaaa‼ Makasih yaa sayangg, sudah nerima akuu ☹❤.

Dan yang terakhir, I hope we can always be happy together. Semoga kita selalu bareng yaa sayangg, dan semoga kita selalu bisa lewatin semua hal yang bakal kita hadapin di depan kita.

I lovee youu sayangg😖😖❤❤‼

Sayangg sekalii samaa kamuu hihiii~ Kamu bakal selalu jadi Cindra yang lucuu itu di mata akuu 😚😚🤏🏻🤏🏻❤❤🫂🫂🧸🧸🤍🤍`;

let index = 0;
const speed = 50; // Kecepatan ngetik (ms)
const typingElement = document.getElementById("typing-text");

function typeWriter() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// *Slideshow Background (Gambar ada di ROOT, bukan di folder images)*
const images = [
    "photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg",
    "photo6.jpg", "photo7.jpg", "photo8.jpg", "photo9.jpg", "photo10.jpg",
    "photo11.jpg", "photo12.jpg", "photo13.jpg", "photo14.jpg", "photo15.jpg",
    "photo16.jpg", "photo17.jpg"
];

let currentIndex = 0;

function changeBackground() {
    let imagePath = images[currentIndex];
    console.log("Changing background to:", imagePath); // Debugging biar tau path gambar bener atau enggak
    document.body.style.backgroundImage = url('${imagePath}');
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed"; // Biar background gak gerak pas scroll
    currentIndex = (currentIndex + 1) % images.length;
}

// Ganti background setiap 5 detik
setInterval(changeBackground, 5000);

// Jalankan efek mengetik saat halaman dimuat
window.onload = () => {
    setTimeout(typeWriter, 500);
    changeBackground(); // Set background pertama kali
};
