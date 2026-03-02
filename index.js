let vize=document.getElementById("vize");
let final=document.getElementById("final");
let btnHesapla=document.getElementById("hesapla");
let ortalama=document.getElementById("ortalama");
let harfNotu=document.getElementById("harfNotu");

btnHesapla.addEventListener("click", () => {
    let vizeTxt = Number(vize.value);
    let finalTxt = Number(final.value);

    // 1. ADIM: Önce girdilerin geçerli olup olmadığına bak (En dış katman)
    if ((vizeTxt >= 0 && vizeTxt <= 100) && (finalTxt >= 0 && finalTxt <= 100)) {
        
        // 2. ADIM: Hesaplamayı yap
        let sonuc = Math.round((vizeTxt * 0.40) + (finalTxt * 0.60));
        ortalama.innerText = `Ortalamanız: ${sonuc}`;

        // 3. ADIM: Sonuca göre harf notunu belirle
        if (sonuc >= 90) {
            ortalama.innerText=`Ortalamanız: ${sonuc}`;
            harfNotu.innerText = "AA";
            harfNotu.style.backgroundColor = "green";
        } else if (sonuc >= 80) {
            ortalama.innerText=`Ortalamanız: ${sonuc}`;
            harfNotu.innerText = "BA";
            harfNotu.style.backgroundColor = "rgb(107, 173, 0)";
        } else if (sonuc >= 70) {
            ortalama.innerText=`Ortalamanız: ${sonuc}`;
            harfNotu.innerText = "BB";
            harfNotu.style.backgroundColor = "rgb(107, 173, 0)";
        } else if (sonuc >= 60) {
            ortalama.innerText=`Ortalamanız: ${sonuc}`;
            harfNotu.innerText = "CB";
            harfNotu.style.backgroundColor = "orange";
        } else if (sonuc >= 55) {
            ortalama.innerText=`Ortalamanız: ${sonuc}`;
            harfNotu.innerText = "CC";
            harfNotu.style.backgroundColor = "rgb(160, 160, 0)";
        } else {
            ortalama.innerText=`Ortalamanız: ${sonuc}`;
            harfNotu.innerText = "FF";
            harfNotu.style.backgroundColor = "rgb(167, 2, 2)";
        }
    } else {
        alert("Lütfen vize ve final notlarını 0-100 arasında giriniz!");
    }
});