const pl = document.querySelectorAll('p');

pl.forEach(p => {
    console.log(p.textContent);
    if (p.textContent.includes('error')){
    p.classList.add('error')}
});