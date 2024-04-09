// --------------------------------------------------
console.log('---------------------   1    ---------------------');
// --------------------------------------------------
// let & const
console.log('\t #let & const');

function funcvar() {
    var a = 1;
    if (true) {
        var a = 2;
    }
    console.log('var a =>   ' + a);
}

function funclet() {
    let b = 1;
    if (true) {
        let b = 2;
    }
    console.log('let b =>   ' + b);
}
funcvar();
funclet();
const c = [1, 2, 3];
// c = [4, 5, 6];       ->  incorrect
c.push(4);
console.log('const c =>   ' + c);
const d = { age: 25 };
// d = { age: 26 };     ->  incorrect
d.age = 27;
console.log('const d =>   ', d);
// --------------------------------------------------
console.log('---------------------   2    ---------------------');
// --------------------------------------------------
// arrow functions
console.log('\t #arrow functions');

let func1 = function(a, b) {
    return a + b;
}
console.log('func1(1, 2) =>   ', func1(1, 2));

let func2 = (a, b) => {
    return a + b;
}
console.log('func2(1, 2) =>   ', func2(1, 2));

let func3 = (a, b) => a + b;
console.log('func3(1, 2) =>   ', func3(1, 2));

let func4 = (a, b) => {
    return { x: a, y: b };  //return array
}
console.log('func4(1, 2) =>   ', func4(1, 2));

let func5 = (a, b) => ({ x: a, y: b });  //return array
console.log('func5(1, 2) =>   ', func5(1, 2));

let func6 = (a, b) => ({ a, b });  //return array
console.log('func6(1, 2) =>   ', func6(1, 2));

let arr = [1, 2, 3, 4, 5];
console.log('arr =>   ', arr);
console.log('arr.map(item => item * 2) =>   ', arr.map(item => item * 2));

console.log('\"function inside function should be arrow functions\"');

//  it's better to use class instead of constructor function
function Person1() {
    this.age = 0;
    setInterval(function() {
        console.log(this.age);      // undefined
        this.age++;
    }, 1000);
}
// let person1 = new Person1();

function Person2() {
    this.age = 0;
    let that = this;
    setInterval(function() {
        console.log(that.age);      // age = 0, 1, 2, ..
        that.age++;
    }, 1000);
}
// let person2 = new Person2();

function Person3() {
    this.age = 0;
    setInterval(() => {
        console.log(this.age);      // age = 0, 1, 2, ..
        this.age++;
    }, 1000);
}
// let person3 = new Person3();

// --------------------------------------------------
console.log('---------------------   3    ---------------------');
// --------------------------------------------------
// arrow functions
console.log('\t #arrow functions');
let arguments = [1, 4, 8, 12];

//  arguments is defined in functions which is declared with function keyword
function func7(a, b) {
    return (arguments);
}
let func8 = (a, b) => arguments
console.log('func7(1, 2) =>   ', func7(1, 2));
console.log('func8(1, 2) =>   ', func8(1, 2));

// arrow functions can't be use to introduce constructor functions
function func9() {}
console.log('func9.prototype =>   ' + func9.prototype);
console.log('new func9() =>   ' + new func9());

let func10 = () => {}
console.log('func10.prototype =>   ' + func10.prototype);
// console.log('new func10() =>   ' + new func10());

// to use This  in function we use arrow function in a function 
//              but we use function in object, not arrow function
let obj1 = {
    a: 10,
    b: function() {
        return this.a;
    },
    c: () => {
        return this.a;
    }
}
console.log('\"function inside object should not be arrow functions\"');
console.log('obj1.b() ->    ', obj1.b());
console.log('obj1.c() ->    ', obj1.c());

// --------------------------------------------------
console.log('---------------------   4    ---------------------');
// --------------------------------------------------
//default parameter
console.log('\t #Default Parameter');

//ES5
function func11(x, y) {
    let a = typeof x == 'undefined' ? 1 : x;
    let b = y || 1; //  if y exists use y otherwise  use 1
    return (`func11(x, y) = ${a} ${b}`);
}
console.log('func11(null, 2) =>   ' + func11(undefined, null));

//ES6
function func12(x = 1, y = 1) {
    return (`func12(x = 1, y = 1) = ${x} ${y}`);
}
console.log('func12() =>   ' + func12(null, ));

// rest operator (we use rest operator in arrow function because it doesn't have arguement)
console.log('\t #rest operator');
//  rest operator to compress parameters

function func13(a, b, ...c) {
    console.log('func13(a, b, ...c) =>   a= ' + a + '\tb= ' + b + '\tc= ' + c );
    console.log('func13(a, b, ...c) =>   c[0] = ' + c[0]);
    console.log('func13(a, b, ...c) =>   ' + (a + b + c.reduce((pre, current) => pre + current)));
}
console.log('func13(1, 2, 3, 4, 5, 6, 7, 8);');
func13(1, 2, 3, 4, 5, 6, 7, 8);

let func13_2 = (a, b, ...c) => {
    console.log('func13_2(a, b, ...c) =>   ' + (a + b + c.reduce((pre, current) => pre + current)));
}
console.log('func13_2(1, 2, 3, 4, 5, 6, 7, 8);');
func13_2(1, 2, 3, 4, 5, 6, 7, 8);
// --------------------------------------------------
console.log('---------------------   5    ---------------------');
// --------------------------------------------------
//spread syntax
console.log('\t #spread syntax');
//  spread syntax to decompress

let list1 = [1, 1, 1];
let list2 = [2, 2, 2];
console.log('list1 =>   ' + list1);
console.log('list2 =>   ' + list2);
console.log('...list1, 0, ...list2 =>   ', ...list1, 0, ...list2);
console.log('func13(...list1, 100, ...list2);');
func13(...list1, 100, ...list2);
// --------------------------------------------------
console.log('---------------------   6    ---------------------');
// --------------------------------------------------
//for of
console.log('\t #for of');

let list3 = [1, 2, 3, 4, 5];
console.log('list3 =>   ' + list3);
console.log('list3.forEach(item => console.log(item)) =>   ');
list3.forEach(item => console.log(item));

let list4 = 'Saeed';
console.log('list4 =>   ' + list4);
console.log('for (let i of list4) {console.log(i);} =>   ');
for (let i of list4) {
    console.log(i);
}
// --------------------------------------------------
console.log('---------------------   7    ---------------------');
// --------------------------------------------------
// array and object destructuring
console.log('\t #array and object destructuring');

let list5 = [1, true, 'World', 4.5, 'Hello'];
console.log('list5 =>   ' + list5);

let [, , item1 = -1, , item2, item3 = -1/*default parameter*/] = list5;
console.log('let [, , item1 = -1, , item2, item3 = -1] = list5 =>\n\titem1 = ' + item1 + '\n\titem2 = ' + item2 + '\n\titem3 = ' + item3);

let [, item4 = -1, ...item5/*rest operator*/] = ['Saeed', 'Saeed', 'Saeed', list5];
console.log('let [, item4 = -1, ...item5] = [\'Saeed\', \'Saeed\', \'Saeed\', list5] =>\n\titem4 = ' + item4 + '\n\titem5 = ' + item5);


let [, item6 = -1, ...item7] = list5;
console.log('let [, item6 = -1, ...item7] = list5 =>\n\titem6 = ' + item6 + '\n\titem7 = ' + item7);

let obj2 = {
    name1: 'Saeed',
    age: 30,
    say: () => {return '++Hi guys++'}
}
console.log('obj2 =>   ', obj2);

let { name1/*name of parameter in object*/, age, gender, say = () => { return 'ahmad' }/*default parameter*/ } = obj2;
console.log('let { name1, age, gender, say = () => { return \'ahmad\' } } = obj2 =>\n\tname1= ' + name1 + '\n\tage= '+ age + '\n\tgender= ' + gender + '\n\tsay= ' + say());

let { name1/*name of parameter in object*/: firstname/*favorite name*/, say: sayme = () => { return 'ahmad' } } = obj2;
console.log('let { name1: firstname, age, say: sayme = () => { return \'ahmad\' } } = obj2 =>\n\tfirstname= ' + firstname + '\n\tsayme= ' + sayme());
// --------------------------------------------------
console.log('---------------------   8    ---------------------');
// --------------------------------------------------
console.log('\t #template string');

// error
// let myname="saeed
// cr";

// template string

let myname = `Saeed ${-7*5} \${-7*5}



CR`;
console.log('myname =>\n' + myname);
// --------------------------------------------------
console.log('---------------------   9    ---------------------');
// --------------------------------------------------
console.log('\t #class');

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.run = function() {
//         return 'speed up to 200'
//     }
// }
// class

class Car {
    constructor(make, model, year ,maxspeed) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.maxspeed = maxspeed;
    }
    run() {
        return 'speed up to ' + this.maxspeed;
    }
    brake(){
        return 'Excellent';
    }
}
let car1 = new Car('Ford', 'Mustang', 2000, 320);
console.log('let car1 = new Car(\'Ford\', \'Mustang\', 2000, 320)');
console.log('car1.run() =>   ' + car1.run());
console.log('Car.prototype ->\n');
console.log(Car.prototype);
console.log('car1.prototype ->\n');
console.log(car1.prototype);
console.log('car1.__proto__ ->\n');
console.log(car1.__proto__);
console.log('car1.__proto__ == Car.prototype  =>   ' + (car1.__proto__ == Car.prototype));
console.log('car1.__proto__ == Car.__proto__  =>   ' + (car1.__proto__ == Car.__proto__));
// --------------------------------------------------
console.log('---------------------   10   ---------------------');
// --------------------------------------------------

// inheritance
console.log('\t #inheritance');

class IranCar extends Car {
    constructor(make, model, year, maxspeed, color) {
        super(make, model, year, maxspeed);
        this.color = color;
    }
    // Override brake methode
    brake() {
        return 'Good or maybe ' + super.brake();
    }
    fly() {
        return 'car is flying';
    }
}

let car2 = new IranCar('Saipa', 'Shahin', 2021, 220, 'white');
console.log('let car2 = new IranCar(\'Saipa\', \'Shahin\', 2021, 220, \'white\')');
console.log('car2 =>   ', car2);
console.log('car2.brake() =>   ', car2.brake());
console.log('car2.run() =>   ', car2.run());
console.log('car2.fly() =>   ', car2.fly());

// --------------------------------------------------
console.log('---------------------   11   ---------------------');
// --------------------------------------------------
// static method
console.log('\t #static method');

class GermanCar extends Car {
    constructor(make, model, year, color) {
        super(make, model, year);
        this.color = color;
    }
    fly() {
        return 'car is flying';
    }
    static fly_static() {
        return 'static car is flying';
    }
    fly2() {
        return this.fly();
    }
    static fly2_static() {
        return this.fly_static();
    }
    // fly3 can't use static methode in it
    fly3() {
        return this.fly_static();
    }
    // fly3_static should use static methode in it
    static fly3_static() {
        return this.fly();
    }
}
let car3 = new GermanCar('BMW', 'M3', 2016, 'black');
console.log('car3.fly() =>   \t\t\t' + car3.fly());
console.log('GermanCar.fly_static() =>   ' + GermanCar.fly_static());
console.log('car3.fly2() =>   \t\t\t' + car3.fly2());
console.log('GermanCar.fly2_static() =>  ' + GermanCar.fly2_static());
// console.log('car3.fly3() =>   \t\t\t' + car3.fly3());    // incorrect
// console.log('GermanCar.fly3_static() =>  ' + GermanCar.fly3_static());    // incorrect

// extends built in objects
console.log('\t #extends built in objects');

class AdvanceArray extends Array {
    find(value) {
        return (this.filter(item => item == value) == value);
    }
}
let list6 = new AdvanceArray('Saeed', 'Arian', 'CR');
console.log('list6 =>   ' + list6);
console.log('list6.find("Sae") =>   ' + list6.find("Sae"));
console.log('list6.find("Saeed") =>   ' + list6.find("Saeed"));
// --------------------------------------------------
console.log('---------------------   12   ---------------------');
// --------------------------------------------------
// getter & setter
console.log('\t #getter & setter');

class Foo {
    constructor() {
        this.ss = [];
    }
    set current(value) {
        this.ss.push(value);
    }
    get latest() {
        if (this.ss.length === 0) {
            return undefined
        }
        return this.ss[this.ss.length - 1]
    }

}
let foo = new Foo();
foo.current = 'A';  // not foo.current()
foo.current = 'B';
console.log('foo.latest =>   ' + foo.latest);   // not foo.latest()
// --------------------------------------------------
console.log('---------------------   13   ---------------------');
// --------------------------------------------------
// object changes
console.log('\t #object changes');

let name = 'hesam';
let degree = 'Msc';
let keyname = 'fullname';
let keyname2 = 'fullname';
let obj3 = {
    name,
    mydegree: degree,
    keyname: 'keyname',
    [keyname]: '[keyname]',
    sayHello () {
        return 'Hello hesam';
    },
    'say Salam' () {
        return 'Salam hesam';
    }
}
console.log('obj3 =>   ', obj3);
console.log('obj3.keyname =>   ' + obj3.keyname);
console.log('obj3[\'fullname\'] =>   ' + obj3['fullname']);// not obj3.['fullname']
console.log('obj3[keyname2] =>   ' + obj3[keyname2]);
console.log('obj3.sayHello =>   ' + obj3.sayHello());
console.log('obj3[\'say Salam\'] =>   ' + obj3['say Salam']());

// --------------------------------------------------
console.log('---------------------   14   ---------------------');
// --------------------------------------------------
// Symbols
console.log('\t #Symbols (variable type)');

let symbol1 = Symbol.for('fullname'); // Symbol.for -> Shared Symbols | fullname -> discription
let symbol2 = Symbol('fullname'); // fullname -> discription

console.log('Symbol.for(\'fullname\') == Symbol.for(\'fullname\') =>   ', Symbol.for('fullname') == Symbol.for('fullname'));
console.log('Symbol(\'fullname\') == Symbol(\'fullname\') =>   ', Symbol('fullname') == Symbol('fullname'));
console.log('Symbol.for(\'fullname\') == Symbol(\'fullname\') =>   ', Symbol.for('fullname') == Symbol('fullname'));

let obj4 = {
    name: 'SAEED',
    [symbol1]: 22,
    [symbol2]: 'aa'
}
console.log('obj4 =>   ', obj4);
console.log('obj4[symbol1] =>   ', obj4[symbol1]);
console.log('obj4[Symbol.for(\'fullname\')] =>   ', obj4[Symbol.for('fullname')]);
console.log('obj4[symbol2] =>   ', obj4[symbol2]);
console.log('obj4[Symbol(\'fullname\')] =>   ', obj4[Symbol('fullname')]);

class myReplaceX {
    constructor(myValue1) {
        this.myValue1 = myValue1;
    }
    [Symbol.replace](myString1) {
        return 'saeed';
        // return `/${myString1}/${this.myValue1}`;
    }
}
console.log('myString'.replace(new myReplaceX('myValue')));

// --------------------------------------------------
console.log('---------------------   15   ---------------------');
// --------------------------------------------------
// new array methods
console.log('\t #new array methods');

let list7 = [10, 11, 12, 13, 14, 15, 16, 17, 18];
console.log('list7 =>   ', list7);
let list8 = Array(2); 
//    problem of Array() in JS -> if we use just one number 
//  it creates array with undefined parameters 
//  instead of creating array with one parameter with that value
console.log('list8 =>   ', list8);
let list9 = Array.of(2); // to solve this problem we can use Array.of()
console.log('list9 =>   ', list9);
let list10 = Array.from(list7, item => item * 5);
console.log('list10 =>   ', list10);
console.log('list7.filter(item => item % 2 == 0) =>   ' + list7.filter(item => item % 2 == 0)); //find all items
console.log('list7.find(item => item % 2 == 0) =>   ' + list7.find(item => item % 2 == 0)); // find first item

let arr2 = list7.entries();
console.log('...arr2 =>   ', ...arr2);
console.log('arr2.next() =>   ', arr2.next());
console.log('arr2.next() =>   ', arr2.next());
console.log('list7.fill(-666, 3, 6) =>   ' + list7.fill(-666, 3, 6));
console.log('list7.copyWithin(2, 0, 5) =>   ' + list7.copyWithin(2, 0, 5)); //copyWithin(target, start, end)
// --------------------------------------------------
console.log('---------------------   16   ---------------------');
// --------------------------------------------------
// new number methods
console.log('\t #new number methods');

let num1 = -5.7;
let num2 = Infinity;
console.log('num1 =>   ' + num1);
console.log('num2 =>   ' + num2);
console.log('isNaN(num1) =>   ' + isNaN(num1));
console.log('Number.isFinite(num2) =>   ' + Number.isFinite(num2));
console.log('Number.isInteger(num1) =>   ' + Number.isInteger(num1));
console.log('Math.sign(4.8) =>   ' + Math.sign(4.8));
console.log('Math.sign(-4.8) =>   ' + Math.sign(-4.8));
console.log('Math.floor(4.8) =>   ' + Math.floor(4.8));
console.log('Math.floor(-4.8) =>   ' + Math.floor(-4.8));
console.log('Math.trunc(4.8) =>   ' + Math.trunc(4.8));
console.log('Math.trunc(-4.8) =>   ' + Math.trunc(-4.8));
// --------------------------------------------------
console.log('---------------------   17   ---------------------');
// --------------------------------------------------
// string new methods
console.log('\t #string new methods');

let g = 'Saeed Arian';
console.log('g =>   ' + g);
console.log('g.includes(\'eed\') =>    ', g.includes('eed'));
console.log('g.includes(\'eed\', 5) =>    ', g.includes('eed', 5));
console.log('g.includes(\'eed\', 0) =>    ', g.includes('eed', 0));
console.log('g.startsWith(\'ee\', 2) =>    ', g.startsWith('ee', 2));
console.log('g.endsWith(\'ian\') =>    ', g.endsWith('ian'));
console.log('g.endsWith(\'ia\', 10) =>    ', g.endsWith('ia', 10));
console.log('g.endsWith(\'ee\', 4) =>    ', g.endsWith('ee', 4));
// object new methods
console.log('\t #object new methods');
class Class1 {
    constructor() {
        this.name = 'hesam'
        this.family = 'rezaee'
    }
}
class Class2 {
    constructor() {
        this.family = 'ahmadi'
    }
}
class Class3 {
    constructor() {
        this.age = '23'
    }
}
let obj5 = new Class1();
let obj6 = new Class2();
let obj7 = new Class3();
console.log('obj5= ', obj5, '\nobj6= ', obj6, '\nobj7= ', obj7);
let obj8 = Object.assign({}, obj5, obj6, obj7);
console.log('let obj8 = Object.assign({}, obj5, obj6, obj7) =>   ',
    '\nobj5= ', obj5, '\nobj6= ', obj6, '\nobj7= ', obj7, '\nobj8= ', obj8);

obj8 = Object.assign(obj5, obj6, obj7);
console.log('let obj8 = Object.assign(obj5, obj6, obj7) =>   ',
    '\nobj5= ', obj5, '\nobj6= ', obj6, '\nobj7= ', obj7, '\nobj8= ', obj8);
Object.setPrototypeOf(obj6, obj5);
console.log(`Object.setPrototypeOf(obj5, obj6) =>`,
    '\nobj5= ', obj5, '\nobj6= ', obj6);
// --------------------------------------------------
console.log('---------------------   18   ---------------------');
// --------------------------------------------------
// Iterators
console.log('\t #Iterators');

let arr4 = ['hesam', 'ali', 'reza'];
console.log('arr4 =>   ', arr4);
arr4[Symbol.iterator] = null
    // for (let item of arr4) {
    //     console.log(item);
    // }

let arr5 = ['hesam', 'ali', 'reza'];
console.log('arr5 =>   ', arr5);
let arr5It = arr5[Symbol.iterator]();
console.log('arr5It = arr5[Symbol.iterator]() =>   ');
console.log('arr5It.next() =>   ', arr5It.next());
console.log('arr5It.next() =>   ', arr5It.next());
console.log('arr5It.next() =>   ', arr5It.next());
console.log('arr5It.next() =>   ', arr5It.next());
arr5[Symbol.iterator] = function() {
    console.log('arr5[Symbol.iterator] = function() =>   ', this);
}
arr5It = arr5[Symbol.iterator]();
arr5[Symbol.iterator] = function() {
    let items = this;
    let step = 0;
    return {
        next() {
            let obj = {
                done: step >= items.length,
                value: items[step]
            }
            step++;
            return obj;
        }
    }
}
console.log('for (let name of arr5) =>   ');
for (let name of arr5) {
    console.log(name);
}

let user1 = {
    id: 1,
    name: 'hesam',
    email: 'hesam@gmail.com',
    posts: [{
            id: 1,
            title: 'this is post one'
        },
        {
            id: 2,
            title: 'this is post two'
        }
    ]
}
user1[Symbol.iterator] = function() {
    let posts = this.posts;
    let step = 0;
    return {
        next() {
            let obj = {
                done: step >= posts.length,
                value: posts[step]
            }
            step++;
            return obj;
        }
    }
}
console.log('for (let post of user) =>   ');
for (let post of user1) {
    console.log(post);
}

// --------------------------------------------------
console.log('---------------------   19   ---------------------');
// --------------------------------------------------
// Generators
console.log('\t #Generators');

function* createNames() { // use * after function means it is a generator function
    yield 'hesam'       //  first value
    yield 'ali'         //  second value
    yield 'reza'        //  third value (with done: false)
    return 'all names'  //  latest value (with done: true)
};
for (const name of createNames()) {
    console.log('function* createNames() =>   ', name); // doen't show 'all names'
};
let namesIt = createNames();
console.log('namesIt = createNames() =>   ');
console.log('namesIt.next() =>   ', namesIt.next());
console.log('namesIt.next() =>   ', namesIt.next());
console.log('namesIt.next() =>   ', namesIt.next());
console.log('namesIt.next() =>   ', namesIt.next());
console.log('namesIt.next() =>   ', namesIt.next());
console.log('[...createNames()] =>   ', [...createNames()]);
let obj10 = {
    name: 'hesam',
    age: 26,
    *[Symbol.iterator]() { // * means it is generator
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        yield 6;
    }
}
console.log('obj10 =>   ', obj10);
let obj10It = obj10[Symbol.iterator]();
console.log('obj10It = obj10[Symbol.iterator]() =>');
console.log('obj10It.next() =>   ', obj10It.next());
console.log('for (const item of obj10) =>');
for (const item of obj10) {
    console.log('item =>   ', item);
}
let user2 = {
    id: 1,
    name: 'hesam',
    email: 'hesam@gmail.com',
    posts: [{
            id: 1,
            title: 'this is post one'
        },
        {
            id: 2,
            title: 'this is post two'
        }
    ],
    *[Symbol.iterator]() {
        yield* this.posts; // use * show that this.posts is a list
    }
}
console.log('user2 =>   ', user2);
console.log('user2It = user2[Symbol.iterator]() =>');
let user2It = user2[Symbol.iterator]();
console.log('user2It.next() =>   ', user2It.next())
console.log('user2It.next() =>   ', user2It.next())
console.log('user2It.next() =>   ', user2It.next())
console.log('for (let item of user2) =>');
for (let item of user2) {
    console.log('item =>   ', item);
}

// --------------------------------------------------
console.log('---------------------   20   ---------------------');
// --------------------------------------------------
// Callback-hell
console.log('\t #Callback-hell');
//  it uses to get data from server

// function doSomething(callback, error) {
//     setTimeout(() => {
//         let title = 'this is article one';
//         if (!title) { 
//             error('err');
//             return;
//         }
//         setTimeout(() => {
//             let data = { user: '' }
//             if (data) { 
//                 error('err data'); 
//                 return; 
//             }
//             callback(data);
//         }, 2000);
//     }, 2000);
// }


// console.log('run 1');
// doSomething(function(data) {
//     console.log('function(data) =>   ', data);
// }, function(error) {
//     console.log('function(error) =>   ', error);
// })
// console.log('run 3');




// --------------------------------------------------
console.log('---------------------   21   ---------------------');
// --------------------------------------------------
// Promises
console.log('\t #Promises');

// function getData(url) {
//     return new Promise((resolve, reject) => {
//         const httpRequest = new XMLHttpRequest();
//         httpRequest.open("GET", url);
//         httpRequest.onreadystatechange = function() {
//             console.log(XMLHttpRequest.DONE);
//             if (this.readyState == XMLHttpRequest.DONE) {
//                 if (this.status == 200) {
//                     resolve(this.responseText)
//                 } else if (this.status == 404) {
//                     reject('getData(url) =>   data not found')
//                 } else {
//                     reject('getData(url) =>   something goes wrong')
//                 }
//             }
//         }
//         httpRequest.send();
//     })
// }

// function paresToJson(dataText) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             try {
//                 resolve(JSON.parse(dataText));
//             } catch (error) {
//                 reject('paresToJson(dataText) =>   ', error);
//             }
//         }, 2000);
//     })
// }
// getData("https://jsonplaceholder.typicode.com/todos")
//     .then(data => {
//         paresToJson(data);
//     })
//     .then((json) => {
//         console.log('getData("https://jsonplaceholder.typicode.com/todos") ->\ndata => paresToJson(data) ->\n', json)
//     })
//     .catch(err => {
//         console.log(err);}
//     )

// --------------------------------------------------
console.log('---------------------   22   ---------------------');
// --------------------------------------------------
// Promises (part2)
console.log('\t #Promises (part2)');

// function doSomething() {
//     let name = 'hesam';
//     return Promise.reject('error !!')
//         // return Promise.resolve(name);
// }
// doSomething().then((data) => console.log('doSomething() =>   ', data), err => console.log('doSomething() =>   ', err));

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('rejected promise1');
//     }, 2000);
// })
// let num3 = 42;
// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('resolved promise3');
//     }, 1000);
// })
// Promise.all([promise1, num3, promise3])
//     .then(data => console.log('Promise.all([promise1, num3, promise3]) =>   resolve= ', data))
//     .catch(err => console.log('Promise.all([promise1, num3, promise3]) =>   error= ', err))
// Promise.race([promise1, promise3])
//     .then(data => console.log('Promise.race([promise1, promise3]) =>   resolve= ', data))
//     .catch(err => console.log('Promise.race([promise1, promise3]) =>   error= ', err))

// --------------------------------------------------
console.log('---------------------   23   ---------------------');
// --------------------------------------------------
// Maps
console.log('\t #Maps');

let symble4 = Symbol('my data');
let Obj9 = {};
let func14 = function() {}

let list11 = new Map();
list11.set('key1', '__key1__');
list11.set('key2', '__key2__');
list11.set('key3', '__key3__');
list11.set(symble4, '__symble4__');
list11.set(Obj9, '__obj9__');
list11.set(func14, '__func14__');
console.log('list11 =>   ', list11);
console.log('list11.get(\'key1\') =>   ', list11.get('key1'));
console.log('list11.get(symble4) =>   ', list11.get(symble4));
console.log('list11.get(Obj9) =>   ', list11.get(Obj9));
console.log('list11.get({}) =>   ', list11.get({}));
console.log('list11.get(func14) =>   ', list11.get(func14));
console.log('list11.size =>   ', list11.size);
list11.delete(symble4);
console.log('list11.delete(symble4) =>   ', list11);
list11.clear();
console.log('list11.clear() =>   ', list11);

let arr3 = [
    ['key1', '__key1__'],
    ['key2', '__key2__'],
    ['key3', '__key3__'],
    [symble4, '__symble4__'],
];
console.log('arr3 =>   ', arr3);
list11 = new Map(arr3);
console.log('list11 =>   ', list11);
console.log('list11.has(\'ky21\') =>   ', list11.has('ky21'));
console.log('list11.forEach((val, key) =>');
list11.forEach((val, key) => {
    console.log(key, val);
})
console.log('list11.entries() =>   ', list11.entries());
console.log('for (const [key, value] of list11) =>');
for (const [key, value] of list11) {
    console.log(key, value);
}
console.log('for (const key of list11.keys()) =>');
for (const key of list11.keys()) {
    console.log(key);
}
// --------------------------------------------------
console.log('---------------------   24   ---------------------');
// --------------------------------------------------
// Sets
console.log('\t #Sets');

let list12 = new Set([1, 2, 3]);
list12.add(7);
list12.add('saeed');
list12.add(8);
list12.add(7); // It doesn't add
console.log('list12 =>   ', list12);
console.log('for (const item of list12) =>   ');
for (const item of list12) {
    console.log(item);
}
console.log('for (const [key, value] of list12.entries()) =>   ');
for (const [key, value] of list12.entries()) {
    console.log(key, value);
}
console.log('list12.keys() =>   ', list12.keys());
console.log('list12.values() =>   ', list12.values());
console.log('list12.has(\'saeed\') =>   ', list12.has('saeed'));
console.log('list12.entries() =>   ', list12.entries());
list12.delete(2);
console.log('list12.delete(2) =>   ', list12);
list12.clear();
console.log('list12.clear() =>   ', list12);

// --------------------------------------------------
console.log('---------------------   25   ---------------------');
// --------------------------------------------------
class newCar {
    constructor() {
        this.value = new Array(100000000).join('---')
    }
}

// WeakMap
console.log('\t #WeakMap');

window.car7 = new Car(); // window is a global variable
console.log('window.car7 = new Car() =>   ', window.car7);
let list13 = new WeakMap();
list13.set({ ali: 5 }, 'reza');
list13.set(car7, 'ahmad');
console.log('list13 =>   ', list13);
console.log('list13.has(window.car7) =>   ', list13.has(window.car7));
delete window.car7;
console.log('delete window.car7 =>   ');
console.log('list13.has(window.car7) =>   ', list13.has(window.car7));

// WeakSet
console.log('\t #WeakSet');

window.car7 = new Car();
console.log('window.car7 = new Car() =>   ', window.car7);
let list14 = new WeakSet([window.car7, { b: 2 }]);
console.log('list14 =>   ', list14);
console.log('list14.has(window.car7) =>   ', list14.has(window.car7));
delete window.car7;
console.log('delete window.car7 =>   ');
console.log('list14.has(window.car7) =>   ', list14.has(window.car7));

// --------------------------------------------------
console.log('---------------------   26   ---------------------');
// --------------------------------------------------
// Reflect api
console.log('\t #Reflect api');

let obj11 = {};
console.log('obj11 =>   ', obj11);
console.log('obj11 instanceof Object =>   ', obj11 instanceof Object);
console.log('typeof(obj11) =>   ', typeof(obj11));
class Car2 {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
class IranCar2 {
    constructor() {}
}
let obj12 = new Car2('ford', 'xxx');
let obj13 = Reflect.construct(Car2, ['ford', 'xxx']);
console.log('obj12 =>   ', obj12);
console.log('obj13 =>   ', obj13);
console.log('obj12.__proto__ == obj13.__proto__ =>   ', obj12.__proto__ == obj13.__proto__);
let obj14 = Reflect.construct(Car2, ['ford', 'xxx'], IranCar2);
console.log('obj14 = Reflect.construct(Car2, [\'ford\', \'xxx\'], IranCar2) =>   ', obj14);
let user3 = {
    name: 'hesam',
    email: 'hesam@gmail.com'
}

function sayHello(age, birthdate) {
    return `hello ${this.name}, your email is : ${this.email} , you're ${age} and birthdate ${birthdate}`
}
console.log('sayHello.apply(user3, [26, \'1/1/1900\']) =>\n', sayHello.apply(user3, [26, '1/1/1900']));
console.log('Reflect.apply(sayHello, user3, [26, \'1/1/1900\']) =>\n', Reflect.apply(sayHello, user3, [26, '1/1/1900']));
let obj15 = {
    age: 2000
}
console.log('obj15 =>   ', obj15);
console.log('Reflect.getPrototypeOf(obj15) =>   ', Reflect.getPrototypeOf(obj15));
Reflect.setPrototypeOf(obj15, obj12);
console.log('Reflect.setPrototypeOf(obj15, obj12) =>\nobj15 ->   ', obj15);
console.log('Reflect.getPrototypeOf(obj15) =>   ', Reflect.getPrototypeOf(obj15));

// --------------------------------------------------
console.log('---------------------   27   ---------------------');
// --------------------------------------------------
// Reflect api 2
console.log('\t #Reflect api 2');

let obj16 = {
    name: 'hesam',
    birthdate: '1/1/1900'
}
console.log('obj16 =>   ', obj16);
Reflect.defineProperty(obj16, 'family', {
    value: 'mousavi',
    writable: false
});
console.log('Reflect.defineProperty(obj16, \'family\', { value: \'mousavi\', writable: false }) =>\nobj16 =>   ', obj16);
obj16.name = 'reza';
obj16.family = 'safari';
console.log('obj16.name = \'reza\'\nobj16.family = \'safari\'\nobj16 =>   ', obj16);
Reflect.deleteProperty(obj16, 'name');
console.log('Reflect.deleteProperty(obj16, \'name\') =>   ', obj16);
console.log('Reflect.get(obj16, \'family\') =>   ', Reflect.get(obj16, 'family'));
console.log('Reflect.has(obj16, \'family\') =>   ', Reflect.has(obj16, 'family'));
let arr6 = ['hesam', 'ali', 'reza'];
console.log('arr6 =>   ', arr6);
console.log('Reflect.get(arr6, 1) =>   ', Reflect.get(arr6, 1));
Reflect.set(obj16, 'age', 26);
Reflect.set(obj16, 'birthdate', '2/2/2000');
console.log('Reflect.set(obj16, \'age\', 26)\nReflect.set(obj16, \'birthdate\', \'2/2/2000\')\nobj16 =>   ', obj16);
console.log('Reflect.ownKeys(obj16) =>   ', Reflect.ownKeys(obj16));
console.log('Reflect.isExtensible(obj16) =>   ', Reflect.isExtensible(obj16));
Reflect.preventExtensions(obj16);
console.log('Reflect.preventExtensions(obj16)\nReflect.isExtensible(obj16) =>   ', Reflect.isExtensible(obj16))

// --------------------------------------------------
console.log('---------------------   28   ---------------------');
// --------------------------------------------------
// Proxy api
console.log('\t #Proxy api');

class Car3 {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
let car8 = new Car3('IranKhodro', '405');
console.log('car8 =>   ', car8);
let handler1 = {
    get(obj, propkey) {
        return Reflect.has(obj, propkey) ?
            Reflect.get(obj, propkey) :
            `+++ property dosen't exist +++`
    },
    has(obj, propkey) {
        return Reflect.has(obj, propkey);
    },
    set(obj, propkey, value) {
        if (typeof value == 'number') {
            Reflect.set(obj, propkey, value);
        }
    }
}

let proxy1 = new Proxy(car8, handler1);
console.log('proxy1 = new Proxy(car8, handler1)');
console.log('proxy1.make =>   ', proxy1.make);
console.log('proxy1.year =>   ', proxy1.year);
console.log('Reflect.has(car8, \'year\') =>   ', Reflect.has(car8, 'year'));
console.log('\'make\' in proxy1 =>   ', 'make' in proxy1);
console.log('Reflect.has(proxy1, \'year\') =>   ', Reflect.has(proxy1, 'year'));
proxy1.year = 2000;
proxy1.name = 'hesam';
console.log('proxy1.year = 2000\nproxy1.name = \'hesam\'');
console.log('proxy1.year =>   ', proxy1.year);
console.log('proxy1.name =>   ', proxy1.name);

let car9 = new Car3('Saipa', 'Pride');
console.log('car9 =>   ', car9);
let proxy2 = new Proxy({}, handler1);
Reflect.setPrototypeOf(car9, proxy2);
car9.year = 1990;
car9.name = 'reza';
console.log('proxy2.year = 1990\nproxy2.name = \'reza\'');
console.log('car9.year =>   ', car9.year);
console.log('car9.name =>   ', car9.name);

// --------------------------------------------------
console.log('---------------------   29   ---------------------');
// --------------------------------------------------
// Proxy api 2
console.log('\t #Proxy api 2');

function sum3(a, b) {
    return a * b;
}
let handler2 = {
    apply(target, thisArg, args) {
        return '+++ ' + target(...args) + ' +++';   //  target is the function that is mentioned in proxy
    }
}
let proxy3 = new Proxy(sum3, handler2);
console.log('proxy3 = new Proxy(sum3, handler2)');
console.log('sum3(3, 4) =>   ', sum3(3, 4));
console.log('proxy3(3, 4) =>   ', proxy3(3, 4));

// This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes.
console.log('\tThis feature is no longer recommended. \n\t Though some browsers might still support it, \n\t it may have already been removed from the relevant web standards, \n\t may be in the process of being dropped, \n\t or may only be kept for compatibility purposes.');
// let car10 = new Car3('Toyota', 'Camry');
// console.log('car10 =>   ', car10);
// let { proxy4, revoke } = Proxy.revocable({}, handler1);
// console.log('{ proxy4, revoke } = Proxy.revocable({}, handler1)');
// Reflect.setPrototypeOf(car10, proxy4);
// console.log('Reflect.setPrototypeOf(car10, proxy4)');
// console.log('car10 =>   ', car10);
// car10.year = 1990;
// car10.name = 'reza';
// console.log('proxy2.year = 1990\nproxy2.name = \'reza\'');
// console.log('car10.year =>   ', car10.year);
// console.log('car10.name =>   ', car10.name);
// revoke();
// car10.year = 1990;
// car10.name = 'reza';
// console.log(car10.year);
// console.log(car10.name);
// console.log(Reflect.has(car10, 'year'));

// --------------------------------------------------
console.log('---------------------   30   ---------------------');
// --------------------------------------------------