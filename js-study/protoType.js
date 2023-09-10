function Parent() {
    this.greet = function () {
        console.log("Parent's greet");
    };
}

Parent.prototype.greet = function () {
    console.log("Parent prototype's greet");
};

function Child() {
    this.greet = function () {
        console.log("Child's greet");
    };
}

Child.prototype = new Parent(); //-> 이게 extends와 비슷한 부분인데 class와 동작이 다름

Child.prototype.greet = function () {
    console.log("Child prototype's greet");
};

const child = new Child();

child.greet();

// class Parent {
//     greet = function () {
//         console.log("Parent's greet");
//     };
// }
//
// class Child extends Parent {
//     // greet = function () {
//     //     console.log("Child's greet");
//     // };
// }
//
// Parent.prototype.greet = function () {
//     console.log("Parent prototype's greet");
// };
//
// Child.prototype.greet = function () { // -> 이렇게 정의하는것보다 extends해서 정의되는 함수가 우선순위가 높음
//     console.log("Child prototype's greet");
// };
//
// const child = new Child();

child.greet();

console.log(Child.__proto__)