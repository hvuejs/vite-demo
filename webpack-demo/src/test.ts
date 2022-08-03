console.log("Hello World!");

class PersonClass {
    name: string
    constructor (args: string) {
        this.name = args
    }
}

const Person = function Person(){
    this.name = arguments;
    return this;
}

const person1 = new PersonClass('class ES6');


const person2 = new (Person as FunctionConstructor)('function函数');

console.log(person1, person2);

import copy from "./index";

document.querySelectorAll('button')[0].addEventListener("click", function () {
    const result = copy('复制一段话', {
        debug: true,
        message: "复制失败，可以按 #{key} 来进行复制"
    })
    console.log(result)
})
