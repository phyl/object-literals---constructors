// Object Create

const Client7 = {
    rate:17,
    getBalance7 : function() {
     return `Hello ${this.name7}, your balance is \$${this.balance7} and amount in Rands is R${this.randValue}`;
},

withdraw7 : function(amount7) {
    return this.balance7 -= amount7;
},

deposit7 : function(amount7) {
    return this.balance7 += amount7;
},

// randValue : function(amount7, rate) {
//     return this.balance7 * this.rate;
// }

}

const mary = Object.create(Client7);
mary.name7 = 'Mary';
mary.balance7 = 2000;
mary.randValue = mary.balance7*17;
 console.log(mary);
 console.log(mary.getBalance7() ); 
 console.log('------------------' );

 mary.withdraw7(200);
 mary.randValue = mary.balance7*17;
 console.log(mary.getBalance7() );
 
 console.log('------------------' );
 mary.deposit7(600);
 mary.randValue = mary.balance7*17;
 console.log(mary.getBalance7() );