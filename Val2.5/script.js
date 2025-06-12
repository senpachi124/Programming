let yesCount = 0; // Track "Yes" button clicks
let noCount = 0;  // Track "No" button clicks

// Create audio object for Yes sound effect
const yesSound = new Audio('yes-sound.mp3');

// URL for the angry kitten GIF
const kittenGifURL = "https://media.tenor.com/GlsoY3_9SckAAAAM/angry-kitten-angry-kitty.gif";

// Function to show the kitten GIFs
function showKittenGifs() {
    const totalKittens = 30; // Number of kittens to show
    const screenWidth = window.innerWidth; // Get the width of the screen
    const screenHeight = window.innerHeight; // Get the height of the screen

    for (let i = 0; i < totalKittens; i++) {
        // Create an image element for the kitten GIF
        const kittenGif = document.createElement('img');
        kittenGif.src = kittenGifURL;
        kittenGif.alt = "Angry Kitten";
        kittenGif.style.position = 'absolute';
        kittenGif.style.width = '100px'; // Set size of each GIF
        kittenGif.style.height = '100px';
        kittenGif.style.zIndex = '9999'; // Make sure the GIF is on top
        kittenGif.style.left = `${Math.random() * screenWidth}px`; // Random X position
        kittenGif.style.top = `${Math.random() * screenHeight}px`; // Random Y position

        // Append the GIF to the body of the document
        document.body.appendChild(kittenGif);

        // Remove the GIF after 2 seconds
        setTimeout(() => {
            kittenGif.remove();
        }, 2000); // Remove GIF after 2 seconds
    }
}

// Function to show the sticker
function showSticker() {
    const sticker = document.createElement('div');
    sticker.classList.add('sticker');
    document.getElementById('stickers').appendChild(sticker);

    // Remove sticker after animation ends
    setTimeout(() => {
        sticker.remove();
    }, 2000); // Sticker disappears after 2 seconds
}

window.addEventListener('load', function() {
    showSticker(); // Display sticker when the page loads
});

// "Yes" button click handler
document.getElementById('yesButton').addEventListener('click', function() {
    yesCount++;
    yesSound.play(); // Play the Yes sound

    if (yesCount === 1) {
        document.getElementById('responseMessage').textContent = "Once mo lang sasagutin blehhhhh!  😝";
        document.getElementById('responseMessage').className = 'response-message yes';
        document.getElementById('responseMessage').style.display = 'block';
        showSticker(); // Show a sticker when "Yes" is clicked
    } else if (yesCount === 2) {
        document.getElementById('responseMessage').textContent = "Yess! You're my Valentine! 😉";
        document.getElementById('responseMessage').className = 'response-message yes';
        document.getElementById('responseMessage').style.display = 'block';
        showSticker(); // Show a sticker when "Yes" is clicked
    } else if (yesCount === 3) {
        // Fireworks effect on the third click
        createFireworks();
        document.getElementById('responseMessage').textContent = "yihieeeeeeee 🎉";
        document.getElementById('responseMessage').className = 'response-message yes';
        document.getElementById('responseMessage').style.display = 'block';

        // Show the spinning cat GIF on the third "Yes" click
        document.getElementById('spinningCat').style.display = 'block';

        // Re-enable the Yes button after the third click
        setTimeout(() => {
            document.getElementById('yesButton').disabled = false;
        }, 2000); // Re-enable after 2 seconds
    } else {
        // For every click after the third, show a fun message and keep the spinning cat visible
        document.getElementById('responseMessage').textContent = "I got you love! 💖";
        document.getElementById('spinningCat').style.display = 'block';
    }
});

// "No" button click handler
document.getElementById('noButton').addEventListener('click', function() {
    noCount++;  // Increment the "No" click count

    if (noCount === 3) {
        // After 3 clicks, show angry kitten GIFs
        showKittenGifs();
    }

    if (noCount >= 33) {
        // Reset the counter after 33 clicks and show angry kittens again
        noCount = 0;
        showKittenGifs(); // Show kittens after 33 clicks
    }

    // Confirm the "No" decision
    const confirmation = confirm("wala 😡");

    if (confirmation) {
        // If confirmed, show a "No" response message
        document.getElementById('responseMessage').textContent = "wala wala wala💢";
        document.getElementById('responseMessage').className = 'response-message no';
        document.getElementById('responseMessage').style.display = 'block';
    } else {
        // If the user cancels the "No" decision, prompt again
        document.getElementById('responseMessage').textContent = "hmmmmmmmmp pinindot pa 🥺";
        document.getElementById('responseMessage').className = 'response-message no';
        document.getElementById('responseMessage').style.display = 'block';
    }
});

// Function to create fireworks (optional)
function createFireworks() {
    const fireworkCount = 30;
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

    for (let i = 0; i < fireworkCount; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        const color = colors[Math.floor(Math.random() * colors.length)];
        firework.classList.add(color);

        document.getElementById('fireworksContainer').appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000); // Remove firework after animation
    }
}
