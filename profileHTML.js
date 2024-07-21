





let pro = () =>{

    return  `
            <!-- Back Button -->
            <div class="max-w-2xl mx-auto py-4">
                <div id="backButton" class="flex items-center cursor-pointer p-2 hover:bg-gray-200 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span class="text-gray-700">Back</span>
                </div>
            </div>
    
            <!-- Profile Management Page -->
            <div class="max-w-2xl mx-auto py-10">
                <div class="bg-white p-8 rounded shadow-md">
                    <h1 class="text-3xl font-semibold mb-6">Profile Management</h1>
                    <form id="profileForm">
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700">Name:</label>
                            <input type="text" id="name" class="mt-1 p-2 w-full border rounded" required>
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700">Email:</label>
                            <input type="email" id="email" class="mt-1 p-2 w-full border rounded" required>
                        </div>
                        <div class="mb-4">
                            <label for="phone" class="block text-gray-700">Phone:</label>
                            <input type="tel" id="phone" class="mt-1 p-2 w-full border rounded" required>
                        </div>
                        <div class="mb-6">
                            <label for="address" class="block text-gray-700">Address:</label>
                            <input type="text" id="address" class="mt-1 p-2 w-full border rounded" required>
                        </div>
                        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update Profile</button>
                        <div id="message" class="mt-4"></div>
                    </form>
                </div>
            </div>`;
}
















let mainDiv = document.getElementById("mainDiv");

mainDiv.className="w-screen h-screen flex flex-col overflow-x-hidden";

mainDiv.innerHTML =
                    `
                    ${pro()}
                    `;