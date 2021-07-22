// const li = document.querySelectorAll('li');

// li.forEach(item=>{
//     item.addEventListener('click',e =>{
//         // e.target.style.textDecoration = 'line-through';
//         e.target.remove();
//     });
// });

const arr = [10, 15, 40, 5, 60, 35, 25, 45, 5, 10];

const result = arr.filter((arr) => {
    return arr < 20;
});

console.log(result);
