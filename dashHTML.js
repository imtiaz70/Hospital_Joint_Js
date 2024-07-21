

let inputFields = (name,id,inputType) =>{
    return  `
            <label for="${id}" class="block text-gray-700 font-semibold">${name}</label>
            <input type="${inputType}" id="${id}" class="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
            `
}

let ProfileManagement = () =>{

    return `
            <!-- Back Button -->
            <div class="max-w-2xl mx-auto py-4">
                <div id="backButton" class="flex items-center cursor-pointer p-2 hover:bg-gray-200 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span class="text-gray-700">Back</span>
                </div>
            </div>

            <div class=" min-h-screen w-full flex items-center justify-center">
                <div class="bg-white w-full max-w-4xl rounded-lg shadow-xl p-6 md:p-8">
                    <div class="flex flex-col md:flex-row items-center justify-between border-b pb-6 mb-6">
                        <div>
                            <h1 class="text-3xl md:text-4xl font-bold text-gray-800">Profile Management</h1>
                            <p class="text-gray-600 mt-1">Update your profile information</p>
                        </div>
                        <div class="flex items-center mt-6 md:mt-0">
                            <div class="relative">
                                <img src="https://via.placeholder.com/100" alt="Profile Picture" class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-500">
                                <label for="file-upload" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 cursor-pointer rounded-full">
                                    <input id="file-upload" type="file" class="hidden">
                                    Change
                                </label>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="mb-4">
                                ${inputFields("Name", "name" , "text")}
                            </div>
                            <div class="mb-4">
                                ${inputFields("Email", "email" , "email")}
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="mb-4">
                                ${inputFields("Password", "password" , "password")}
                            </div>
                            <div class="mb-4">
                                ${inputFields("Confirm Password", "confirm-password" , "password")}
                            </div>
                        </div>
                        <div class="mb-4">
                            <label for="bio" class="block text-gray-700 font-semibold">Bio</label>
                            <textarea id="bio" class="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <div class="flex flex-col md:flex-row items-center justify-between">
                            <button type="submit" class="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300 mb-4 md:mb-0">Update Profile</button>
                            <button type="button" class="text-red-500 hover:underline">Delete Account</button>
                        </div>
                    </form>
                </div>
            </div>`
}



let dashboard = () =>{
    return  `
            <!-- Main content -->
            <div class="flex-1 md:-ml-52">
                <header class="bg-gray-200 text-gray-800 p-4 flex gap-6 items-center md:z-50">
                    <button id="menu-button" onclick="menuClick()" class="md:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    <h1 class="text-2xl ">Dashboard</h1>
                </header>
                <main class="p-6">
                    <h2 class="text-3xl">Main Content</h2>
                    <p>Here is the main content of the page...</p>
                </main>
            </div>`
}




let sideNavDiv = () =>{

    return `<div id="sidebar" class="md:z-50 mt-16 md:mt-0 sidebar sidebar-closed w-64 bg-gray-800 text-white h-screen absolute md:relative z-10 md:-translate-x-52 md:hover:translate-x-0">
                <div class="p-6">
                    <a href="#" onclick="profileInj()" class="py-2.5 px-2 rounded transition duration-200 hover:bg-gray-700 flex gap-4">
                        <div class=" w-7 h-7 rounded-full bg-white"> 

                        </div>
                        
                        <div>
                            Profile
                        </div>
                    </a>
                    <nav class="mt-6">
                        <a href="#" onclick="dashboardInj()" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Home</a>
                        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">About</a>
                        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Services</a>
                        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Contact</a>
                        
                    </nav>
                </div>
            </div>`;
}


let dashboardInj = () =>{
    let mainDiv = document.getElementById("mainDiv");

    mainDiv.className="w-screen h-screen flex overflow-x-hidden";

    mainDiv.innerHTML =
                        `
                            ${sideNavDiv()}
                            ${dashboard()}
                        `;
}






let profileInj = () =>{
    let mainDiv = document.getElementById("mainDiv");

    mainDiv.className="w-screen h-screen flex overflow-x-hidden";

    mainDiv.innerHTML =
                        `
                            ${sideNavDiv()}
                            ${ProfileManagement()}
                        `;
}




let mainDiv = document.getElementById("mainDiv");

mainDiv.className="w-screen h-screen flex overflow-x-hidden";

mainDiv.innerHTML =
                    `
                        ${sideNavDiv()}
                        ${dashboard()}
                    `;