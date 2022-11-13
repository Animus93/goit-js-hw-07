// Счетчик состоит из спана и кнопок, которые должны увеличивать и 
// уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее 
// значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения 
// значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление 
// интерфейса
const refs = {
    currentValueRef: document.querySelector('#value'),
    decrementRef: document.querySelector('button[data-action="decrement"]'),
    incrementRef: document.querySelector('button[data-action="increment"]'),
    counterValue: 0,
};

refs.decrementRef.addEventListener('click', decrement);
refs.incrementRef.addEventListener('click', increment);

function decrement() {
    refs.currentValueRef.textContent = refs.counterValue -= 1;
};
function increment() {
    refs.currentValueRef.textContent = refs.counterValue += 1;
};