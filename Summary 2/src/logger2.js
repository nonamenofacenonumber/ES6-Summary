
class Logger2{
    static success(message) {
        console.log(`%c ${message}` , 'color : green');
    }
    static error(message) {
        console.log(`%c ${message}` , 'color : red');
    }
}

function logger2Func1(){
    console.log('This is a logger2.js function 1');
}
function logger2Func2(){
    console.log('This is a logger2.js function 2');
}


export default Logger2;

export {
    logger2Func1,
    logger2Func2
}












