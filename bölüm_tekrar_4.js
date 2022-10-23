/* Soru 11 -  
Sıcak soğuk oyunu yapalım. Sistem 100e kadar bir sayı üretsin. kullanıcı
bu sayıyı tahmin etmeye çalışsın. Kullanıcının girdiği değere göre kullanıcıya
arttır azart diyerek uyaralım.
Kullanıcı sayıyı bulana kadar tahmin istemeye devam etsin ve sayıyı bulduğunda
kaç denemeden sonra bulduğunu belirtelim 
*/

/*
let üretilenSayı = parseInt(Math.random() * 101);
console.log("ÜretilenSayı: " + üretilenSayı);

let tahmin = -1;
let tahminSayısı = 0;
while (tahmin != üretilenSayı) {

    tahmin = parseInt(prompt("Bir Sayı Giriniz:"));
    tahminSayısı++;
    if (tahmin == üretilenSayı) {

        console.log("Tebrikler " + tahminSayısı + " seferde " + " bildiniz");
    } else if (tahmin < üretilenSayı) {
        console.log("Biraz daha çık");
    } else {
        console.log("Biraz daha in");
    }

}

*/





/*
 Soru 12 - Kullanıcının sürekli olarak sayı alan ve de 
kullanıcı 0a bastığında girdiği sayıların çarpım sonuçunu 
gösteren program yazın.
*/


/*
let girilenSayı = parseInt(prompt("Sayı Giriniz:"))
let çarpımSonucu = 1;

while( girilenSayı != 0){
    çarpımSonucu = çarpımSonucu * girilenSayı;
    girilenSayı = parseInt(prompt("Sayı Giriniz:"));
}
console.log("çarpımSonucu : " + çarpımSonucu);
*/



/* 
Soru 13- Kullanıcıdan aldığınız iki integer değerinin en büyük ortak bölenini
bulan uygulama örneyi yazınız. Örneğin 14 ve 35 sayıları için ebob = 7 olmalıdır 
*/




/*
let sayı1 = parseInt(prompt("Bir sayı Giriniz:"));
let sayı2 = parseInt(prompt("Bir sayı Giriniz:"));

let ebob = 1, kontrol = 2;

while (kontrol <= sayı1 && kontrol <= sayı2) {
    if (sayı1 % kontrol == 0 && sayı2 % kontrol == 0 ) {
        ebob = kontrol;
    }
    kontrol++;
}

if ( ebob == 1 ) {
    console.log("Bu sayılar aralarında asaldır.");
} else {
    console.log("Bu sayıların ortak böleni : " + ebob +"'dir.");
}


*/