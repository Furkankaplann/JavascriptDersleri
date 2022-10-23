/*Soru8:
Aşağıda tanımı verilenf(x,y)fonksiyonunu klavyeden girilenxveydeğerleri için
hesaplayınız.
x>0,y<eisef(x,y)=4x+2y+4
x>0,y=0isef(x,y)=2x-y+3
x<0,y>eisef(x,y)=3x+4y+3*/

/*
let xDegeri = parseInt(prompt("x değerini giriniz","1"));
let yDegeri = parseInt(prompt("y değerini giriniz","1"));
let islemSonucu = 0;
if (xDegeri > 0 && yDegeri < 0) {
    islemSonucu = 4 * xDegeri + 2 * yDegeri + 4;
} else if (xDegeri > 0 && yDegeri == 0) {
    islemSonucu = 2 * xDegeri - yDegeri + 3;
} else if (xDegeri < 0 && yDegeri > 0) {
    islemSonucu = 3 * xDegeri + 4 * yDegeri + 3;
}
console.log(`x: ${ xDegeri } y: ${yDegeri} ve sonuc: ${islemSonucu}`);
*/


// Soru9:100lük sistemde verilen notlari harfli sistemde gösteren bir uygulama yazınız.

/*
let yüzlükSistemdekiNot = parseInt(prompt("Notunuzu giriniz", "50"));
let notSınırı = parseInt(yüzlükSistemdekiNot / 10);
console.log("yüzlük sistemdeki not:  " + yüzlükSistemdekiNot + " Sınır" + notSınırı);

switch (notSınırı) {
    case 10: console.log("Notunuz AA "); break;
    case 9: console.log("Notunuz AA "); break;
    case 8: console.log("Notunuz BA "); break;
    case 7: console.log("Notunuz BB "); break;
    case 6: console.log("Notunuz CB "); break;
    case 5: console.log("Notunuz CC "); break;
    default: console.log("Notunuz CC'den düşük");

}
*/


// Soru 10:Carpım tablosunu oluşturan bir uygulama yazınız.

/*

let yazdıralacakMetin = "";
for (let i = 1; i <= 10; i++) {

    for (let j = 1; j <= 10; j++) {

       
       
       
        yazdıralacakMetin = yazdıralacakMetin + (i + "*" + j + "=" + (i * j)) + "\t";
    }



    console.log(yazdıralacakMetin);
    yazdıralacakMetin = "";
}

*/