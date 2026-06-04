const form = document.getElementById("reverseForm");
const display = document.getElementById("display");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const word = display.value.trim();

  if (word === "") {
    result.textContent = "Please enter a word first.";
    display.focus();
    return;
  }

  const reversedWord = word.split("").reverse().join("");

  result.textContent = reversedWord;
});
