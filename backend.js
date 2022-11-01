const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

function show(val){
    display.value = display.value + val;
    return val;
}

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id === 'clear') {
            display.innerText = '';
        } else if(item.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if(display.innerText != '' && item.id === 'equal') {
            display.innerText = eval(display.innerText);
        } else if(display.innerText === '' && item.id === 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000)
        } else{
            display.innerText = display.innerText + show(item.id);
        }
    }
})


const themeToggleIcon = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggle-icon');
let isDark = true;
themeToggleIcon.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleIcon.classList.toggle('active');
    isDark != isDark;
}