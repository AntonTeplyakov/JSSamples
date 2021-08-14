class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login() {
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout() {
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }

}

class Admin extends User {
    constructor(username, email, title) {
        super(username, email);
        this.title = title;
    }
    deleteUser(user) {
        users = users.filter((u) => {
            return u.username !== user.username
        })
    }
}

const userOne = new User('Jane', 'mirror@jeneva.com');
const userTwo = new User('Richard', 'gray@tea.com');
const userThree = new Admin('Anton', 'jsxlabor@SpeechGrammarList.com', 'blank');


let users = [userOne, userTwo, userThree];

userThree.deleteUser(userTwo);

console.log(userOne, userTwo, userThree);
userThree.incScore();
console.log(users);
