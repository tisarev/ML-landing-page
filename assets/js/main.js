document.addEventListener("DOMContentLoaded", () => {

    // Находим все кнопки вопросов
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = item.querySelector('.faq-answer');
            
            // Проверяем, открыт ли элемент сейчас
            const isActive = item.classList.contains('active');

            // Опционально: Закрыть все другие открытые элементы (аккордеон)
            // Если нужно, чтобы открывался только один, раскомментируйте код ниже:
            /*
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });
            */

            // Переключаем класс active
            item.classList.toggle('active');

            // Анимируем высоту
            if (!isActive) {
                // Открываем: устанавливаем max-height равный высоте контента
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                // Закрываем: сбрасываем max-height
                answer.style.maxHeight = null;
            }
        });
    });
});
