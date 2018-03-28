var feedUnicorn = true;

feedButton.addEventListener('click', toggleButtonText);
updateImage();

function toggleButtonText() {
    feedUnicorn = !feedUnicorn;
    updateImage();
    updateButton()
}

function updateButton() {
    if (feedUnicorn) {
        feedButton.textContent = 'Feed the unicorn';
    } else {
        feedButton.textContent = 'Starve the unicorn';
    }
}

function updateImage() {
    if (feedUnicorn) {
        hungryUnicorn.style.display = 'block';
        happyUnicorn.style.display = 'none';
    } else {
        hungryUnicorn.style.display = 'none';
        happyUnicorn.style.display = 'block';
    }
}