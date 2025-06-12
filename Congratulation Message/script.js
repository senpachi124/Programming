// Get references to the elements
const showPopupButton = document.getElementById('showPopup');
const closePopupButton = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const container = document.querySelector('.container');

// Show the popup when the "Show Message" button is clicked
showPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';  // Display the popup
    overlay.style.display = 'block';  // Show the overlay
});

// Close the popup when the "Close" button is clicked
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';  // Hide the popup
    overlay.style.display = 'none';  // Hide the overlay
});

// Optional: Close the popup if the overlay is clicked
overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// Add border to the container when clicked
container.addEventListener('click', () => {
    container.style.border = '2px solid blue';  // Adding a 2px border on click (you can change the color)
});