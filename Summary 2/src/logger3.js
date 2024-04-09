
class Logger3{
    success(message) {
        console.log(`%c ${message}` , 'color : green');
    }
    error(message) {
        console.log(`%c ${message}` , 'color : red');
    }
}



export default new Logger3();














