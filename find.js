// const kişiler = [
//     { id: 1, ad: 'furkan1' },
//     { id: 2, ad: 'furkan2' },
//     { id: 3, ad: 'furkan3' },
//     { id: 4, ad: 'furkan4' },
//     { id: 5, ad: 'furkan5' },
//     { id: 6, ad: 'furkan6' },
//     { id: 7, ad: 'furkan7' },
//     { id: 8, ad: 'furkan8' },
//     { id: 9, ad: 'furkan9' },
// ];

// function kendiFindMetotum(kişiler, aranılanDeğer) {
//     let bulunanEleman = undefined;
//     for (let i = 0; i < kişiler.length; i++) {
//         if (aranılanDeğer(kişiler[i]))
//             return kişiler[i];
//     }

//     return bulunanEleman;
// }

// const sonuç = kendiFindMetotum(kişiler, function (kişi) {
//     return kişi.id === 5;
// });


// console.log(sonuç);




// // const sonuç = kişiler.find(function (kişi) {
// //     return kişi.id === 5;
// // });
// // function findMetot(kişiler) {
// //     for (let i = 0; i < kişiler.length; i++) {
// //         if (kişiler[i].id === 5) {
// //             return kişiler[i];
// //         }
// //     }
// // }

// // console.log(findMetot(kişiler));