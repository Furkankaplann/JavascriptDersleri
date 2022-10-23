// // // const sayılar = [1, 2, 3, 4, 5, 6];

// // // const yeniSayılar = sayılar.map(function (sayı) {
// // //     return sayı * 2;
// // // });

// // // // sayılar = [1,2,3,4,5] (""  =  "" )dediğin yapı yep yeni bir bellek adresi açar
// // // // const dediğin de yeni bir atama yapamazsın.
// // // // 
// // // console.log(sayılar);
// // // console.log(yeniSayılar);


// // const kitaplar = [
// //     { adı: '1', sayfaSayısı: 30 },
// //     { adı: '2', sayfaSayısı: 40 },
// //     { adı: '3', sayfaSayısı: 50 },
// // ];

// // const sayfaSayıları = kitaplar.map(function (kitap) {
// //     return kitap.sayfaSayısı;
// // });

// // console.log(sayfaSayıları);

// // const kişiler = [
// //     { adı: 'Furkan', soyadı: 'KAPLAN' },
// //     { adı: 'Eymen', soyadı: 'KAPLAN' },
// //     { adı: 'Enes', soyadı: 'KAPLAN' },
// // ];

// // const yeniKişiler = kişiler.map((kişi) => kişi.adı + " " + kişi.soyadı);
// // console.log(yeniKişiler);
// // console.log(kişiler);

// const sayılar = [1, 2, 3, 4, 5, 6];

// function kendiMapYapım(dizi, işlem) {

//     const yeniDizi = [];
//     for (let i = 0; i < dizi.length; i++) {
//         yeniDizi.push(işlem(dizi[i]));
//     }

//     return yeniDizi;

// }
// const oluşanYeniDizi = kendiMapYapım(sayılar, function (sayı) {
//     return sayı * 5;
// });
// console.log(oluşanYeniDizi);

// const sayılar1 = [1, 2, 3, 4, 5, 6];

// function kendiMapYapım(dizi, işlem) {

//     const yeniDizi = [];
//     for (let i = 0; i < dizi.length; i++) {
//         yeniDizi.push(işlem(dizi[i]));
//     }

//     return yeniDizi;

// }
// const oluşanYeniDizi1 = kendiMapYapım(sayılar1, function (sayı) {
//     return sayı / 5;
// });
// console.log(oluşanYeniDizi1);

// const sayılar2 = [1, 2, 3, 4, 5, 6];

// function kendiMapYapım(dizi, işlem) {

//     const yeniDizi = [];
//     for (let i = 0; i < dizi.length; i++) {
//         yeniDizi.push(işlem(dizi[i]));
//     }

//     return yeniDizi;

// }
// const oluşanYeniDizi2 = kendiMapYapım(sayılar2, function (sayı) {
//     return sayı % 5;
// });
// console.log(oluşanYeniDizi2);

