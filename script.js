document.querySelector('.signin').addEventListener('click', function() {
    // Ambil nilai dari field form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const terms = document.getElementById('terms').checked;

    // Validasi sederhana
    if (!username || !email || !phone || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    const phoneRegex = /^\d{12}$/;
    if (!phoneRegex.test(phone)) {
        alert('Phone number must be exactly 12 digits.');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (!terms) {
        alert('You must agree to the terms and conditions.');
        return;
    }

    window.location.href = 'home.html';
});

function moveSlide(direction, galleryId) {
    const gallery = document.getElementById(galleryId);
    const galleryItems = gallery.querySelectorAll('.gallery-item');
    const totalItems = galleryItems.length;
    
    let currentIndex = 0;
    for (let i = 0; i < totalItems; i++) {
        if (galleryItems[i].classList.contains('active')) {
            currentIndex = i;
            break;
        }
    }

    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) {
        nextIndex = totalItems - 1;
    } else if (nextIndex >= totalItems) {
        nextIndex = 0;
    }

    galleryItems[currentIndex].classList.remove('active');
    galleryItems[nextIndex].classList.add('active');
}
