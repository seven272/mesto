
let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');

let togglePopup = function() {
    popup.classList.toggle('popup_active');
}

openButton.addEventListener('click', togglePopup);

closeButton.addEventListener('click', togglePopup);

popup.addEventListener('click', (event) => {
    if(event.target === event.currentTarget) {
        togglePopup()
    }
});



let formElement = popup.querySelector('.popup__container');

function handleFormSubmit (event) {
    event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.

    let nameInput = popup.querySelector('.popup__name'); // Выбор форм инструментом .querySelector()
    let jobInput = popup.querySelector('.popup__work');// Выбор форм инструментом .querySelector()

    nameInput.getAttribute('value'); //получили значение полей
    jobInput.getAttribute('value'); //получили значение полей

    nameInput.textContent = nameInput.value; // Вставили новые значения в value с помощью textContent
    jobInput.textContent = jobInput.value; // Вставили новые значения в value с помощью textContent

    console.log(nameInput.value); //вывод в консоль нового значения value для проверки
    console.log(jobInput.value); //вывод в консоль нового значения value для проверки
}
formElement.addEventListener('submit', handleFormSubmit); // метод addEventListener это способ повесить событие (event) на элемент. 

