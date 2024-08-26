//Arrays

let home=["tv","hometheater","bike","cot","sofa","fan"];

console.log(home);
console.log(home[5]);
console.log(home.length);

//push & pop
home.pop();
console.log(home);

home.push("table fan");
console.log(home);

//shift &unshift
home.shift();
console.log(home);

home.unshift("miror");
console.log(home);


//slice & splice
let slicedHome = home.slice(1, 4);
console.log(slicedHome);

home.splice(1, 1, "clock");
console.log(home)

//map
let upperCaseHome = home.map(home => home.toUpperCase());
console.log(upperCaseHome);

//filter
let filteredHome = home.filter(home => home.length > 6);
console.log(filteredHome);

//foreach()
home.forEach(home => console.log(home));

//Iterating Over Objects

let school= {
    boys : 350,
    girls : 290,
    teachers : 45
};
for (let key in school){
    console.log(key + ' strength is ' + school[key]);    //using for-in Loop
}

let keys = Object.keys(school);
let values = Object.values(school);

console.log(keys);
console.log(values);
