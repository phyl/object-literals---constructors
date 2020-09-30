class Client8 {
    constructor(name8, balance8) {
        this.name8  = name8;
        this.balance8 = balance8;
    }

membership8() {
    let name8;

    if(this.balance8 > 2000) {
        name = 'Gold';
    } else if(this.balance8 > 1000) {
        name8 = 'Platinum';
    } else {
        name8 = 'Normal';
    }

    return name8;

}

clientInfo8() {
    return `Name: ${this.name8}, Balance: ${this.balance8}, Membership: ${this.membership8() }`

}

withdraw8(amount8) {
    this.balance8 -= amount8;
}
deposit8(amount8) {
    this.balance8 += amount8;
}

getBalance8() {
    return this.balance8;
}

// Let's add a static method. NB: Static methods do need instatiation. See ho it is called below
static welcome() {
    return `Welcome to your bank`
}

}


console.log(Client8.welcome() ); //you dont to say emma.welcome()

const emma = new Client8('Emma', 600);
console.log(emma);
console.log(emma.clientInfo8());
console.log('---------------------');

console.log(Client8.welcome() ); //you dont to say emma.welcome()

emma.deposit8(600);
console.log(emma.clientInfo8());
console.log('---------------------');

console.log(Client8.welcome() ); //you dont to say emma.welcome()
emma.withdraw8(199);
console.log(emma.clientInfo8());
