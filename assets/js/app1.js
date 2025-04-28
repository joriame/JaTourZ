let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Автоматическая смена слайдов (опционально)
setInterval(() => {
    changeSlide(1);
}, 5000);







// Получаем элементы модального окна
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

// Получаем все изображения галереи
var images = document.getElementsByClassName("gallery-item");

// Добавляем обработчик событий для каждого изображения
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Устанавливаем источник изображения в модальном окне
        captionText.innerHTML = this.alt; // Устанавливаем текст подписи
    }
}

// Получаем элемент закрытия
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна при нажатии вне изображения
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


