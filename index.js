let otherProto = function(){
    this.prop1=456;
    this.inner=function(){
        console.log("inner method on instance");    
    };
};
otherProto.prototype.someMethod=function(){
    console.log("this is otherProto");
}
let obj = new Object();
console.log(obj.prop1);
obj.inner();
obj.someMethod();
obj.toString();
obj._proto_.inner();