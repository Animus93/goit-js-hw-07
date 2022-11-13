// Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange() {
    inputRef.value? outputRef.textContent = inputRef.value : outputRef.textContent = 'незнакомец';
    };