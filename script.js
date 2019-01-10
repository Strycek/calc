document.addEventListener("DOMContentLoaded", function (event) {
    let buttons = document.querySelectorAll('button');
    View.init();

    let doClear = false;

    let handler = function (e) {
        let value = e.target.textContent
        switch (value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                if (value == '.' && View.get().match(/\./)) {
                    break;
                }

                if (View.get() == '0') {
                    View.set('');
                }

                if (value == '.' && View.get() == '') {
                    View.set('0');
                }

                if (doClear) {
                    doClear = false
                    View.set(value);
                }
                else {
                    View.set(View.get() + value);
                }
                break;
            case 'C':
                model.clear();
                View.clear();
                break;

            case '+':
            case '-':
            case '*':
            case '/':
                model.num1 = View.getNumber();
                doClear = true;
                model.oper = value;
                break;
            case '=':
                model.num2 = View.getNumber();
                View.set(model.doit());
                break;
            case 'sin':
                model.num1 = View.getNumber();
                model.oper = value;
                View.set(model.doit());
                break;
        }
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handler)
    }


});

