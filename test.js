const ul = document.querySelector('ul');

arr = ['Jack', 'Anton', 'Jane', 'Lee'];

arr.forEach((people, ind) => {
    ul.innerHTML += `<li>The best score: ${ind+1}. ${people}</li>`
});

