// function girilenKarakter(metin) {
//     const dizi = metin.split('');
//     const sonuç = dizi.reduce(function (previus, karakter) {
//         if (karakter < 0) {
//             return previus;
//         }
//         if (karakter === '(') {
//             return ++previus;
//         }
//         if (karakter === ')') {
//             return --previus;
//         }
//         return previus;

//     }, 0);


// if (!sonuç) {
//     console.log(metin + 'doğru karkaters.');
// } else {
//     console.log(metin + 'yanlış karakters');
// }
// }
// girilenKarakter('()');