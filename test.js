const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
      console.log(request, request.responseText);
    } else if (request.readyState === 4);
    {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

const getSomething = () => {
    return new Promise((resolve,reject) =>{
        //fetch something
        resolve('some data');
       // reject('some error');
    });
};

getSomething().then((data) =>{
  console.log(data);
},(err) =>{
  console.log(err);
});



// let resource = "https://jsonplaceholder.typicode.com/posts";

// getTodos(resource, (err, data) => {
//   console.log(data);
// });


