const valueTest = 6;

const arrowThis = () => {
    console.log(this);
}

function functionThis() {
    console.log(this);
    this.ThisTest = function () {
        console.log(this);
    }
}

const obj = {
    name: "this test",
    getFunctionThis: function () {
        console.log(this);
        const arrowThis = () => {
            console.log(this);
        }
        arrowThis();
    },
    getThis: () => console.log(this)
}

obj.getFunctionThis();