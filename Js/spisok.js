btn.addEventListener('click', function () {
    let elem = document.createElement('li');
    elem.className = 'liElem';
    elem.innerHTML = input.value;
    list.insertAdjacentHTML('beforeend', `<li>${elem.textContent}</li>`);
})


// Напишите интерфейс для создания списка.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
// Все элементы должны создаваться динамически.

// Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст.