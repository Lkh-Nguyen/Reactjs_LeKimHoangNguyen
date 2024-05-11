import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';


//question 1:
console.log('Bài 1:');
var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]
//Find the first person off the people array is teenager (age >=10 and age <=20)
function firstPersonOff(){
  let count = 0;
  people.forEach((e) => {
    if(count == 0){
      if(e.age >=10 && e.age <= 20){
        ++count;
        console.log(e);
      }
    }
  })
}
//Find the all person of the people array is teenager (age >=10 and age <=20)
function allPerson(){
  people.forEach((e) => {
    if(e.age >=10 && e.age <= 20){
      console.log(e);
    }
  })
}
//Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false
function everyPerson(){
  let check = people.every((e) =>{
    if(e.age >=10 && e.age <= 20){
      return true;
    }else{
      return false;
    }
  });
  console.log(check);
}
//Checks if any person of the people array is teenager (age >=10 and age <=20), which should return true or false.
function somePerson(){
  let check = people.some((e) =>{
    if(e.age >=10 && e.age <= 20){
      return true;
    }else{
      return false;
    }
  });
  console.log(check);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('Bài 2:');
var array = [1, 2, 3, 4]
//Applies a function passed as the first parameter against an accumulator and each element in the array (from left to right),
//thus reducing it to a single value. The initial value of the accumulator should be provided as the second parameter of the reduce function.
//Implementation of very simple functions (like the aforementioned sum or product) requires writing a lot of boilerplate. Is there any remedy for that? just try arrow functions!
function sumArray(){
  let sum = array.reduce((a,b) => a + b,0);
  console.log(`Sum : ${sum}`);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
//question 3
console.log('Bài 3:');
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//Make a new object that has the properties of name and category same as the companies [0] and a method print that prints out the name, use object restructuring and ES6 JS
function getNameAndCategory(){
  let {name,category,...startAndDate} = companies[0];
console.log(`Name: ${name} and Category: ${category}`);
}

//Print the name of each company using forEach
function nameCompany(){
  companies.forEach((c) => {
    console.log(c.name);
  })
}
//Print the name of each company that started after 1987
function startDate(){
  companies.forEach((c) => {
    if(c.start >= 1987){
      console.log(c.name);
    }
  })
}
//Get only the companies that have category Retail, increment their start by 1 and append in the DOM a div that has the name, the category, 
//the start and the end in paragraphs elements
let newC = companies.filter((c)=>{
  if(c.category === 'Retail'){
    return c;    
  }
});
newC.forEach((c) =>{
  ++c.start;
})
//Sort the companies based on their end date in ascending order
function sortEnd(){
  companies.sort((a,b) => a.end - b.end);
  console.log(companies);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//Sort the ages array in descending order
function sortAge(){
  ages.sort((a,b) => b-a);
  console.log(ages);
}
//print the sum if you add all the ages using reduce
function sumReduce(){
  let  sum = ages.reduce((a,b) => (a+b));
  console.log(`Sum : ${sum}`);
}
//Create a function that takes an unknown number of arguments that are numbers and return their sum;
function calSum(...numbers){
  let sum = numbers.reduce((a,b)=>a+b);
  console.log(`Sum = ${sum}`);
}
calSum(...ages);

////////////////////////////////////////////////////////////////////////////////////////////////////////
const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};
//Destructuring the property street in a variable named street from the object person
function propertyStree(){
  let {address: {street}} = person;
  console.log(`Street: ${street}`);
}

//•	Make a function that takes an unknown number of arguments of any type and adds them in an array and returns the array,
// if the argument is an array, it should add its values to the array that will be returned by the function
const addArray = (...rest) =>{
  let rs = [];
  rest.forEach((e) =>{
    if(Array.isArray(e)){
      rs = [...rs,...e];
    }else{
      rs.push(e);
    }
  });
  return rs;
}
console.log(addArray('a',['b','c','d'],1,{name:'Nguyen'}));

//Write a function that every time you call it, it returns a number that increments starting from 0
const incrementFunc = () =>{
  let count = 0;
  return function(){
    return ++count;
  }
};
let increment = incrementFunc();
console.log(increment());
console.log(increment());
console.log(increment());

//Create a function that destructors the query parameters of a URL and adds them in an object as key value pairs and then returns the object
const getQueryParams = (url) =>{
  const params = url.split('?')[1].split('&');
  const obj = {};
  params.forEach((p) =>{
    const [key,value] = p.split('=');
    obj[key] = value;
  })
  return obj;
}
console.log(getQueryParams('https://example.com/page?name=John&age=30&city=New+York'));
////////////////////////////////////////////////////////////////////////////////////////////////////////
//Question 4

class Shape{
  constructor(color){
    this.color = color;
  }
  getArea(){
    return 0;
  }
  toString(){
    return `Color = ${this.color}`;
  }
}
let shape1 = new Shape('red');
console.log(shape1.toString());

class Rectangle extends Shape{
  constructor(color,length,width){
    super(color);
    this.length = length;
    this.width = width;
  }
  getArea(){
    return this.length * this.width;
  }
  toString(){
    return `${super.toString()} ,length = ${this.length}, width = ${this.width}`;
  }
}

let r1 = new Rectangle('yellow',12,3);
console.log(r1.getArea());
console.log(r1.toString());

class Triangle extends Shape{
  constructor(color,base,height){
    super(color);
    this.base = base;
    this.height = height;
  }
  getArea(){
    return (this.base * this.height)/2;
  }
  toString(){
    return `${super.toString()} ,base = ${this.base}, height = ${this.height}`;
  }
}

let t1 = new Triangle('yellow',12,3);
console.log(t1.getArea());
console.log(t1.toString());

////////////////////////////////////////////////////////////////////////////////////////////////////////
//Question 5
let myPromise1 = function(){
  
  return new Promise((resolve,reject) => {
  setTimeout(()=>{
    let number = 4
    if(number >= 5){
      resolve(`${number} >= 5`);
    }else{
      reject(`${number} < 5`);
    }
  },3000)
})
}

let myPromise2 = function(){
  return new Promise((resolve,reject) => {
  setTimeout(()=>{
    let number = 4
    if(number >= 5){
      resolve(`${number} >= 5`);
    }else{
      reject(`${number} < 5`);
    }
  },1000)
})
}

async function doHome(){
  try{
    const mP1 = await myPromise1();
    console.log(mP1);
    const mP2 = await myPromise2();
    console.log(mP2);
  }catch(error){
    console.error(error);
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>FullName: Lê Kim Hoàng Nguyên</p>
        <p>Class: SE17D08</p>
        <p>School: FPT UNIVERSITY</p>
        <p>Description: I am 20 years old. My major is SE. I live in Da Nang city.</p>
      </header>
    </div>
  );
}
export default App;