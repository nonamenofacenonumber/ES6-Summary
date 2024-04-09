import {packFunc} from "./lib/pack";    //  means "./lib/pack.js"


let name = 'Saeed';

function logger1Func(){
    console.log('This is a logger1.js function');
}

function packFunc_in_logger1(){
    packFunc();
}



export {
    logger1Func,
    name,
    packFunc_in_logger1
}
