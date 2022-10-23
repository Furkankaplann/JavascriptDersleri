// Array destructuring
let isim = ['emre', 'altunbilek'];
const ad = isim[0];

const [first, last] = isim;
console.log(isim[1]);
console.log(first, last);

const renkler = ['sarı', 'yeşil', 'mavi', 'kırmızı', 'kahverengi', 'turuncu', 'mor'];

const [r1, r2, /*renk değerini atlamak için , konuluyor */, r3] = renkler;

const [c1, c2, ...geriKalanRenkler] = renkler;
console.log(r1, r2, r3);
console.log(c1, c2, geriKalanRenkler);

// default varsayılan değer ataması             // eğer 3.atama yapılırsa bilinmiyor yerine 3. atama gelir.
const [t1, t2, t3 = "T3: Bilinmiyor", t4 = "T4: Tanımlanmadı"] = ['galatasaray', 'beşiktaş', 'Fenerbahçe']
console.log(t1, t2, t3, t4);


// object destructuring

let ayarlar = {
    başlık: 'JS Harika',
    genişlik: '300px',
    yükseklik: '300px'
};

const başlık = ayarlar.başlık;
const {b,g,y, } = ayarlar;
console.log(b,g,y);;
