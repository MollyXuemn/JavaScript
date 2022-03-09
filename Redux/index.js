function sayHello(){
    return function(){
        return "Hello";
    };
}

let fn = sayHello();
let message = fn();

//High-order func
let numbers = [1, 2, 3];
numbers.map(number => number * 2)

//
setTimeout(() => console.log("Hello"), 1000);

//functional Composition
let input = " Java Script ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str =>  `<div>${str}</div>`;//"<div>" + str +  "</div>"; 
const wrapInSpan = str => (type,str) => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const res = wrapInDiv(toLowerCase(trim(input))); 
//trim
//wrapInDiv

//Composing and Piping
//use Lodash

//currying
const wrapInSpan = type => str => `<${type}>${str}</${type}>`;
transform = pipe(trim, toLowerCase, wrap("span"));
console.log(transform(input));

function myFunction(number) {
    return number * Math.random();
}

/* immutability: 
pros:predictable, faster change detection, concurrency;
cons: performance, memory overhead,
*/

//change properties
//method1:
const person = {name: "John"};
const updated = Object.assign({}, person,{name:"Bob", age: 30});
//change properties
//method2:
const person = {name: "John"};
const updated = {...person,name:"Bob", age: 30};
console.log(updated);

//deep copy to change element in the dictionary
const person = {name: "John",
                address: {
                    country: "USA",
                    city: "San Francisco"
                }};
const updated = {
    ...person,
    address: {
        ...person.address,
        city:"NY"
    },
    name: "bob"
};
console.log(person);

// Update Arrays 
