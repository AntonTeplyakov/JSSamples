const patr = document.querySelector("p");

console.log(patr.getAttribute('class'));

patr.setAttribute('class', 'success');
patr.innerText = "Succesful login!";