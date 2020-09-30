// Object Constructors

function Client2(cname, cbalance) {
    this.cname = cname;
    this.cbalance = cbalance;
}
 

Client2.prototype.cmembership = function() {
    let cname;
    if(this.cbalance > 9000) {
        cname = 'Gold';
    } else if(this.cbalance > 5000) {
        cname = 'Platinum';
    } else{
        cname = 'Normal';
    } return cname;

}

// second prototype

Client2.prototype.client2Info = function() {
    return `Name: ${this.cname}, Balance: ${this.cbalance}, Membership: ${this.cmembership() }`

}

//withdrawal prototype
Client2.prototype.withdraw = function(amount) {
    this.cbalance -= amount;
}

//withdrawal prototype
Client2.prototype.deposit = function(amount) {
    this.cbalance += amount;
}

//withdrawal prototype
Client2.prototype.getBalance = function() {
    return this.cbalance;

}

const person4 = new Client2('Moses', 9001);
const person5 = new Client2('Jules', 2000);
const person6 = new Client2('John', 300);

//Business
function Business(cname, cbalance, cphone, ccategory) {

    //Inheriting from the Client function
    Client2.call(this, cname, cbalance);
    this.cphone = cphone;
    this.ccategory =ccategory;

}

//Inherit the prototypes
Business.prototype = Object.create(Client2.prototype);

Business.prototype.businessInfo = function() {
    return `Name: ${this.cname}, Balance: ${this.cbalance}, Membership: ${this.cmembership()}, Category: ${this.ccategory}, Phone: ${this.cphone} }`

}

const business = new Business('Eaglink', 1000000, '0608247493', 'IT');
console.log(business);

console.log('----------------------' );
console.log(business.businessInfo() );

console.log('----------------------' );


console.log('----------------------' );


console.log('----------------------' );


console.log('----------------------' );


console.log('----------------------' );


console.log('----------------------' );

