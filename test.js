// const li = document.querySelectorAll('li');

// li.forEach(item=>{
//     item.addEventListener('click',e =>{
//         // e.target.style.textDecoration = 'line-through';
//         e.target.remove();
//     });
// });

// const arr = [10, 15, 40, 5, 60, 35, 25, 45, 5, 10];

// const result = arr.map((arr) => {
//     return arr = arr / 5;
// });

// console.log(result);

const now = new Date();

console.log(now);
console.log("Year: ", now.getFullYear());
console.log("Month: ", now.getMonth());
console.log("Day: ", now.getDay());
console.log("Hours: ", now.getHours());
console.log("Minutes: ", now.getMinutes());
console.log("Seconds: ", now.getSeconds());

console.log("Time: ", now.getTime());

console.log("ShortDate", now.toDateString());
console.log("ShortTime", now.toTimeString());
console.log("System", now.toLocaleString());