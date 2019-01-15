let model = {
    num1: 0,
    num2: 0,
    oper: '+',
    clear: function () {
        this.num1 = 0;
        this.num2 = 0;
    },
    doit: function () {
        let result;
        switch (this.oper) {
            case '+':
                result = this.num1 + this.num2;
                break;
            case '-':
                result = this.num1 - this.num2;
                break;
            case '*':
                result = this.num1 * this.num2;
                break;
            case '/':
                result = this.num1 / this.num2;
                break;
            case 'sin':
                result = Math.sin(this.num1);
                break;
        }
        return result
    }
}
/*
if (module) {
    module.exports = model;
}*/