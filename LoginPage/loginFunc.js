// IndexedDB setup
const dbName = 'UserDatabase';
let db;

const request = indexedDB.open(dbName, 1);

request.onerror = function(event) {
    console.error("Database error: ", event.target.errorCode);
};

request.onsuccess = function(event) {
    db = event.target.result;
};

request.onupgradeneeded = function(event) {
    db = event.target.result;
    const objectStore = db.createObjectStore('users', { keyPath: 'email' });
    objectStore.createIndex('email', 'email', { unique: true });
};


// Login user
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const transaction = db.transaction(['users']);
    const objectStore = transaction.objectStore('users');
    const request = objectStore.get(email);

    request.onsuccess = function() {
        if (request.result && request.result.password === password) {
            // document.getElementById('message').textContent = "Login successful!";
            // document.getElementById('message').classList.remove('text-red-500');
            // document.getElementById('message').classList.add('text-green-500');

            // Redirect to another HTML file
            window.location.href = 'dashboard.html'; // Change 'dashboard.html' to the path of your desired HTML file
        } else {
            document.getElementById('message').textContent = "Invalid email or password.";
        }
    };

    request.onerror = function() {
        document.getElementById('message').textContent = "Error: Unable to login.";
    };
});

// // Register new user
// document.getElementById('registerForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('regEmail').value;
//     const password = document.getElementById('regPassword').value;

//     const transaction = db.transaction(['users'], 'readwrite');
//     const objectStore = transaction.objectStore('users');
//     const request = objectStore.add({ email, password });

//     request.onsuccess = function() {
//         document.getElementById('registerMessage').textContent = "Registration successful!";
//         document.getElementById('registerMessage').classList.remove('text-red-500');
//         document.getElementById('registerMessage').classList.add('text-green-500');
//     };

//     request.onerror = function() {
//         document.getElementById('registerMessage').textContent = "Error: Email already registered.";
//     };
// });

// // Toggle between login and register forms
// document.getElementById('showRegister').addEventListener('click', function() {
//     document.getElementById('loginForm').parentElement.classList.add('hidden');
//     document.getElementById('registerDiv').classList.remove('hidden');
// });

// document.getElementById('showLogin').addEventListener('click', function() {
//     document.getElementById('registerDiv').classList.add('hidden');
//     document.getElementById('loginForm').parentElement.classList.remove('hidden');
// });