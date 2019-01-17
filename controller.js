document.addEventListener("DOMContentLoaded", function (event) {
  
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
                    if (value == '.') {
                        value = '0.';
                    }
                    View.set(value);
                }
                else {
                    View.set(View.get() + value);
                }
                break;
            case 'C':
                Model.clear();
                View.clear();
                break;

            case '+':
            case '-':
            case '*':
            case '/':
                Model.setNum1(View.getNumber());
                doClear = true;
                Model.setOper(value);
                break;
            case '=':
                Model.setNum2(View.getNumber());
                View.set(Model.doit());
                break;
            case 'sin':
                Model.setNum1(View.getNumber());
                Model.setOper(value);
                View.set(Model.doit());
                break;
        }
    }
    let buttons = document.querySelectorAll('button');
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handler)
    }


});

