const pl = document.querySelectorAll('p');
const h1 = document.querySelector('.title');

h1.classList.toggle('title');
h1.classList.toggle('title');

pl.forEach(p => {
    console.log(p.textContent);
    if (p.textContent.includes('error')){
    p.classList.add('error')}
});

