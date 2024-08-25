// Append character to the display
function appendCharacter(char) {
    const display = document.getElementById('display');
    display.value += char;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character
function deleteChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const display = document.getElementById('display');

    if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        appendCharacter(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteChar();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
