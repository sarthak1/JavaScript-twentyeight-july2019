var objProto ={
    greet:function(){
        console.log(this.greeting+" World!");
    }
};
var Greeting = function(term){
    this.greeting=term;
};
Greeting.prototype=objProto;
var obj1=new Greeting("Howdy");
