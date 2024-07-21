

// Simulating a database with local storage
const db = window.localStorage;

// Load profile data from local storage
function loadProfile() {
    document.getElementById('name').value = db.getItem('name') || '';
    document.getElementById('email').value = db.getItem('email') || '';
    document.getElementById('phone').value = db.getItem('phone') || '';
    document.getElementById('address').value = db.getItem('address') || '';
}

// Save profile data to local storage
function saveProfile(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    db.setItem('name', name);
    db.setItem('email', email);
    db.setItem('phone', phone);
    db.setItem('address', address);

    document.getElementById('message').textContent = "Profile updated successfully!";
    document.getElementById('message').classList.remove('text-red-500');
    document.getElementById('message').classList.add('text-green-500');
}

document.getElementById('profileForm').addEventListener('submit', saveProfile);

// Load profile data when the page loads
window.onload = loadProfile;

// Back button functionality
document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'dashboard.html';
}); 