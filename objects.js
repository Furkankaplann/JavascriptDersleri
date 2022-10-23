
// // // //object nedir, hatırlayalım.
// // // //object literals
// // const furkan = {
// //     ad: 'furkan',
// //     evliMi: false,
// //     yaş: 27,
// //     sevdiğiRenkler: ['kırmızı', 'yeşil'],
// //     adres: {
// //         il: 'istanbul',
// //         plakaKod: 34,
// //     },
// //     bilgileriSöyle: function () {
// //         return ` benim adım ${this.ad} yaşım ${this.yaş}`; //template literal
// //     },
// //     ['full-name']: 'Furkan Kaplan',
// // };
// // console.log(furkan.bilgileriSöyle());
// // furkan.yaş = 29;
// // console.log(furkan);
// // const enes = {
// //     ad: 'enes',
// //     evliMi: false,
// //     yaş: 26,
// //     sevdiğiRenkler: ['kırmızı', 'yeşil'],
// //     adres: {
// //         il: 'istanbul',
// //         plakaKod: 34,
// //     },
// //     bilgileriSöyle: function () {
// //         return ` benim adım Enes yaşım 26`;
// //     },
// //     ['full-name']: 'Enes Kaplan',
// // };
// // const emre = öğrenci('emre', 32, false, 'ege');
// // const hasan = createÖğrenci('hasan', 36, true, 'marmara');
// // function createÖğrenci(ad, yaş, evliMi, okul) {
// //     return {
// //         isim: ad,
// //         yaş: yaş,
// //         medenihali: evliMi,
// //         MezunOlduğuOkul: okul,
// //         //method
// //         bilgileriGöster: function () {
// //             return `isimim ${this.isim} yaşım ${this.yaş} ve okulum ${this.MezunOlduğuOkul}     `
// //         }
// //     };
// // }
// // //console.log(emre.bilgileriGöster());
// // //console.log(hasan.bilgileriGöster());

// // /////              -------BÖLÜM 2  ------------- /////

// // function öğrenci(ad, yaş, evliMi, okul) {
// //     this.isim = ad;
// //     this.yaş = yaş;
// //     this.medenihali = evliMi;
// //     this.MezunOlduğuOkul = okul;
// //     this.bilgileriGöster = function () {
// //         return `isimim ${this.isim} yaşım ${this.yaş} ve okulum ${this.MezunOlduğuOkul}     `
// //     }
// // };


// // // NEW KULLANILDIĞINDA 3 ŞEY GERÇEKLEŞİR
// // // 1. YENİ BİR OBJE OLUŞTURUR
// // // 2. RETRUN YAZMAK ZORUNDA KALMAYIZ
// // // 3. THİS KELİMESİNİ O AN OLUŞTURULAN NESNEYE BAŞLAR

// // const yunus = new öğrenci('yunus', 30, false, 'itü');
// // console.log(yunus.constructor);

// // //JSdeki tüm objeler onu oluşturan constructor fonksiyonlara erişilebilir
// // // js ile beraber gelen built in constructor functionlar vardır
// // // dizilier ve fonksiyonlar aslında objecttir. sipat ?
// // // her constructor fonction/class aynı krucu fonksiyonla oluşturulan ...
// // // instance'ların ortak olarak kullanabilecekleri prototype isimli...
// // // propertype sahiptir.Protetype proteyp de bir nesne döndürdür.




// // const denemeObject = {};
// // console.log(denemeObject.constructor);

// // const dizi = [];
// // console.log(dizi.constructor);
// // //
// // //const fonk = function () { }
// // //console.log(fonk.constructor);

// // //ƒ Array() { [native code] }
// // //ƒ Function() { [native code] }   console'de gözüken şekil.
// // //ƒ Object() { [native code] }

// // // arraylerde fonk. kurucu metodlara erişebiliyorsa onlar birer obje dir.


// // öğrenci.prototype.okul = "ege üniversitesi";
// // öğrenci.prototype.bilgileriGöster = function () {
// //     return `isimim ${this.isim} yaşım ${this.yaş} ve okulum ${this.MezunOlduğuOkul}`
// // };
// // öğrenci.prototype.toString = function () {
// //     return "öğrenci yazdırılacak";
// // }

// // function öğrenci(ad, yaş, evliMi) {
// //     this.isim = ad;
// //     this.yas = yaş;
// //     this.evliMi = evliMi;
// // }


// // const yunus1 = new öğrenci('yunus', 32, false);
// // const hasan1 = new öğrenci('hasan', 60, false);

// // console.log("****" + emre);
// // console.log(hasan.bilgileriGöster());

// // console.log(emre.constructor.prototype);
// // console.log(Object.getPrototypeOf(hasan));

// // const dizi1 = [1, 2, 3,];
// // const dizi2 = [4, 5, 6];
// // console.log(dizi.constructor.prototype);
// // dizi.push(1);

// bilgileriGöster = function () {
//     return `isimim ${this.isim} yaşım ${this.yaş} ve okulum ${this.MezunOlduğuOkul} `
// }



// function öğrenci(ad, yaş, evliMi) {
//     this.isim = ad;
//     this.yas = yaş;
//     this.evliMi = evliMi;
// }

// const emre = new öğrenci('emre', 32, false);
// const hasan = new öğrenci('hasan', 60, false);

// console.log(bilgileriGöster(emre));
// console.log("****" + emre);
// console.log(bilgileriGöster(hasan));
// console.log(emre.constructor.prototype);
// console.log(Object.getPrototypeOf(hasan));


// const dizi = [1, 2, 3,];
// const dizi2 = [4, 5, 6];


// console.log(dizi.constructor.prototype);
// dizi.push(1);

// const isim  ='emre';
// console.log(typeof isim);
// console.log(isim instanceof Object);
// console.log(isim.toUpperCase());

// console.log(isim.constructor.prototype);
// console.log(isim.charAt(0));


