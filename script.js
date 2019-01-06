document.addEventListener("DOMContentLoaded", function (event) {
    let buttons = document.querySelectorAll('button');
    View.init();


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
                input(value); break;
            case 'C':
                model.clear();
                View.clear();
                break;

            case '+':
            case '-':
            case '*':
            case '/':
                model.num1 = View.get();
                View.clear();
                model.oper = value;
                break;
            case '=':
                model.num2 = View.get();
                display.innerHTML = model.doit();
                break;
        }
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handler)
    }

    function input(value) {
        if (display.innerHTML == '0') {
            display.innerHTML = ''
        }
        display.innerHTML = display.innerHTML + value;
    }



});

