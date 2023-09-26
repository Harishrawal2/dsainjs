// Call(), Apply(), Bind()

// Call: The call() method invokes a function with a given this value and arguments provided one by one

const emp1 = { firstName: "Harish", lastName: "Rawal" };
const emp2 = { firstName: "Raj", lastName: "Anil" };

function invite(geet1, greet2) {
  console.log(
    geet1 + " " + this.firstName + " " + this.lastName + "," + greet2
  );
}

invite.call(emp1, "Hello", "How are you");
invite.call(emp2, "Hello", "How are you");

// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

const emp3 = { firstName: "Vimlesh", lastName: "Kumar" };
const emp4 = { firstName: "Vipin", lastName: "Kumar" };

function invite(geet1, greet2) {
  console.log(
    geet1 + " " + this.firstName + " " + this.lastName + "," + greet2
  );
}

invite.apply(emp3, ["Hello", "How are you"]);
invite.apply(emp4, ["Hello", "How are you"]);

// bind: returns a new function, allowing you to pass any number of arguments

var emp5 = { firstName: "Shobhit", lastName: "Gupta" };
var emp6 = { firstName: "Nikesh", lastName: "Pal" };

function invite(geet5, greet6) {
  console.log(
    geet5 + " " + this.firstName + " " + this.lastName + "," + greet6
  );
}

var inviteEmp5 = invite.bind(emp5);
var inviteEmp6 = invite.bind(emp6);

inviteEmp5("Hello", "How are you");
inviteEmp6("Hello", "How are you");
