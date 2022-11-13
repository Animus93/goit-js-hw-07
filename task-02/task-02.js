// В HTML есть пустой список ul#ingredients.

// Напиши скрипт, который для каждого элемента массива ingredients 
// создаст отдельный li, после чего вставит все li за одну операцию в список 
// ul.ingredients. Для создания DOM-узлов используй document.createElement().

/* <ul id="ingredients">
<li>Картошка</li>
<li>Грибы</li>
<li>Чеснок</li>
<li>Помидоры</li>
<li>Зелень</li>
<li>Приправы</li>
</ul> */

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ulRef = document.querySelector('#ingredients');

const createList = (arrayOfItems => arrayOfItems.map(item => 
    {
       const createLi = document.createElement('li');
       createLi.textContent = item;
       return createLi;
    }));


ulRef.append(...createList(ingredients));