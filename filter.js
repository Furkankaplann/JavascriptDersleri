// const bitkiler = [
//     { adı: 'Üzüm', tür: 'Meyve' },
//     { adı: 'Çilek', tür: 'Meyve' },
//     { adı: 'Muz', tür: 'Meyve' },
//     { adı: 'Ispanak', tür: 'Sebze' },
//     { adı: 'Kereviz', tür: 'Sebze' },
// ];

// function kendiFilterYapım(dizi, filtreŞartları) {
//     const geciciDizi = [];
//     for (let i = 0; i < dizi.length; i++) {
//         const sonuç = filtreŞartları(dizi[i]);
//         if (sonuç) {
//             geciciDizi.push(dizi[i]);
//         }
//     }

//     return geciciDizi;
// }

// function filtre(bitki) {
//     return bitki.tür === 'Sebze';
// }
// const meyveler = kendiFilterYapım(bitkiler, filtre);

// console.log(meyveler);





// /******************    FİLTER KOLAY YOLU ******************** */
// // const meyveler = bitkiler.filter(function (bitki) {
// //     return bitki.tür === 'Meyve';
// // });

// // const sebzeler = bitkiler.filter(function (bitki) {
// //     return bitki.tür === 'Sebze';
// // });
// /******************    FİLTER KOLAY YOLU ******************** */







// // console.log(meyveler);
// // console.log(sebzeler);

// // function meyveleriBul() {
// //     const geciciDizi = [];
// //     for (let i = 0; i < bitkiler.length; i++) {
// //         if (bitkiler[i].tür === 'Meyve') {
// //             geciciDizi.push(bitkiler[i]);
// //         }
// //     }
// //     return geciciDizi;
// // }
// // function sebzeleriBul() {
// //     const geciciDizi = [];
// //     for (let i = 0; i < bitkiler.length; i++) {
// //         if (bitkiler[i].tür === 'Sebze') {
// //             geciciDizi.push(bitkiler[i]);
// //         }
// //     }
// //     return geciciDizi;
// // }

// // console.log(meyveleriBul());
// // console.log(sebzeleriBul());