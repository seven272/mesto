let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let saveButton = document.querySelector('.popup__button');
let nameInput = popup.querySelector('.popup__input_type_name'); // Выбор форм инструментом .querySelector()
let jobInput = popup.querySelector('.popup__input_type_job');// Выбор форм инструментом .querySelector()
let nameProfile = document.querySelector('.profile__title');//создали переменную чтобы позже присвоить ей значнение (имя) введенное в попапе
let jobProfile = document.querySelector('.profile__subtitle');//создали переменную чтобы позже присвоить ей значнение (профессию) введенное в попапе
let formElement = document.querySelector('.popup__container');


function activePopup() {
    popup.classList.add('popup_active'); //при клике по кнопке "редактировать" активируем попап
    nameInput.value = nameProfile.textContent //подставляем  данные из профиля в форму
    jobInput.value =  jobProfile.textContent //подставляем  данные из профиля в форму
}

function closePopup() {
    popup.classList.remove('popup_active');//при клике по кнопке "закрыть" убираем попап
}

function verifyPopup(event) { //проверяет по какому элементу был клик и если за областью белого фона, то закрывает попап
    if (event.target === event.currentTarget) {
        closePopup();
    }
}

function handleFormSubmit(event) {
    event.preventDefault(); // Эта строчка отменяет стандартную отправку формы. Так мы можем определить свою логику отправки.           
    nameProfile.textContent = nameInput.value; // Вставили новые значение из value в форму с помощью textContent 
    jobProfile.textContent = jobInput.value;  // Вставили новые значение из value в форму с помощью textContent
    closePopup(); //вызвали функцию закрытия попапа. Теперь попап закрывается после нажатия на кнопку сохранить
}


openButton.addEventListener('click', activePopup); //слушатель события открытия попапа
closeButton.addEventListener('click',closePopup);//слушатель события открытия попапа
popup.addEventListener('click', verifyPopup); //слушатель проверки области попапа при клике
formElement.addEventListener('submit', handleFormSubmit); // метод addEventListener это способ повесить событие (event) на элемент. 