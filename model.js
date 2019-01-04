let model = {
    num1: 6,
    num2: 0,
    oper: '+',
    clear: function () {
        this.num1 = 0;
        this.num2 = 0;
    },
    doit: function () {
        let result
        switch (this.oper) {
            case '+':
                result = this.num1 + this.num2

        }
        return result
    }
}
model.num1=3
model.num2=2
console.log(model.doit());
