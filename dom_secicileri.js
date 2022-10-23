// // // TEK ELEMENT SEÇİCİLERİ 
// // console.log(document.getElementById('başlık'));

// // const başlık = document.getElementById('başlık');

// // //js ile stili değiştirme
// // başlık.style.backgroundColor = 'red';
// // başlık.style.color = 'white';
// // başlık.style.padding = '2rem';

// // başlık.textContent = 'Bu yeni başlık';

// // const test = başlık.textContent;

// // console.log(test);

// // başlık.innerText = 'Yeni başlık';
// // başlık.innerHTML = '<img src="https://source.unsplash.com/100x100" alt=""></img>';

// // console.log(document.querySelector('h2'));
// // console.log(document.querySelector('#liste'));
// // console.log(document.querySelector('.liste-item'));
// // console.log(document.querySelector('.link.link-google'));

// // const myListe = document.querySelector('li')
// // myListe.style.color ='blue';
// // document.querySelector('li:last-child').style.color ='brown';
// // document.querySelector('li:nth-child(2)').style.color ='purple';
// // document.querySelector('li:nth-child(3)').style.color ='green';
// // document.querySelector('li:nth-child(odd)').style.color ='teal';
// // document.querySelector('li:nth-child(even)').style.color ='red';


// const linkler = document.getElementsByClassName('link');
// console.log(linkler[0]);
// console.log(linkler[1]);
// console.log(linkler[2]);

// linkler[0].style.color = 'red';
// linkler[1].style.backroundColor = '#ccc';
// linkler[2].textContent = 'INSTAGRAM LİNKİ';

// console.log(document.querySelector('ul').getElementsByClassName('liste-item'));

// const dizi = Array.from(linkler);
// dizi.reverse();
// dizi.forEach(item => {
//     console.log(item);
// });
// const listeElemanları = document.getElementsByTagName('li');
// console.log(listeElemanları);

// const şehirlerTek = document.querySelectorAll('li:nth-child(odd)');
// const şehirlerÇift = document.querySelectorAll('li:nth-child(even)');

// şehirlerTek.forEach(item => {
//     item.style.backroundColor = '#ccc';
// });
// for (let i = 0; i < şehirlerÇift.length; i++) {
//     şehirlerÇift[i].style.backroundColor = '#eee';

// }
// console.log();

