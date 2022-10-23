// // person kurucu fonksiyon
// function Person(ad, soyad) {
//     this.ad = ad;
//     this.soyad = soyad;
// }

// Person.prototype.selamVer = function () {
//     return `Merhaba ben ${this.ad} ${this.soyad}`;
// }

// function Öğrenci(ad, soyad, yaş, sınıf) {
//     Person.call(this, ad, soyad, yaş, sınıf);
//     this.yaş = yaş;
//     this.sınıf = sınıf;
// }
// Öğrenci.prototype = Object.create(Person.prototype);

// Öğrenci.prototype.selamVer = function () {
//     return `Merhaba ben ${this.sınıf}. sınıfa giden ${this.ad} ${this.soyad}`;
// }

// Öğrenci.prototype.yaşınıSöyle = function () {
//     return `Merhaba ben ${this.yaş} yaşındayım`;
// }



// const emre = new Person('emre', 'altunbilek');
// const hasan = new Person('hasan', 'yılmaz');
// console.log(emre.selamVer());
// console.log(hasan.selamVer());

// const ayşe = new Öğrenci('ayşe', 'fatma', 21, 9);

// console.log(ayşe.selamVer());
// console.log(ayşe.yaşınıSöyle());
// /*
// function MyArray() {

// }
// MyArray.prototype = Object.create(Array.prototype);
// const myArray = new MyArray();

// myArray.push(123123);
// myArray.push(1123);
// myArray.push('asdf');
// myArray.push(11);
// myArray.push(1);

// console.log(myArray);

// */

// Array.prototype.kendiMapYapım = function (işlem) {
//     const yeniDizi = [];
//     for (let i = 0; i < this.length; i++) {
//         yeniDizi.push(işlem(this[i], i));
//     }
//     return yeniDizi;
// }

// const dizi = [1, 2, 3];
// const yeniDizi = dizi.map(function (sayı) {
//     return sayı + 2;
// });

// const myYenidizi = dizi.kendiMapYapım(function(sayı){
//     return sayı + 2;
// })
// console.log(yeniDizi);
// console.log(myYenidizi);