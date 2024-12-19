let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

const adjustFontSize = () => {
    const length = string.length;
    if (length > 10) {
        input.style.fontSize = '25px';
    } else if (length > 5) {
        input.style.fontSize = '30px';
    } else {
        input.style.fontSize = '40px';
    }
};

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                string = "Error";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
        } else {
            string += e.target.innerHTML;
        }
        input.value = string;
        adjustFontSize();
    });
});
