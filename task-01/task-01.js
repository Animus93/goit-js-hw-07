// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега h2) и 
// количество элементов в категории (всех вложенных в него элементов li).


const refs = {
    category: document.querySelector('#categories'),
    header: document.querySelectorAll('h2')
};

console.log(`В списке ${refs.category.children.length} категории`)
for (let i = 0; i < refs.category.children.length; i += 1){
    console.log('Категория:',refs.header[i].outerText);
    console.log('Количество элементов:',refs.header[i].nextElementSibling.children.length)
};
