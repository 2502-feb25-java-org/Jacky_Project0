//comments
/*dataTypes:
number, string, boolean, object, undefined, NaN, Symbol
*/
//Variables
/*function func1(){
  alert("x"+x);
}
var y=func1();
alert("y "+y);*/
//
//alert(typeof(x));
//x='$'; //global variables
/*y=5.00;
z="Hello World!!"*/
// alert(x+y+z);
// alert(z+(x+y));
//alert(typeof(λ));//Infinity/0))//x));//10/'abc');
//truthy and falsy
//falsy= false,0, undefined, NaN, null, ""
//alert(0 =="");

// Scope- Global, Local

//test(10);// Hoisting - function call is made even before declaration
 
/*var funcResult=function test(a){
   console.log(a);
}// function expressions
funcResult=funcResult(funcResult(10));
*/

//console.log(typeof(function ts(){}));
/*(function test(a){
    console.log(a);
 })(10);// IIFE
*/
 // Call back function
/*function Agreement(policyAcceptance, yes, no){
    debugger;
     if(confirm(policyAcceptance)){
         yes();
     }
     else
        no();
 }

 function ShowOk()
 {
     alert('Policy is accepted');
 }
 function ShowCancel()
 {
     alert('Policy is denied');
 }
 Agreement("Do you agree to our policy",ShowOk,ShowCancel);*/

 //default param
/* var resultfunc=function add(a,b,c=10)
 {
     return a+b+c;
 }
 console.log(resultfunc(10,3));*/
/*
 function Outer() {
     var outerData="outerData";
     function inner() {
         alert(outerData);
     }
   // inner();
   return inner;
 }
// alert(outerData); //not accessible because of scope
var funcCall=Outer();
*/
/*
var add=function(){
    debugger;
    var counter=0;
    return function(){
        counter+=1;
        return counter;
    }
})
console.log(add());
console.log(add());*/

/*()=>alert('hi');
var resultExp=(a,b)=>(a*b);
console.log(resultExp(2,3));
console.log(((a,b)=>a*b)(5,3)); // arrow functions
*/

/*function returnValue(){
    return 'Hello Worlkd';
}
var functionItself=returnValue//();
alert(functionItself);*/
//var i='hello';

/*let i=10; // not allowed as it already
(function varvslet(){
    //var function scoped
    //let block scope
    //console.log('before declaration '+i);
    for (var i = 0; i < 5; i++) {
        console.log('after initialization '+ i);
    }
    console.log('outside for loop within a function '+i);//var would allow access but let will not
})();
console.log('outside function '+i)*/

//-------------Arrays
/*'use strict'
let x=[];//empty array
x=[1,2,3,4,'Pushpinder',null, false]*/
/*for (let i = 0; i < x.length; i++) {
    console.log(x[i]);    
}*/

/*x.forEach(function(e){
    console.log(e);
})*/

//Type Coersion/Conversion
/*var i=10,j='Hello' 
j=Boolean(j);
console.log(j)*/

//-------OBJECTS
/*
var obj={}//empty object
obj={
    name:'Pushpinder Kaur',
    Profession:'Full Stack Consultant',
    sayDetails:function(){
       return obj.name+' - '+obj.Profession;
    }
}
obj.height='177'
obj.color='Brown'
obj['Company']='Revature'
//console.log(obj.sayDetails() +' '+obj['height']+' '+obj['Company'])

var obj2={
    course:'Java',
    duration:'10 weeks',
    sayDetails2 : obj.sayDetails
}
console.log(obj2.sayDetails2());
*/
// constructors in ES5
/*function Person(name, city){
    this.name=name;
    //this.profession=profession;
    this.city=city;
    this.sayDetails=function(){
        console.log(name+ '-' +city)
    }
}

let objPushpinder=new Person('Pushpinder','New York');
objPushpinder.sayDetails();

function Student(name, age, city, school){
    this.school=school;
    this.age=age;
    this.__proto__=new Person(name,city);
}
let objStudent=new Student('Brandon',45,'whatever','CUNY');
objStudent.sayDetails();
*/

/*class PersonClass{
    constructor(name,age,city){
        this.name=name;
        this.age=age;
        this.city=city;
    }
    sayDetails(){
        console.log(this.name+'-'+this.city)
    }
}

class StudentClass extends PersonClass{
    constructor(name,age,city,fingers){
        super(name,age,city);

        this.fingers=fingers;
    }
}
let student=new StudentClass('Stephen',89,'Bazinga',12);
student.sayDetails();*/

