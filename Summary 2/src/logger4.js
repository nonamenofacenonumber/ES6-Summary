
class Logger4{
    static success(message) {
        console.log(`%c ${message}` , 'color : green');
    }
    static error(message) {
        console.log(`%c ${message}` , 'color : red');
    }
}

function logger4Func1(){
    console.log('This is a logger4.js function 1');
}




export default Logger4;

export {
    logger4Func1
}

export function logger4Func2(){
    console.log('This is a logger4.js function 2');
}