// Soru 1 = klavyeden girilen 3 sayısının ortalamasını alan bir uygulama yazınız.

/*
let birinciSayı = parseInt (prompt(" Birinci Sayıyı Giriniz","1"));
let ikinciSayı = parseInt (prompt("İkinci Sayı Giriniz","1"));
let üçüncüSayı = parseInt (prompt("Üçüncü Sayı Giriniz","1"));

let ortalama = (birinciSayı+ikinciSayı+üçüncüSayı) / 3;
alert ("Girdiğiniz sayıların ortalaması:" + ortalama);
*/

// Soru 2 = klavyeden kenarları girilen bir üçgenin çeşidini veren uygulama yazınız.

/*
let birinciKenar = parseInt(prompt(" Birinci kenarı Giriniz:", "4"));
let ikinciKenar = parseInt(prompt(" İkinci kenarı Giriniz:", "4"));
let üçüncüKenar = parseInt(prompt(" Üçüncü kenarı Giriniz:", "4"));

if ((birinciKenar == ikinciKenar) && (birinciKenar == üçüncüKenar)){
    alert("Bu bir eşkenar üçgendir");

} else if (birinciKenar != ikinciKenar && birinciKenar != üçüncüKenar
    && ikinciKenar != üçüncüKenar){
        alert("Bu bir çeşit kenar üçgendir");
    } else{
        alert("Bu bir ikiz kenar üçgendir");
    }
    */

// Soru 3 = Klavyeden girilen final notlarına göre öğrencinin geçemediğini söyleyen bir uygulama yazınız
// (Geçme notu : 50  vizenin %40'ı finalin %60'ı geçerlidir.)

/*
let vizeNotu = parseInt(prompt("Vize Notunu Giriniz:", "50"));
let finalNotu = parseInt(prompt("Final Notunu Giriniz:", "50 "));

let ortalama = vizeNotu * 0.4 + finalNotu * 0.6;

if (ortalama >= 50) {
    alert("Tebrikler Sınavı Geçtiniz:" + ortalama);
}
else {
    alert("Malesef Sınavı Geçemediniz:" + ortalama);
}
*/



