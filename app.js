let randomNumber = Math.floor(Math.random() * 10) + 1; // Generate random number between 1 and 10
let remainingGuesses = 3; // Number of allowed guesses

const guessInput = document.getElementById("guessInput");
const submitButton = document.getElementById("submitButton");
const message = document.getElementById("message");

submitButton.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    message.textContent = "Please enter a valid number.";
    return;
  }

  remainingGuesses--;

  if (guess === randomNumber) {
    message.textContent = "Congratulations! 👏👏👏👏👏";
    submitButton.disabled = true; // Disable button after correct guess
  } else if (remainingGuesses > 0) {
    if (guess > randomNumber) {
      message.textContent = "larger than guessing number,Try Again !😢 ";
    } else {
      message.textContent = "lover than guessing number, Try Again ! 😢";
    }
  } else {
    message.textContent = "Lose ! (Huuu Huuu 😂)";
    submitButton.disabled = true;
  }

  guessInput.value = ""; // Clear input field after each guess
});