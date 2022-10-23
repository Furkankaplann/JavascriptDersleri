/* Soru = 14 : Kullanıcıdan aldığınız integer değere kadar olan tüm asal sayıları yazdıran programı yazınız.
10 için 2,3,5,7 değerleri olmalıdır */


/*
let girilenSayı = parseInt(prompt("Bir sayı giriniz: " , "10"));
let gösterilecekMetin = "";

for (let i = 2; i <= girilenSayı; i++) {

    let asalSayıMı = true;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            asalSayıMı = false;
            break;
        }
    }
    if (asalSayıMı == true) {
        gösterilecekMetin = gösterilecekMetin + i + " ";
    }
    
    
}
console.log(gösterilecekMetin);  

*/







/*Soru =15 =  1 + 2 + 4 + 7 + 11 + 16 + 20 + 23 + 25 + 28 + 31 + 35 = 229 ? işleminin sonucunu bulan js kodunu yazınız.
*/


/*
let artisMiktarı = 0;
let artıyorMu = true;
let toplam = 0;
let gösterilecekMetin = "";

for (let i = 1; i <= 35; i = i + artisMiktarı) {


    if (i != 35) {
        toplam = toplam + i;
        gösterilecekMetin = gösterilecekMetin + i + " + ";

    } else {
        toplam = toplam + i;
        gösterilecekMetin = gösterilecekMetin + i + " = " + toplam;
    }

    if (artisMiktarı <= 4 && artıyorMu == true) {
        artisMiktarı++;
        if (artisMiktarı == 5) {
            artıyorMu = false;
            continue;
        }
    } else {
        artisMiktarı--;
        if (artisMiktarı == 1) {
            artıyorMu = true;
            continue;
        }
    }
}
console.log(gösterilecekMetin);
*/