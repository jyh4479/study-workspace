class Parent {
    constructor(name) {
        this.name = name
    }

    callParentName() {
        console.log(this.name + "부모")
    }
}

class Children extends Parent {
    callChildrenName() {
        console.log(this.name + "자식")
    }
}

const jyh = new Children("jyh");
const parentJyh = new Parent("parentJyh");

Parent.prototype.callParent2Name = function () {
    console.log(this.name, this.name);
}

function TestParent() {

}

jyh.callChildrenName()
jyh.callParentName()
jyh.callParent2Name()

TestParent.prototype.name = "jyh";
const jyhTest = new TestParent();

Object.prototype.hihi = 13
Function.prototype.hihihi = 13

console.log(Parent.__proto__)
console.log(TestParent.__proto__.__proto__)
console.log(Children.__proto__.__proto__)

console.log(jyhTest.__proto__)