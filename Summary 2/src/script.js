import {logger1Func , name, packFunc_in_logger1} from "./logger1";
import importLogger2 , {logger2Func1, logger2Func2 as logger2Func2newName} from "./logger2";
    // notice:  importLogger2 is not in {} because it is default export
    // notice:  for default export we can use any name 
    // notice:  but for destructuring we have to use only that name eventhough use 'as'
import importLogger3 from "./logger3";
import * as Logger4Star from "./logger4";   //  * to import all fuctions and parameters in export


logger1Func();
packFunc_in_logger1();

importLogger2.error('This is a logger2.js static function in class');
logger2Func1();
logger2Func2newName();

importLogger3.error('This is a logger3.js function in class');



Logger4Star.logger4Func1();
Logger4Star.logger4Func2();


 