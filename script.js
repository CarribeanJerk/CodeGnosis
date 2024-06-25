// JavaScript code with enhanced functionality

const displayText = document.getElementById('displayText');
const changeTextBtn = document.getElementById('changeTextBtn');
const toggleColorBtn = document.getElementById('toggleColorBtn');
const mainImage = document.getElementById('mainImage');

// Array of possible text changes
const textOptions = [
    'Text changed!',
    'New text!',
    'Updated text!',
    'Different text!'
];

// Event listener for changing text on button click
changeTextBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    displayText.textContent = textOptions[randomIndex];
});

// Toggle button color on click
let isColorChanged = false;

toggleColorBtn.addEventListener('click', function() {
    isColorChanged = !isColorChanged;
    if (isColorChanged) {
        toggleColorBtn.style.backgroundColor = '#dc3545';
    } else {
        toggleColorBtn.style.backgroundColor = '#007bff';
    }
});

// Change image source on image click
mainImage.addEventListener('click', function() {
    if (mainImage.src.includes('boof.png')) {
        mainImage.src = 'boof.png';
    } else {
        mainImage.src = 'boof.png';
    }
});