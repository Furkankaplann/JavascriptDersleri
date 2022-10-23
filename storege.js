// const ulListesi = document.querySelector('.liste');
// const isimDizisi = JSON.parse(localStorage.getItem('isimListesi'));

// isimDizisi.forEach(function (isim) {
//     const yeniLi = document.createElement('li');
//     yeniLi.textContent = isim;
//     ulListesi.appendChild(yeniLi);
// });

// document.querySelector('#from').addEventListener('submit', function (e) {
//     const yeniİsim = document.querySelector('.isim').value;
//     let isimDizisi;

//     if (localStorage.getItem('isimListesi') === null) {
//         isimDizisi = [];
//     } else {
//         isimDizisi = JSON.parse(localStorage.getItem('isimListesi'))
//     }
//     isimDizisi.push(yeniİsim);

//     localStorage.getItem('isimListesi', JSON.stringify(isimDizisi));
//     const yeniLi = document.createElement('li');
//     yeniLi.textContent = isim;
//     ulListesi.appendChild(yeniLi);


//     e.preventDefault();
// })