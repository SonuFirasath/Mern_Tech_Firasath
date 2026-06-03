let sum = 45; // global scope

function calSum(a, b) {
  let sum = a + b; // functional scope

  console.log(sum);
}

calSum(3, 4);

console.log(sum);

{
  let a = 2;
  const b = 6;
  var c = a + b;
}

console.log(c); // block doesn't work on var keyword ....

try {
  console.log(a, b); // error
} catch (err) {
  console.log(err);
}

function outerFunc() {
  function innerFunc() {
    console.log(x); // can use variable before it's declaration bcz of the concept called hoisting
  }

  let x = 5;
}

const student = {
  name: "Firasath",
  age: 22,
  eng: 98,
  math: 97,
  phy: 98,

  getAvg() {
    // let avg = (eng + math + phy)/3;
    let avg = (this.eng, this.math, this.phy) / 3;
    console.log(`${this.name} got avg marks = ${avg}`);
  },
};

student.getAvg();

let str = "chimera";

let str2 = ""

for(let i = str.length-1;i>=0;i--){
    str2+= str[i];
}

console.log(str2);

const empInfo = {
    name : "Sonu",
    marks: 99,
    prop : this, // global scope
    getName: function (){
        console.log(this); 
        return this.name
    },
    getMarks : ()=>{
        console.log(this); // parent's scope
        return this.name;
    }
}

console.log(`The value of empInfo prop is ${empInfo.prop}`);
console.log(`The getName of empInfo is ${empInfo.getName()} `);
console.log(`The getMarks of empInfo is ${empInfo.getMarks()}`);

let arr = [1,2,3,4,5,6,7,8,9,10];

// forEach() method ...

arr.forEach((ele)=>{
    console.log(ele);
})

// map method ...

let sqr = arr.map((el)=>{
    return el * el;
})

console.log(sqr);

// filter method ...

let even = arr.filter((el)=>{
    return el % 2 == 0;
})

console.log(even);


let sum = function (a , b = 4){
  console.log(a+b);
}

sum(2); // -> 6