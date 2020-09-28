// Object Create

const Client7 = {
    getBalance7 : function() {
     return `Hello ${this.name}, your balance is ${this.balance}`;
},

withdraw7 : function(amount7) {
    return this.balance -= amount7;
},

deposit7 : function(amount7) {
    return this.balance += amount7;
}

}