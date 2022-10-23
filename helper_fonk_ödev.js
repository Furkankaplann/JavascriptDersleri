// const sayılar = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function sonucuBul(sayılar) {
//     const tekElemanSayısı = sayılar.filter(function (sayı) {
//         return sayı % 2 !== 0;

//     });
//     console.log("tek eleman sayısı: " + tekElemanSayısı);
//     const sayılarınKaresi = tekElemanSayısı.map(function (sayı) {
//         return sayı * sayı;
//     });
//     console.log("Sayıların Karesi: " + sayılarınKaresi);

//     const toplam = sayılarınKaresi.reduce(function (genelToplam, sayı) {
//         if (sayı > 10) {
//             return genelToplam = genelToplam + sayı;
//         } else {
//             return genelToplam;
//         }

//     }, 0);
//     return toplam;
// }
// console.log(sonucuBul(sayılar));



// /*      ---------------------------  KISA VERSİYON !! -------------

// function kısaVersiyon(sayılar) {



//     const sonuç = sayılar.filter(function (sayı) {
//         return sayı % 2 !== 0;

//     }).map(function (sayı) {
//         return sayı * sayı;
//     }).reduce(function (genelToplam, sayı) {
//         if (sayı > 10) {
//             return genelToplam = genelToplam + sayı;
//         } else {
//             return genelToplam;
//         }

//     }, 0);

//     console.log(sonuç);


// }
// kısaVersiyon(sayılar);
// */


// /* **** ******************** --- EKTRA KISA VERSİYON !! -------------
// function kısaVersiyon(sayılar) {
//     return sayılar.filter(sayı => sayı % 2 !== 0)
//         .map(sayı => sayı * sayı)
//         .reduce((genelToplam, sayı) => sayı > 10 ? genelToplam
//             += sayı : genelToplam, 0);
// }
// kısaVersiyon(sayılar);
// console.log(kısaVersiyon(sayılar));
// */ 