# Inheritance

User
  -properties
    -name
    -score
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1

PaidUser
  -properties
    -name
    -score
    -balance
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1
    -increaseBalance: returna balance decreased by 1

Using Inheritance convert the above into following patterns.

1. Prototypal Pattern
2. Pseudoclassical Pattern
3. Classes

class User {
    constructor(name,score){
        this.name = name;
        this.score = score;
    }
    increaseScroe (){
        return this.score = this.score+1;
    }
    decreaseScore (){
        return this.score = this.score-1;
    }
}

class PaidUser extends User {
  constructor(name, score, balance){
    super(name,score);
    this.balance = balance;
  }
  increaseBalance(){
    return this.balance = this.balance + 1;
  }
  decreaseBalance(){
    return this.balance = this.balance - 1;
  }
}

var user1 = new User("abc",10);
console.log(user1.increaseScroe());
console.log(user1.decreaseScore());
console.log(user1.name);
console.log(user1.score);

var PaidUser1 = new PaidUser("adf", 15, 100);
console.log(PaidUser1.increaseBalance());
console.log(PaidUser1.decreaseBalance());
console.log(PaidUser1.name);
console.log(PaidUser1.score);

// --------- prototypal

function user(name,score) {
    var obj = Object.create(method);
    obj.name = name;
    obj.score = score;
    return obj;
}
function paidUser(name,score,balance) {
    var obj = user(name,score);
    Object.setPrototypeOf(obj, method2);
    Object.setPrototypeOf(method2,method);
    obj.balance = balance;
    return obj;
}

var method = {
    increaseScroe : function() {
        return this.score = this.score+1;
    },
    decreaseScore : function () {
        return this.score = this.score-1;
    }
}
var method2 = {
    increaseBalance : function(){
      return this.decreaseBalance = this.decreaseBalance-1;
    }
}

var check = user("ank",10);
console.log(check.increaseScroe());