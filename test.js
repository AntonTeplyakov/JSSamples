const li = document.querySelectorAll('li');

li.forEach(item=>{
    item.addEventListener('click',e =>{
        // e.target.style.textDecoration = 'line-through';
        e.target.remove();
    });
});

