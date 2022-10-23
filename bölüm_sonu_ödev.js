
// ŞEHİRLER İÇEREM BİR DİZİ OLUŞTURUN VE HER DİZİ ELAMANI ŞEHİRLER  İLE İLGİLİ BİLGİLERİ İÇERMELİDİR.

/*
const şehirler = [
    { ad: 'Bursa', plakaKod: 16, komşu: [' İstanbul', 'Balıkesir'] },
    { ad: 'İzmir', plakaKod: 35, komşu: [' Manisa', 'Aydın'] },
    { ad: 'Ankara', plakaKod: 06, komşu: [' Kırıkkale', 'Eskişehir'] },

];

şehirler.sort(function (a, b) {
    if (a.ad < b.ad) {
        return 1;
    } else if (a.ad > b.ad) {
        return -1;
    } else return 0 ;
});
console.log(şehirler);
*/


// KULLANICIDAN ALINAN DEĞERE KADAR OLAN SAYILAR DİZİYİ  FİBONACCİ  ŞEKİLDE  YAZDIRIN 
// FİBONACCİ ÖRNEK : 0 1 1 2 3 5 8 13 21 ...
// İKİ SAYININ TOPLAMI BİR SONRA Kİ SAYIYI OLUŞTURUYOR 

/*
function fibonacci(sayı) {
    let sonuçDizi = [0, 1];
    for (let i = 2; i < sayı; i++) {
        const oanHesaplananElaman = sonuçDizi[i - 1] + sonuçDizi[i - 2];
        if (oanHesaplananElaman < sayı) {
            sonuçDizi[i] = oanHesaplananElaman
        } else {
            break;
        }
    }
    return sonuçDizi;
}
console.log(fibonacci(100));
*/


// ÖĞRENCİLERİ OLUŞTURAN BİR DİZİ OLUŞTURUN
// ER BİR ÖĞRENCİ NESNESİNDE AD SOYAD VE İD DEĞERLERİ OLMADI 
// İD NUMRASI CİFT OLAN ÖĞRENCİLERİN ADI VE SOY ADINI BİRLİŞTİRİLMİŞ HALDE TUTAN DİZİYİ 
// A DAN Z YE SIRALI ŞEKİLDE EKRANA YAZDIRIN
// BUNLARI YAPARKEN ( MAP,FİLTER VE SORT) METOTLARINI KULLANIN
// İŞLEM BİTTİKTEN SONRA KODLARI ARROW FUNCTİON VE ZİNCİRLEME HALİNE DÖNÜŞTÜRÜN.

const öğrenciler = [
    { ad: ' Furkan ', soyad: 'kaplan', id: 1 },
    { ad: ' Eymen ', soyad: 'kaplan', id: 2 },
    { ad: ' enes ', soyad: 'kaplan', id: 3 },
    { ad: ' tuana ', soyad: 'kaplan', id: 4 },
    { ad: ' azra ', soyad: 'kaplan', id: 5 },
    { ad: ' neva ', soyad: 'kaplan', id: 6 },
];

/*
const sonuçDizi = öğrencilerDizisi.filter(öğrenci => öğrenci.id % 2 === 0)
    .map(öğrenci => öğrenci.ad + " " + öğrenci.soyad)
    .sort()
    .reverse();
console.log(sonuçDizi);
*/ 


// const idleriÇiftOlanÖğrenciDizisi = öğrenciler.filter(function (öğrenci) {
//     return öğrenci.id % 2 === 0;   //  ( === çift ıdleri bulur yani sayıları ) ( !== tek idleri bulur yani sayıları)
// });
// const isimler = idleriÇiftOlanÖğrenciDizisi.map(function (öğrenci) {
//     return öğrenci.ad + " " + öğrenci.soyad;
// });
// isimler.sort();
// console.log(isimler);