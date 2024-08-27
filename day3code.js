//function
function  display(text){
    console.log("there is no" + text + "today")
}
display(" class ");

//Anonymous  Function
const multiplay = function(a, b) {
    return a * b;
  };
  
console.log(multiplay(15, 7));

//Arrow Function (ES6)
const multiply = (a, b) => a * b;

console.log(multiply(45, 13));

//Immediately Invoked Function Expression (IIFE)
let day="today is monday";
(function(){
    let day="today is monday"
    console.log(day);    
})();

//Higher-Order Function
function display(day) {
    return function(msg) {
      console.log(msg + " is " + day);
    };
  }
  
  const retFun= display("sunday");
retFun("holiday");  

//Callback Function
function processUserInput(callback) {
    const lunch = "biriyani";
    callback(lunch);
  }
  
  processUserInput(function(lunch) {
    console.log("Today lunch is " + lunch);
});

//Returning Values from Functions
function square(num) {
    return num * num;
  }
  
console.log(square(49));
  
//if-else statement

let user = "joy" ;

if(user ==="amy"){
    console.log("loginsucessful");
}
else {
    console.log("invalid");
}

//If-Else Ladder
let score = 89;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

//Ternary Operator
let h=52;
let cani = (h >= 60) ? "reached" : "unreached";

console.log("reteierment age is  " + cani);

//while loop
let k=0;

while(k < 15){
  result += "the current count is" + k;
  console.log(result);
  k++;
}
