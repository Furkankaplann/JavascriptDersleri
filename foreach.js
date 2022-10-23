/* -- KENDİ FOREACH'İM



let sayılar = [1, 2, 3, 4, 5, 6];

diziyiYazdır(sayılar, function (değer, index) {
    console.log("değer: " + değer + " index : " + index);
});

function diziyiYazdır(dizi, callback) {
    for (let i = 0; i < dizi.length; i++) {
        callback(dizi[i], i);
    }
}
*/