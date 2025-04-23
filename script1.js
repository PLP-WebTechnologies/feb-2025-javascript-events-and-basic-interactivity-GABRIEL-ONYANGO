// Event Handling: Button Click
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle Description';
toggleBtn.style.margin = '20px';
document.body.appendChild(toggleBtn);

const description = document.createElement('p');
description.textContent = 'Computer Science is the study of computation and information.';

let isShown = false;

toggleBtn.addEventListener('click', () => {
    if (isShown) {
        document.body.removeChild(description);
        isShown = false;
    } else {
        document.body.appendChild(description);
        isShown = true;
    }
});

// Hover effect on the AI Image
const aiImage = document.getElementById('ai-image');
aiImage.addEventListener('mouseover', () => {
    aiImage.style.opacity = 0.7;
});
aiImage.addEventListener('mouseout', () => {
    aiImage.style.opacity = 1;
});

// Keypress Detection
document.addEventListener('keypress', (e) => {
    console.log(`You pressed the "${e.key}" key`);
});

// Double Click or Long Press (Bonus)
aiImage.addEventListener('dblclick', () => {
    alert('Double-click detected on the image!');
});

// Form Validation (Email, Password)
const form = document.getElementById('registration-form');
form.addEventListener('submit', (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }

    if (password.length < 8) {
        e.preventDefault();
        alert('Password must be at least 8 characters long.');
    }
});

// Real-time Password Validation Feedback
const passwordInput = document.getElementById('password');
const passwordFeedback = document.createElement('div');
passwordFeedback.style.color = 'red';
document.body.appendChild(passwordFeedback);

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
        passwordFeedback.textContent = 'Password is too short (min. 8 characters)';
    } else {
        passwordFeedback.textContent = '';
    }
});
