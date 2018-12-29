document.addEventListener("DOMContentLoaded", function (event) {
    let buttons = document.querySelectorAll('button');
    let display = document.getElementById('display');
    let action;
    let memory = 0;
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
            case 'C': clear(); break;
            case '+': plus(); break;
            case '=': eq(); break;
            case '-': minus(); break;
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

    function clear() {
        display.innerHTML = '0';
    }

    function plus() {
        console.log(memory);
        memory = memory + parseInt(display.innerHTML, 10);
        clear();
        action = '+';

    }

    function eq() {
        memory = memory + parseInt(display.innerHTML, 10);
        display.innerHTML = memory;
        memory = 0;
    }

    function minus() {
        console.log(memory);
        if (memory == 0) {
            memory = parseInt(display.innerHTML, 10);
        }
        else {
            memory = memory - parseInt(display.innerHTML, 10);
        };

        clear();
        action = '-';
    }

});

