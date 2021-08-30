// function User(username, email){
//     this.username = username;
//     this.email = email;
// }

// User.prototype.login = function(){
//     console.log(`${this.username} has logged in`)
//     return this;
// };

// User.prototype.logout = function(){
//     console.log(`${this.username} has logged out`)
//     return this;
// };

// function Admin(username,email,title){
//     User.call(this,username,email);
//     this.title = title;
// }

// Admin.prototype = Object.create(User.prototype);
// // Admin.prototype = (User.prototype);


// Admin.prototype.login = function(){
//     console.log(`${this.username} has own logIn method!`);
// }




// const userOne = new User('dfgdfdg','ertretrrt@dfgdfgd.com');
// const userTwo = new User('fdhdfh','dfgdfgd@dfgdfgd.com');
// const userThree = new Admin('Anton','tr@fg.com','Working!');

// console.log(userOne,userTwo,userThree);
// userOne.login();
// userThree.login();
// userOne.login();
// class User {
//     constructor(username,email){
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }

//     login(){
//         console.log(`${this.username} just logged in`);
//         return this;   
//     }
//     logout(){
//         console.log(`${this.username} just logged out`);   
//         return this;
//     }
//     incScore(){
//         this.score += 1;
//         console.log(`${this.username} has a score of ${this.score}`);
//         return this;
//     }

// }

// const userOne = new User('dfgdfdg','ertretrrt@dfgdfgd.com');
// const userTwo = new User('fdhdfh','dfgdfgd@dfgdfgd.com');

// console.log(userOne.login().logout());
// console.log(userTwo.login().incScore().incScore());

// const m = ([...spr])=>{
//     console.log(spr);
// };

// m(new Set(['dfgdfg', 'sdgdsg','gdsfgdg']));

var handler = {
    get: function(target, name){
        return name in target?
            target[name] :
            'hello';
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37
