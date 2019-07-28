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
