// let isimler = ["Furkan", "Enes", "Eymen"];
// console.log(isimler.toString());
// console.log(isimler.join(" | "));


// // " PUSH " Bir dizinin sonuna yeni öğeler ekler ve dizinin yeni uzunluğunu döndürür.

// let diziElemanSayısı = isimler.push("Furkan");
// console.log(isimler.toString() + " dizinin eleman sayısı: " + diziElemanSayısı);

// // "POP " Bir diziden son öğeyi kaldırır ve onu döndürür. 
// //Dizi boşsa, undefined döndürülür ve dizi değiştirilmez.

// let diziÇıkarılanEleman = isimler.pop();

// console.log(isimler + " -Çıkarılan Eleman : " + diziÇıkarılanEleman);

// // "SHİFT " Bir diziden son öğeyi kaldırır ve onu döndürür. 
// //Dizi boşsa, undefined döndürülür ve dizi değiştirilmez.

// isimler.shift();
// console.log(isimler.toString());

// // Dizinin başına yeni öğeler ekler ve dizinin yeni uzunluğunu döndürür.

// isimler.unshift("Yeni Eleman ");
// console.log(isimler.toString());

// // "DELETE" isim silmeye yarar.

// delete isimler[1];
// console.log(isimler.toString());


// // "SPLİCE " Öğeleri diziden kaldırır ve gerekirse yerlerine 
// //yeni öğeler ekleyerek silinen öğeleri döndürür.

// let sayılar = [1, 2, 3, 4, 5, 6, 7, 8];

// sayılar.splice(8, 0, 9, 10);
// console.log(sayılar.toString());

// // (içerisine yazılan elemanları verdiğin atamaya göre siler ve başlatır.)

// sayılar.splice(0, 4);
// console.log(sayılar.toString());

// // "spilce " 0 elemandan başla 4. elemanı sil sildiğin elemanlarıda 
// //log.isimlere ata.

// let silinenler = sayılar.splice(0, 4);
// console.log(sayılar.toString());
// console.log(isimler);

// let tekSayılar = [1, 3, 5];
// let çiftSayılar = [2, 4, 6];
// // " CONCAT" İki veya daha fazla diziyi birleştirir.
// // Bu yöntem, mevcut dizileri değiştirmeden yeni bir dizi döndürür.

// let sayılarım = tekSayılar.concat(çiftSayılar);
// console.log(sayılarım.toString());

// let yeniDizi = sayılarım.slice(2, 4);
// console.log(yeniDizi.toString());
