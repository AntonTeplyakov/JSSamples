<<<<<<< HEAD
class User {
    constructor(username,email){
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login(){
        console.log(`${this.username} just logged in`);
        return this;   
    }
    logout(){
        console.log(`${this.username} just logged out`);   
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }

}

const userOne = new User('dfgdfdg','ertretrrt@dfgdfgd.com');
const userTwo = new User('fdhdfh','dfgdfgd@dfgdfgd.com');

console.log(userOne.login().logout());
console.log(userTwo.login().incScore().incScore());
=======
localStorage.setItem("Anton", 34);

let age = localStorage.Anton;

console.log(age);

localStorage.removeItem("Anton");

let my_age = localStorage.getItem("Anton");

console.log(my_age);
>>>>>>> ff9fdc5a12b7d52ab89e5297a8f6bd85f52c66f4
