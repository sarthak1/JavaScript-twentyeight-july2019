let sum =function(){
    console.log(arguments);
};
sum(2,3,4,5);

let sum1 =function(){
    return Array.prototype.reduce.call(arguments,(prev,curr)=>{
        return prev+curr;
    });
};
console.log(sum1(2,3,4,5));

let sum2 =function(...args){
    console.log(args);
};
sum2(2,3,4,5);

let sum3 =function(...args){
    return args.reduce((prev,curr)=>prev+curr);
};
console.log(sum3(2,3,4,5));

let multiply = (mul,...numbers)=>{
    console.log(mul,numbers);
}
multiply(2,7,4,5);

let multiply1 = (mul,...numbers)=>{
    return numbers.map(n=>mul*n);
}
let result=multiply1(2,7,4,5);

console.log(result);


let max=Math.max(3,4,5,8);

console.log(max);

let numbers =[3,4,5,8];

let max1=Math.max.apply(null,numbers);

console.log(max1);
let max2=Math.max(...numbers);

console.log(max2);

let numbers1=[4,6,3,8];
let newNumber=[3,4,6,7,2];

let concatArray = newNumber.concat(numbers1);
console.log(concatArray);

let newNumber1=[3,4,6,7,2,...numbers1];
console.log(newNumber1);


let newNumber2=[3,4,...numbers1,6,7,2];
console.log(newNumber2);










































