/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
	var newPerson = {};
  newPerson.name = name;
  newPerson.age = age;
  return newPerson;
}

var vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
	// add code here
  greet : function(){
    console.log("hello")
  }
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  // add code here
  var obj = Object.create(personStore);
  obj.name = name;
  obj.age = age;
  return obj;
}
var personStore = {
  greet : function(){
    console.log("hello")
  },
  introduce : function(){
    console.log("Hi, my name is "+this.name)
  }
}

var sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/

// add code here

function personFromPersonStore(name, age) {
  // add code here
  var obj = Object.create(personStore);
  obj.name = name;
  obj.age = age;
  return obj;
}
var personStore = {
  greet : function(){
    console.log("hello")
  },
  introduce : function(){
    console.log("Hi, my name is "+this.name)
  }
}

var sandra = personFromPersonStore('Sandra', 26);

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
	// add code here
  

}
PersonConstructor.prototype = {
  greet : function(){
    console.log("hello");
  }
}


// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
	// add code here
  this.name = name;
  this.age = age;
}
personFromConstructor.prototype = {
  greet : function(){
    console.log("hello")
  },
  
}

var mike =new personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
// add code here
function personFromConstructor(name, age) {
	// add code here
  this.name = name;
  this.age = age;
}
personFromConstructor.prototype = {
  greet : function(){
    console.log("hello")
  },
  introduce : function(){
    console.log("Hi, my name is "+this.name)
  }
}

// mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
	constructor(name) {
    // add code here
    this.name = name;
	}
  greet = function() {
    console.log("hello");
  }
}
// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
// george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/
class DeveloperClass extends PersonClass{
  constructor(name){
   super(name);
  }
  introduce(){
    console.log("Hello World, my name is "+this.name);
  }
}


// /********* Uncomment these lines to test your work! *********/
// var thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore = {};
Object.setPrototypeOf(adminFunctionStore, userFunctionStore);

function adminFactory(name, score) {
  // Put code here
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
