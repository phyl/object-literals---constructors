// Object Constructors

function Client2(name1, balance1) {
    this.name1 = name1;
    this.balance1 = balance1;
}


Client2.prototype.membership1 = function() {
    let name1;
    if(this.balance1 > 9000) {
        name1 = 'Gold';
    } else if(this.balance1 > 5000) {
        name1 = 'Platinum';
    } else{
        name1 = 'Normal';
    } return name1;

}

// second prototype

Client2.prototype.client2Info = function() {
    return `Name: ${this.name1}, Balance: ${this.balance1}, Membership: ${this.membership1() }`

}

//withdrawal prototype
Client2.prototype.withdraw = function(amount) {
    this.balance1 -= amount;
}

//withdrawal prototype
Client2.prototype.deposit = function(amount) {
    this.balance1 += amount;
}

//withdrawal prototype
Client2.prototype.getBalance = function() {
    return this.balance1;

}

const person4 = new Client2('Moses', 9001);
const person5 = new Client2('Jules', 2000);
const person6 = new Client2('John', 300);

console.log('----------------------' );


console.log('----------------------' );


console.log('----------------------' );


console.log('----------------------' );


console.log('----------------------' );


console.log('----------------------' );


console.log('----------------------' );

