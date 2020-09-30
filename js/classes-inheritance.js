class Client8 {
    constructor(name8, balance8) {
        this.name8  = name8;
        this.balance8 = balance8;
    }

membership8() {
    let name8;

    if(this.balance8 > 2000) {
        name8 = 'Gold';
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


getBalance8() {
    return this.balance8;
}

// Let's add a static method. NB: Static methods do need instatiation. See ho it is called below
static welcome() {
    return `Welcome to your bank`
}

}

//Iheritance starts here
//Business class
class Business extends Client8 {
    constructor(name8, balance8, phone8, category8) {
        // access the parent constructor
        super(name8, balance8);
        this.phone8 = phone8;
        this.category8 =category8;
    }

    clientInfo8() {
        //overwrite the parent method so as to include phone and category
        return `Name: ${this.name8}, Balance: ${this.balance8}, Membership: ${this.membership8()}, Phone: ${this.phone8}, Category: ${this.category8} `
    
    }

    //If you dont want to change anything, you can still use the parent static method
    static welcome() {
        return `Welcome to your personal banker`;
    }
}

//instantiate the subclass
const business = new Business('Vestec', 10000, 1255485265, 'Real Estate');
console.log(Business.welcome() );
console.log(business);
console.log('--------------------');
console.log(Business.welcome() );
console.log(business.clientInfo8() );
