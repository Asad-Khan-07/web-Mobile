 
// Callback

function delayedgreeting(nam,callback){
    setTimeout(() => {
        callback()
    }, 2000);
    console.log(`Hello ${nam}`);
}

function callback() {
    console.log("Greeting finished");    
}
delayedgreeting("Asad",callback)


// Nested Callback

function sequentialdelays(nest) {
    setTimeout(() => {
        nest(nest1)
    }, 1000);
}
sequentialdelays(nest)

function nest(nest1) {
    console.log("Hello Developer1");
    setTimeout(() => {
        nest1(nest2)
    }, 2000);
}

function nest1(nest2) {
    console.log("Hello Developer2");    
    setTimeout(() => {
        nest2()
    }, 3000);
}
function nest2() {
    console.log("Hello Developer3");   
}

// Simple Calculator with Callback

function cal(operation) {
    operation(2,3)
}

function operation(x,y) {
    console.log(x+y,"Addition");
    console.log(x-y,"Subtraction");
    console.log(x*y,"Multiplication");
    
}
cal(operation)


