const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute('href', "https://www.Transit.ru");
link.innerText = "Transit.ru";

console.log(link.getAttribute("href"));
