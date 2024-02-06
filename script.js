const display = document.getElementById('display');

function appendToDisplay(value) {
  const lastChar = display.value.slice(-1);
  if (display.value === '' || lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '.') {
    display.value += value;
  } else if (value !== '0') { //
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Event listener for keyboard inputs
document.addEventListener('keydown', function(event) {
  const key = event.key;
  const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Escape'];

  if (allowedKeys.includes(key)) {
    if (key === 'Enter') {
      calculateResult();
    } else if (key === 'Backspace') {
      display.value = display.value.slice(0, -1); // Remove last character
    } else if (key === 'Escape') {
      clearDisplay(); // Clear the entire calculation
    } else {
      appendToDisplay(key);
    }
  }
});

// Function to remove the last character
function removeLastCharacter() {
  display.value = display.value.slice(0, -1);
}
