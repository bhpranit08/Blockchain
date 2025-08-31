"use strict";
class HelloWorld {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, ${this.name}`;
    }
    static greetStatic() {
        console.log("hello world, static");
    }
}
HelloWorld.greetStatic();
const hello = new HelloWorld("Pranit");
console.log(hello.greet());
