


// // /*
// // function toplamıBul() {
// //     let toplam = 0;
// //     for (let i = 0; i < sayılar.length; i++) {
// //         toplam = toplam + sayılar[i];
// //     }
// //     console.log(toplam);
// // }

// // toplamıBul();
// // */


// // sayılar.reduce(function (pre, curr, index) {
// //     console.log(pre, curr, index);
// // }, 0);




// // // reduce -- azaltmak

// // /*
// // sistem sayılarda ki  0 ile 1 i topluyor 1 e düşürüyor reduce yapıyor 1 ile 2 yi topluyor
// // 3 ü bulunca 3 ile 3 ü topluuyor 6. 6 ile 4 ü topluyor 10. 10 ile 5 i topluyor
// // 15

// // ---- 19 satırda ki sıfır sayısı initial ilk değerimiz ----- */



// // const yeniDizi = sayılar.map(function (sayı) {
// //     return sayı * 2;
// // });

// // const yeniDiziWithReduce = sayılar.reduce(function (dizininÖncekiHali, sonrakiHali) {
// //     dizininÖncekiHali.push(sonrakiHali * 5);
// //     return dizininÖncekiHali;
// // }, []);
// // console.log(yeniDizi);
// // console.log(yeniDiziWithReduce);
// // console.log();


// // const yeniDizi = sayılar.filter(function (sayı, indexü) {
// //     return sayı > 3;

// // });

// // const yeniDiziWithReduce = sayılar.reduce(function (pre, sayı, index) {
// //     if (sayı > 3) {
// //         pre.push(sayı);

// //     }
// //     return pre;

// // }, []);


// // console.log(yeniDiziWithReduce);
// // console.log(yeniDizi);

// // const bulunanEleman = sayılar.find(function (sayı, index) {
// //     return sayı === 2;
// // });

// // console.log(bulunanEleman);
// const sayılar = [11, 23, 34,];

// const bulunanElemanWithReduce = sayılar.reduce(function (pre, sayı, index) {
//     console.log(pre, sayı, index);
//     if (sayı == 2) {  // sayıyı kontrol ediyor 2 ye eşitmi eğer değilse else çalışır 'pre'
//         return sayı;
//     } else {
//         return pre;
//     }

// }, undefined);
// // pre'nin iiçerisinde undefined var 
// // sayı'nın içerisinde 1 değeri var 
// //index'in içerisinde 0 değeri var

// console.log(bulunanElemanWithReduce);