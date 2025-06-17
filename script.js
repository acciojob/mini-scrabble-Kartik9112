//your code here
const textarea = document.getElementById('evaluatedText');
const countDisplay = document.getElementById('letterCount');

textarea.addEventListener('input', () => {
  const textLength = textarea.value.length;
  countDisplay.textContent = textLength;
});
