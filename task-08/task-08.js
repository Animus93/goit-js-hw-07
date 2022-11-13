// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку 
// Создать, после чего рендерится коллекция. При нажатии на кнопку 
// Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр 
// amount - число. Функция создает столько div, сколько указано в amount 
// и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше 
// предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputRef = document.querySelector('input');
const boxesRef = document.querySelector('div#boxes');
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');

renderRef.addEventListener('click', onCheckInputValue);
destroyRef.addEventListener('click', onDestroy);

function onCheckInputValue () {
  inputRef.value > 100 || inputRef.value < 1
    ?alert('введите число от 1 до 100')
    :createBoxes(inputRef.value);

};

function createBoxes (amount) {
  let divParameters = 30;
  for( let i = 0; i < amount; i +=1){
    const newDiv = document.createElement(`div`);
    newDiv.style.width = divParameters + 'px';
    newDiv.style.height = divParameters + 'px';
    newDiv.style.backgroundColor = onDivRandomColor();
    boxesRef.append(newDiv);
    divParameters +=10;
  };
};

function onDivRandomColor () {
  let hexCode = '#';
  for(let i=0; i<=5; i++) {
    let randomNum = Math.floor(Math.random() * 16);
    hexCode += '0123456789ABCDEF'[randomNum];
  };
  return hexCode;
};

function onDestroy () {
  boxesRef.innerHTML = null;
  inputRef.value = null;
};
