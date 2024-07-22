

let loginForm = () =>{
    return `<div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
                <form id="loginForm">
                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                    <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                </form>
                <p id="message" class="mt-4 text-center text-red-500"></p>
                <!--  <div class="text-center mt-4">
                    <button id="showRegister" class="text-indigo-600 hover:underline">Don't have an account? Register</button>
                </div>  -->
            </div>`
}

// let registerForm = () =>{
//     return `<div class="hidden bg-white p-8 rounded-lg shadow-md w-full max-w-md" id="registerDiv">
//                 <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
//                 <form id="registerForm">
//                     <div class="mb-4">
//                         <label for="regEmail" class="block text-sm font-medium text-gray-700">Email</label>
//                         <input type="email" id="regEmail" name="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
//                     </div>
//                     <div class="mb-6">
//                         <label for="regPassword" class="block text-sm font-medium text-gray-700">Password</label>
//                         <input type="password" id="regPassword" name="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
//                     </div>
//                     <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
//                 </form>
//                 <p id="registerMessage" class="mt-4 text-center text-red-500"></p>
//                 <div class="text-center mt-4">
//                     <button id="showLogin" class="text-indigo-600 hover:underline">Already have an account? Login</button>
//                 </div>
//             </div>`
// }


let mainLoDiv = document.getElementById("mainLoginDiv");

mainLoDiv.innerHTML = `${loginForm()}`;

