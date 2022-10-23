// Soru 4= İsminizi  ekrana 5 kere yazdıran uygulamayı tüm döngülerle yazınız.

/*
for (let i = 0; i < 5; i++){
    console.log((i+1) + " Furkan KAPLAN");
}
*/

/*
let sayı = 0;

while (sayı < 5) {
    console.log("Furkan ");
    sayı++;  // sayı++ sonsuz olamamsı için.
}

*/

/*
let sayac1 = 0;

do{
    console.log((sayac1+1)+ " Furkan Do While ");
    sayac1++;
} while (sayac1 < 5);
*/

// Soru = 5 - 1 den 100 'e kadar sayıların toplamını bulan uygulama yazınız.

/*
let toplam = 0;

for (let i = 1; i < 100; i++) {
    toplam = toplam + i;
    //toplam = toplam += i;
}
console.log("1 den 100 e kadar olan sayıların toplamı : " + toplam);

*/


// Soru = 6 -  1'den 10' a kadar olan  sayıları sıra ile ve aralarında virgül olacak  şekilde yazan bir uygulama yazınız.

/*
let yazdırılacakMetin = "";
for (let i = 1; i <= 10; i++) {

    if(i!=10) {
        yazdırılacakMetin = yazdırılacakMetin + i+ ", " ;
    
    } else {
        yazdırılacakMetin = yazdırılacakMetin + i;
    }

}
    console.log(yazdırılacakMetin);

*/

// Soru = 7 klavyeden girilen bir sayının faktöriyelini olan bir uyg.yazınız.


/*
let sayı = parseInt(prompt("Faktöriyeli hesaplanacak sayı giriniz:", "10"));
let faktöriyel = 1;

for (let i = 1; i <= sayı; i++) {
    faktöriyel = faktöriyel * i;

}
console.log(`Girdiğiniz ${sayı} sayısının faktöriyeli ${faktöriyel} sayısıdır: `);
*/