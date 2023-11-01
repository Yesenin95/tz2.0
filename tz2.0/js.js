const input = document.getElementById("input");
const select = document.getElementById("class");
const fieldset = document.getElementById("fieldset");
const fieldsetClass = document.getElementById("fieldset-class");
const textarea = document.getElementById("myTextarea");
const charCount = document.getElementById("charCount");


input.addEventListener("focus", () => {
   fieldset.classList.add("fieldset-focus");
});

input.addEventListener("blur", () => {
   fieldset.classList.remove("fieldset-focus");
});

select.addEventListener("focus", () => {
   fieldsetClass.classList.add("fieldset-focus");
});

select.addEventListener("blur", () => {
   fieldsetClass.classList.remove("fieldset-focus");
});

const maxChars = 200;

// Слушаем событие ввода в textarea
textarea.addEventListener("input", function () {
   // Получаем количество введенных символов
   const currentChars = textarea.value.length;

   // Обновляем счетчик символов
   charCount.textContent = `${currentChars}/${maxChars}`;

   // Если превышено максимальное количество символов, обрезаем введенный текст
   if (currentChars > maxChars) {
      textarea.value = textarea.value.substring(0, maxChars);
      charCount.textContent = `${maxChars}/${maxChars}`;
   }
});