 function parantezlerDengeliMi(metin) {
     const dizi = metin.split('');
     const sonuç = dizi.reduce(function (previus, karakter) {
         if (previus < 0 ){
             return previus;
         }
         if (karakter === '(') {
             return ++previus;  // ++ bir arttırma işareti önce kullanıyor sonra
             // bir arttırıyor. sona yazılırsa eğer 0 ı yadıracak sonra arttıracak
             //sonda olması mantık hatası yaratır.
         }
         if (karakter === ')') {
             return --previus;  // -- bir arttırma işareti önce kullanıyor sonra
             // bir arttırıyor. sona yazılırsa eğer 0 ı yadıracak sonra arttıracak
             //sonda olması mantık hatası yaratır.
         }
         return previus;

     }, 0);
     if (!sonuç) {
         console.log(metin + "dengeli bir yapıdadır.");
     } else {
         console.log(metin + "dengeli bir yapıda değildir.");
     }
  
 }
 parantezlerDengeliMi('(())');