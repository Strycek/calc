let model = {
    num1: 6,
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

// Testy
model.num1 = 3;
model.oper = '+';
model.num2 = 2;
console.log('+: ' + (model.doit() == 5));

model.num1 = 3;
model.oper = '-';
model.num2 = 2;
console.log('-: ' + (model.doit() == 1));

model.num1 = 3;
model.oper = '*';
model.num2 = 2;
console.log('*: ' + (model.doit() == 6));

model.num1 = 6;
model.oper = '/';
model.num2 = 2;
console.log('/: ' + (model.doit() == 3));


model.num1 = 0;
model.oper = '/';
model.num2 = 6;
console.log('/: ' + (model.doit() == 0));


model.num1 = 6;
model.oper = '/';
model.num2 = 0;
console.log('/: ' + (model.doit() == Infinity));


model.num1 = -6;
model.oper = '/';
model.num2 = 0;
console.log('/: ' + (model.doit() == -Infinity));

model.num1 = -6;
model.oper = '/';
model.num2 = 54;
model.clear()
console.log('clear: ' + (model.num1 == 0));
console.log('clear: ' + (model.num2 == 0));

model.num1 = Math.PI/2;
model.oper = 'sin';
console.log('sin: ' + (model.doit() == 1))


//operace -> kalkulator -> vysledek -> zahodi operaci


// function Operation() {
//     return  {
//         num1: 6,
//         num2: 0,
//         oper: '+'
//     }
// }

// Calculator = {
//     calculate: function (op) {
//         let result
//         switch (this.oper) {
//             case '+':
//                 result = this.num1 + this.num2
//         }
//         return result
//     }
// }
// op = new Operation();

// Calculator.calculate(op);
