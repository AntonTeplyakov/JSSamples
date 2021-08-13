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