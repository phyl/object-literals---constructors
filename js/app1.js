// Object Literals
const client = {
    name: 'Phyllis',
    balance: 10000,
    membership: function() {
        let name;
        if(this.balance > 9000) {
            name = 'Gold';
        } else if(this.balance > 5000) {
            name = 'Platinum';
        } else{
            name = 'Normal';
        } return name;

    }
}
console.log(client);
console.log(client.name);
console.log(client.balance);
console.log(client.membership());

// Object Constructors

function Client(name1, balance1) {
    this.name1 = name1;
    this.balance1 = balance1;
}


Client.prototype.membership2 = function() {
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

Client.prototype.clientInfo = function() {
    return `Name: ${this.name1}, Balance: ${this.balance1}, Membership: ${this.membership2() }`

}

//withdrawal prototype
Client.prototype.withdraw = function(amount) {
    this.balance1 -= amount;
}

//withdrawal prototype
Client.prototype.deposit = function(amount) {
    this.balance1 += amount;
}

//withdrawal prototype
Client.prototype.getBalance = function() {
    return this.balance1;
}

const person = new Client('Moses', 9001);
const person2 = new Client('Jules', 2000);
const person3 = new Client('John', 300);

console.log('----------------------' );

console.log('Person 1\'s details' );
console.log(person);
console.log(person.membership2()) ;
console.log('----------------------' );
console.log('Person 1\'s details after withdrwal' );
person.withdraw(6000);
console.log(person);
console.log(person.getBalance());
console.log('----------------------' );
console.log('Person 2\'s details' );
console.log(person2);
console.log(person2.membership2() );
console.log('----------------------' );
console.log('Person 3\'s details' );
console.log(person3.clientInfo()) ;
console.log('----------------------' );
console.log('Person 3\'s details after deposit' );
person3.deposit(10000);
console.log(person3.clientInfo()) ;
console.log('----------------------' );
console.log('Person 3\'s details after withdrwal' );
person3.withdraw(22);
console.log(person3.clientInfo());
console.log('----------------------' );



// function MyData(foo, bar) {
//     this.foo = foo;
//     this.bar = bar;

//     this.verify = function () {
//         return this.foo === this.bar;
//     };

// }
//     const q = new MyData('umm', 'klm')

// console.log(q);
// console.log(q.foo);
// console.log(q.bar);





// Functions

// App initialization