// let person = {
//     ad: 'Furkan',
//     yaş: 27,
//     medeniHali: false,

// };

// console.log(person.ad);
// console.log(typeof person);
// console.log(person instanceof Object);

// let renkler = ['kırmızı', 'mavi', 'yeşil'];
// console.log(renkler[0]);
// console.log(typeof renkler);
// console.log(renkler instanceof Array);
// console.log(renkler instanceof Object);

// const fonksiyon = function () {
//     console.log('Merhaba Dünya');

// }
// fonksiyon();

// console.log(typeof fonksiyon);
// console.log(fonksiyon instanceof Array);
// console.log(fonksiyon instanceof Object);

// let sayı = 5;

// const fonk = function (sayı) {
//     sayı = sayı * 2;
//     return sayı;
// }
// console.log(fonk(sayı));
// console.log(sayı);

// let myDizi = [1, 2, 3];
// const diziElemanlarınaİkiyleÇarp = function (dizi) {
//     for (let i = 0; i < dizi.length; i++) {
//         dizi[i] = dizi[i] * 2;

//     }
//     return dizi;
// }
// console.log(diziElemanlarınaİkiyleÇarp(myDizi));
// console.log(myDizi);

// let myDizi = [1, 2, 3];
// // first class fuction (birinci sınıf fonksiyonlar)
// const ikiyleÇarp = function (sayı) {
//     return sayı * 2;
// }
// const ikiyleBöl = function (sayı) {
//     return sayı / 2;
// }
// const üçEkle = function (sayı) {
//     return sayı + 3;
// }

// const diziİşlemleri = function (dizi, işlem) {
//     let geçiciDizi = [];
//     for (let i = 0; i < dizi.length; i++) {
//         geçiciDizi[i] = işlem(dizi[i]);
//     }
// }
// // higher order fuction : parametre olarak fonksiyon  olan veya 
// // return olarak foksiyon döndüren  fonksiyonlardır.
// // dizi işlemleri higher order fonksiyonlardır
// // ikiyleBöl,ikiyleÇarp , üçEkle callback  fonksiyonlarıdır.
// diziİşlemleri(myDizi, ikiyleÇarp);
// diziİşlemleri(myDizi, ikiyleBöl);
// diziİşlemleri(myDizi, üçEkle);
// console.log(myDizi);

// function adımıSöyle(ad, soyad) {
//     console.log("Merhaba, " + ad + soyad);
// }

// adımıSöyle('Furkan', ' Kaplan');

// function adımıBağır(ad, soyad, callback) {
// const mesaj = "MERHABA, " + ad.toUpperCase() + " " + soyad.toUpperCase();
// callback (mesaj);
// }

// adımıBağır('furkan','kaplan', function (msj) {
//     console.log(msj);
// });
