document.addEventListener('DOMContentLoaded', () => {
    let db;
    const request = indexedDB.open('DoctorsDB', 1);

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        const objectStore = db.createObjectStore('doctors', { keyPath: 'id', autoIncrement: true });
        objectStore.createIndex('name', 'name', { unique: false });
        objectStore.createIndex('specialization', 'specialization', { unique: false });
        objectStore.createIndex('phone', 'phone', { unique: false });
        objectStore.createIndex('email', 'email', { unique: false });
        objectStore.createIndex('status', 'inActive');
    };

    request.onsuccess = function(event) {
        db = event.target.result;
    //     displayDoctors();
    };

    request.onerror = function(event) {
        console.error('Database error:', event.target.errorCode);
    };


    function saveDoctor(event) {

        console.log("sdfg");
        event.preventDefault();

        const id = document.getElementById('doctorId').value;
        const name = document.getElementById('name').value;
        const specialization = document.getElementById('specialization').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const status = "inActive"

        const transaction = db.transaction(['doctors'], 'readwrite');
        const objectStore = transaction.objectStore('doctors');
        
        if (id) {
            const request = objectStore.put({ id: parseInt(id), name, specialization, phone, email, status });
            request.onsuccess = function() {
                document.getElementById('successMessage').classList.remove('hidden');
                setTimeout(() => {
                document.getElementById('successMessage').classList.add('hidden');
                }, 3000);
                document.getElementById('doctorForm').reset();
                // displayDoctors();
            };
        } else {
            const request = objectStore.add({ name, specialization, phone, email, status });
            request.onsuccess = function() {
                document.getElementById('successMessage').classList.remove('hidden');
                setTimeout(() => {
                document.getElementById('successMessage').classList.add('hidden');
                }, 3000);
                document.getElementById('doctorForm').reset();
                // displayDoctors();
            };
        }

        request.onerror = function(event) {
            console.error('Save doctor error:', event.target.errorCode);
        };
    }

    let main = document.getElementById('doctorForm')
    main.addEventListener('submit', saveDoctor);

    // function displayDoctors() {
    //     const transaction = db.transaction(['doctors'], 'readonly');
    //     const objectStore = transaction.objectStore('doctors');
    //     const request = objectStore.getAll();

    //     request.onsuccess = function(event) {
    //     const doctors = event.target.result;
    //     const doctorsList = document.getElementById('doctorsList');
    //     doctorsList.innerHTML = '';

    //     doctors.forEach(doctor => {
    //         const row = document.createElement('tr');
    //         row.innerHTML = `
    //         <td class="py-2 border">${doctor.name}</td>
    //         <td class="py-2 border">${doctor.specialization}</td>
    //         <td class="py-2 border">${doctor.phone}</td>
    //         <td class="py-2 border">${doctor.email}</td>
    //         <td class="py-2 border">
    //             <button class="bg-yellow-500 text-white px-2 py-1 rounded" onclick="editDoctor(${doctor.id})">Edit</button>
    //             <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="deleteDoctor(${doctor.id})">Delete</button>
    //         </td>
    //         `;
    //         doctorsList.appendChild(row);
    //     });
    //     };

    //     request.onerror = function(event) {
    //     console.error('Display doctors error:', event.target.errorCode);
    //     };
    // }

    // window.editDoctor = function(id) {
    //     const transaction = db.transaction(['doctors'], 'readonly');
    //     const objectStore = transaction.objectStore('doctors');
    //     const request = objectStore.get(id);

    //     request.onsuccess = function(event) {
    //         const doctor = event.target.result;
    //         document.getElementById('doctorId').value = doctor.id;
    //         document.getElementById('name').value = doctor.name;
    //         document.getElementById('specialization').value = doctor.specialization;
    //         document.getElementById('phone').value = doctor.phone;
    //         document.getElementById('email').value = doctor.email;
    //     };

    //     request.onerror = function(event) {
    //         console.error('Edit doctor error:', event.target.errorCode);
    //     };
    // };

    // window.deleteDoctor = function(id) {
    //     const transaction = db.transaction(['doctors'], 'readwrite');
    //     const objectStore = transaction.objectStore('doctors');
    //     const request = objectStore.delete(id);

    //     // request.onsuccess = function() {
    //     //     displayDoctors();
    //     // };

    //     request.onerror = function(event) {
    //     console.error('Delete doctor error:', event.target.errorCode);
    //     };
    // };
    
});