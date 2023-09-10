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

arrowThis();
functionThis();
