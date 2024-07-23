







let inputForm = () =>{
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
                    <label for="specialization" class="block text-gray-700"
                    >Specialization</label
                    >
                    <input
                    type="text"
                    id="specialization"
                    class="w-full p-2 border border-gray-300 rounded mt-1"
                    />
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
            `
}













let mainDiv = document.getElementById("mainDiv");

mainDiv.className="max-w-lg mx-auto bg-white p-8 rounded shadow";

mainDiv.innerHTML =
                    `
                        
                        
                        ${inputForm()}
                        
                    `;





















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