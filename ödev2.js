/*
let üretilenSayı = (Math.random() * 90) + 10; // 77,6565656565
console.log("üretilen ondalık sayı" + üretilenSayı);
üretilenSayı = Math.floor(üretilenSayı); //floor fonsityonu 74

let kullanıcınınGirdiğiSayı = parseInt(prompt("İki basamaklı sayı giriniz:", "10"))

console.log(`Sistemin ürettiği sayı ${üretilenSayı} kullanıcının girdiği sayı ${kullanıcınınGirdiğiSayı}`);

let üretilenSayıBirlerBasamağı = üretilenSayı % 10;
let üretilenOnlarBasammağı = Math.floor(üretilenSayı / 10);

console.log(`üretilen sayının birler basamağı ${üretilenSayıBirlerBasamağı} onlar basamağı:
${üretilenOnlarBasammağı}`);


let userSayıBirlerBasamağı = kullanıcınınGirdiğiSayı % 10;
let userSayıOnlarBasammağı = Math.floor(kullanıcınınGirdiğiSayı / 10);

console.log(`Kullanıcı sayısının birler basamağı ${userSayıBirlerBasamağı} onlar basamağı:${userSayıOnlarBasammağı}`);



if (üretilenSayı === kullanıcınınGirdiğiSayı) {
    console.log("Tebrikler 1000 TL kazandınız Tahmininiz: "  + kullanıcınınGirdiğiSayı + " Üretilen " + üretilenSayı);

}
else if (üretilenSayıBirlerBasamağı === userSayıOnlarBasammağı && üretilenOnlarBasammağı == userSayıBirlerBasamağı) {

    console.log("Tebrikler 5000 TL kazandınız Tahmininiz: " + kullanıcınınGirdiğiSayı + " Üretilen " + üretilenSayı);
}
else if (üretilenSayıBirlerBasamağı === userSayıBirlerBasamağı || üretilenOnlarBasammağı === userSayıOnlarBasammağı) {
    console.log("Tebrikler 1000 TL kazandınız Tahmininiz:  " + kullanıcınınGirdiğiSayı + " Üretilen " + üretilenSayı);
}
else {
    console.log("Malesef kazanamadınız Tahmininiz:  " +  kullanıcınınGirdiğiSayı + "   Üretilen:  " + üretilenSayı);
} // 84, 83, 79, 49
*/