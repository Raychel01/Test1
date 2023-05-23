// Получение ссылок на необходимые элементы DOM
const orderButton = document.querySelector('.order-button button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');

// Функция для открытия модального окна
function openModal() {
  modal.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = 'none';
}

// Обработчик события для кнопки заказа
orderButton.addEventListener('click', openModal);

// Обработчик события для кнопки закрытия модального окна
closeModal.addEventListener('click', closeModal);

