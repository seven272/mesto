let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let saveButton = document.querySelector('.popup__button');
let nameInput = popup.querySelector('.popup__input_type_name'); // Выбор форм инструментом .querySelector()
let jobInput = popup.querySelector('.popup__input_type_job');// Выбор форм инструментом .querySelector()
let nameProfile = document.querySelector('.profile__title');//создали переменную чтобы позже присвоить ей значнение (имя) введенное в попапе
let jobProfile = document.querySelector('.profile__subtitle');//создали переменную чтобы позже присвоить ей значнение (профессию) введенное в попапе
let formElement = document.querySelector('.popup__container');



openButton.addEventListener('click', () => { //при клике по кнопке "редактировать" активируем попап
    popup.classList.add('popup_active');
});

closeButton.addEventListener('click', () => { //при клике по кнопке "закрыть" убираем попап
    popup.classList.remove('popup_active');
});

popup.addEventListener('click', (event) => {  //проверяет по какому элементу был клик и если за областью белого фона, то закрывает попап
    if (event.target === event.currentTarget) {
        popup.classList.remove('popup_active');
    }
});


function handleFormSubmit(event) {
    event.preventDefault(); // Эта строчка отменяет стандартную отправку формы. Так мы можем определить свою логику отправки.           
    nameProfile.textContent = nameInput.value; // Вставили новые значение из value в форму с помощью textContent 
    jobProfile.textContent = jobInput.value;  // Вставили новые значение из value в форму с помощью textContent
}
saveButton.addEventListener('click', () => {
    popup.classList.remove('popup_active');
}); //закрываем попап при нажатии на кнопку "сохранить"

formElement.addEventListener('submit', handleFormSubmit); // метод addEventListener это способ повесить событие (event) на элемент. 






// Код до исправлений
// let openButton = document.querySelector('.profile__edit-button');
// let popup = document.querySelector('.popup');
// let closeButton = document.querySelector('.popup__close');

// let togglePopup = function() {
//     popup.classList.toggle('popup_active');
// }

// openButton.addEventListener('click', togglePopup);

// closeButton.addEventListener('click', togglePopup);

// popup.addEventListener('click', (event) => {
//     if(event.target === event.currentTarget) {
//         togglePopup()
//     }
// });



// let formElement = document.querySelector('.popup__container');

// function handleFormSubmit (event) {
//     event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                         // Так мы можем определить свою логику отправки.

//     let nameInput = popup.querySelector('.popup__input_type_name'); // Выбор форм инструментом .querySelector()
//     let jobInput = popup.querySelector('.popup__input_type_job');// Выбор форм инструментом .querySelector()

//     nameInput.getAttribute('value'); //получили значение полей
//     jobInput.getAttribute('value'); //получили значение полей

//     nameInput.textContent = nameInput.value; // Вставили новые значения в value с помощью textContent
//     jobInput.textContent = jobInput.value; // Вставили новые значения в value с помощью textContent

//     console.log(nameInput.value); //вывод в консоль нового значения value для проверки
//     console.log(jobInput.value); //вывод в консоль нового значения value для проверки
// }
// formElement.addEventListener('submit', handleFormSubmit); // метод addEventListener это способ повесить событие (event) на элемент. 

