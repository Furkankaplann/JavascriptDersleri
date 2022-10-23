// // Js object oriented bir dildir ama bu onun Java, C# gibi olduğu anlamına gelmez.
// // OPP bir aile ise, class based onun bir parçasıdır diyebiliriz. protype-base gibi.

// // Javascript ise a multi-paradigm language that support procedural, object-oriented
// // (prototype-based) and functional programming styles.

// class Person {

//     static sayaç = 0;

//     constructor(ad, soyad) {
//         this.ad = ad;
//         this.soyad = soyad;
//         Person.sayaç++;
//     }
//     selamVer() {

//         return `merhaba ben ${this.ad + " " + this.soyad}`;
//     }
// }

// class Öğrenci extends Person {

//     constructor(ad, soyad, sınıf) {
//         super(ad, soyad);
//         this.sınıf = sınıf;
//     }

//     sınıfSöyle() {
//         return `ben ${this.sınıf}. sınıf öğrencisiyim`
//     }
//     selamVer() {

//         return `merhaba ben ${this.ad + " " + this.soyad} ve ${this.sınıf}. öğrencisiyim`;
//     }
// }

// const emre = new Person('emre', 'altunbilek');
// console.log(emre.selamVer());
// const hasan = new Person('hasan', 'yıldız');
// console.log(hasan.selamVer());

// const ayşe = new Öğrenci('ayşe', 'fatma', 10);
// console.log(ayşe.selamVer());


// console.log("Oluşturulan sayaç sayısı :" + Person.sayaç);