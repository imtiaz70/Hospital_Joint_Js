let inputForm = () => {
    return `
        <h2 class="text-2xl font-bold mb-6">Add/Update Doctor Information</h2>
        <form id="doctorForm">
            <input type="hidden" id="doctorId" />
            <div class="mb-4">
                <label for="name" class="block text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    class="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </div>
            <div class="mb-4">
                <label for="specialization" class="block text-gray-700">Specialization</label>
                <select id="specialization" class="w-full p-2 border border-gray-300 rounded mt-1">
                    <option value="">Select Specialization</option>
                </select>
            </div>
            <div class="mb-4">
                <label for="phone" class="block text-gray-700">Phone</label>
                <input
                    type="text"
                    id="phone"
                    class="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    class="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
                Save Doctor
            </button>
        </form>
        <div id="successMessage" class="mt-4 text-green-500 hidden">
            Doctor added/updated successfully!
        </div>
    `;
};

let db2;
const request2 = indexedDB.open('Role', 1);

request2.onupgradeneeded = function(event) {
    db2 = event.target.result;
    if (!db2.objectStoreNames.contains('roles')) {
        db2.createObjectStore('roles', { keyPath: 'id', autoIncrement: true });
    }
};

request2.onsuccess = function(event) {
    db2 = event.target.result;
    displayRoleInDoc();
};

request2.onerror = function(event) {
    console.error('Database error:', event.target.errorCode);
};

function displayRoleInDoc() {
    const transaction = db2.transaction(['roles'], 'readonly');
    const objectStore = transaction.objectStore('roles');
    const request = objectStore.getAll();

    console.log(request);

    request.onsuccess = function(event) {
        const roles = event.target.result;
        const selectElement = document.getElementById('specialization');
        roles.forEach(role => {
            const option = document.createElement('option');
            option.value = role.role;
            option.textContent = role.role;
            console.log("options = " , option);
            selectElement.appendChild(option);
        });
    };

    request.onerror = function(event) {
        console.error('Error fetching roles:', event.target.errorCode);
    };
}

document.addEventListener('DOMContentLoaded', function() {
    const mainDiv = document.getElementById("mainDiv");
    mainDiv.className = "max-w-lg mx-auto bg-white p-8 rounded shadow";
    mainDiv.innerHTML = inputForm();
    // console.log("before Function");
    displayRoleInDoc(); // Ensure roles are displayed after the form is added to the DOM
});

// FOR DISPLAYING //

// <div class="max-w-4xl mx-auto bg-white p-8 rounded shadow mt-8">
//     <h2 class="text-2xl font-bold mb-6">Doctors List</h2>
//     <table class="min-w-full bg-white">
//          <thead>
//              <tr>
//              <th class="py-2">Name</th>
//              <th class="py-2">Specialization</th>
//              <th class="py-2">Phone</th>
//              <th class="py-2">Email</th>
//              <th class="py-2">Actions</th>
//              </tr>
//          </thead>
//     <tbody id="doctorsList">
//         <!-- Doctors info will be appended here -->
//     </tbody>
//     </table>
// </div>
