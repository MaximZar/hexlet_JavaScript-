# Заметки о DOM API
Функции для взаимодействия с пользователям(встроенные):
* alert (OK)  
* confirm (Ok, cancel)  
* prompt (textinput, Ok)  

Подключение скриптов: `<script src="js/name.js"></script>`  
Небольшие скрипты внутри html: `<script>code</script>`  

Модульная система только появляется. Ранее:  
Переменные определенные в одном скрипте, становятся автоматически доступны в другом, даже если он этого не ждет.   
Использовали обертку: 
```
(function(){ 
  code 
})();
```
---
#### Глобальный объект - window  
Window:
* DOM
* BOM
* JavaScript  
---

#### Bom:  
Объектная модель браузера (Browser Object Model)  
Регулирует поведения браузера  
Объект Navigator - информация о браузере  
Location - адресная строка
History - история переходов  
Fetch - современный аналог Ajax

---
#### DOM
Html можно сравнить с json. Html - строковое представление dom дерева

html парсится в объект document  
Корневой элемент - html - document.documentElement  
Body и Head вынесены на уровень document для удобства
* document.head  
* document.body  

Node - базовый тип  
1. text
1. element  
1.1 svg element  
1.2 html element  
1.2.1 html input element  
1.2.2 html body element  
1.2.3 html anchor element
1. comment

text, comment - листовые  
element - все типы, представленные тегами  
Дети - ниже уровнем (только первый уровень)  
Потомки - все внутренние элементы  

Перемещение по node:
1. UP: parentNode
2. LeftOrRight: previousSibling | nextSibling
3. Down:  
3.1 childNodes (только для чтения, является коллекцией, но не массивом: [...elements] or elements.forEach())  
3.2 firstChild | lastChild

Для игнорирования text, comment и перемещения исключительно по element:
1. UP: parentElement
1. LeftOrRight: previousElementSibling | nextElementSibling
1. Down: 
1.1 children  
1.1 firstElementChild  
1.1 lastElementChild

Некоторые элементы обладают собственными методами навигации (например таблицы или формы)  
Поиск по элементам:  
1. по id getElementById('') // возвращает 1 элемент
1. .getElementsByClassName() // возвращает коллекцию (поиск среди потомков)
1. .getElementsByTagName('span');
1. .querySelector('#menu') // возвратит 1 элемент
1. .querySelectorAll('.odd > span') // коллекция
1.  el.matches(css) // удовлетворяет ли селектору css
1. el.closest(css) // ближайший элемент выше по иерархии, включая сам элемент
1. XPath, Язык запросов, изначально разработанный для навигации по DOM в XML. // XPath-путь /html/body/*/span/@class (полный синтаксис имеет вид /child::html/child::body/child::*/child::span/attribute::class)

Обновление dom:
.innerHTML = el - уберет все потомки и поставит el  
.textContent = "текст" - для вставки обычного текста (html будет в виде текста)

Узлы:
document.createTextNode('text') // создание текстового узла
document.createElement('tag') // создание тега  
* element.append(text or element) - добавит в конец элемент или текст  
* prepend добавит в начало  
* node.after(...nodes) – вставляет nodes после узла node,  
* node.before(...nodes) – вставляет nodes перед узлом node,  
* node.replaceWith(...nodes) – вставляет nodes вместо node.  
* node.remove() – удаляет node  
* const newEl = el.cloneNode(true); // копия элемента, true - скопировать всех потомков

Старый синтаксис API: 
* parent.appendChild(el) – добавляет el в конец списка детей  
* parent.insertBefore(el, nextElSibling) – добавляет el в * список детей parent перед nextElSibling  
* parent.removeChild(el) – удаляет el из детей parent  
* parent.replaceChild(newEl, el) – заменяет el на newEl  


о DevTools: Выбрав элемент в консоли можно обратиться через $0  
выбор по селектору: $('')   


Тестирование фронтенда обеспечивается системнымы тестами (Симулируется поведение пользователя). Одна из таких библиотек - nightmare  
Так же существуют такие виды тестов:  
* Screenshot Testing (различия между фото)
* Snapshot Testing (Как прошлый, но сравнивается dom)

---

Атрибуты dom  
Атрибуты не чувствительны к регистру  
атрибуты представляются в виде свойств и обычно имеют одинаковое обозначение.  
Одним из исключений является class
class = className  
так же для класса имеются свои методы
* el.classList.add()
* el.classList.remove()
* el.classList.contains()
* el.classList.toggle()  

Свойства иногда приводятся в нормализованный вид (href будет выводить полную ссылку)  
Для работы с произвольными свойствами data-* = elem.dataset.*  
.getAttribute

---
<b>dom - это просто объект</b>, а значит в него добавляются новые свойства. Но как и с js не все эти свойства поддерживают все браузеры.  
Библиотеки для добавления свойств для dom называются полифилвами.  

Посмотреть поддерживаемые фичи = caniuse.com  
Для добавлении определенной фичи библиотека: modernizr  
```
Modernizr.on('flash', function( result ) {
  if (result) {
   // the browser has flash
  } else {
    // the browser does not have flash
  }
});
```
Библиотека https://polyfill.io/v2/docs/ добавит те полифиллы, которых не хватает конкретному браузеру, динамически формируется под страницу.  
`<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>`

---
#### События
часть стандарта dom  
* click
* submit
* keyup/keydown
* focus
* contextmenu
* mouseover
* mousedown/mouseup

События должны вызывать функцию, а не просто получать ее.

Чтобы повесить одну функцию: on<b>NameEvent</b> = func() // передать вызов функции  
Для того, чтобы повесить несколько функций (обработчик событий):
```
// передается сама функция  
button.addEventListener('click', handler);  
button.removeEventListener('click', handler); //передаем ссылку на ту же функцию
// функция может принять в себя события
// через event.target можно получить доступ к объекту 
// через event.type можно получить тип события
// https://developer.mozilla.org/ru/docs/Web/API/Event
```
Чтобы отменить действие по умолчанию(например у ссылки отменить переход или submit отправляет данные на сервер) нужно в обработчике прописать `event.preventDefault()`  
Так же возврат false внутри значения атрибута сделает аналогичный эффект

#### События не зависящие от пользователя
* DOMContentLoaded – DOM-дерево построено
* load – все ресурсы загружены (картинки, стили, скрипты, ...)
* beforeunload – уйти со страницы

---
#### Работа с формой 
Можно собирать данные с каждого элемента. Но правильно использовать специальный объект.  
```
const form = document.querySelector(/* селектор нужной формы */);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Данные формы извлекаются из DOM автоматически 
  const formData = new FormData(e.target); // На вход передается элемент формы взятый из события!
  formData.get('email'); // example@example.com
  // values() возвращает итератор, поэтому преобразуем в массив
  [...formData.values()]; // ['example@example.com', 'supersecret']
  // Тоже итератор
  [...formData.entries()]; // [['email', 'example@example.com'], ['password', 'supersecret']]
});
```
форма сама по себе содержит elements который возвращает объект со семи элементами. Ключи объекта - их name атрибут

---

#### События на 2 погруженных друг в друга элементах
Если повесить на addEventListener третьим параметром true, то функции выполнятся по принципу погружения, иначе - по принципу всплытия.  
Отмена всплытия реализуется 2 способами: 
```
event.stopPropagation() // останавливает всплытие
event.stopImmediatePropagation() // завершает всплытие и все обработчики этого элемента
```
Такое бывает полезно если нужно например закрыть модальное окно кликом на область, выходящую за модальное окно.

---

### Ajax - Asynchronous JavaScript and XML
Ранее использовался объект XMLHttpRequest для http связи.(На деле использовали jQuerry для упрощения)  
Со стандартом html5 появился Fetch (Полифиллы обеспечивают стопроцентную поддержку fetch) - возвращает промис  
```
//Отправка формы POST запросом:
const form = document.querySelector('form');

fetch('/users', {
  method: 'POST',
  body: new FormData(form),
});
/// Отправка формы как json:
fetch('/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Hubot',
    login: 'hubot',
  })
})
```
Доп Библиотека - https://github.com/axios/axios