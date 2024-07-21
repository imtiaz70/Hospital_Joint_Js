// import { admin_analytics_file } from "./Admin_data_analytics.js"

// admin_analytics()

let footerDesign = () => {
    return `  <!-- Footer Container -->
<div>
    <div>           
        <img src="./Assets/DNA.jpg" alt="" class=" opacity-5 absolute bg-cover -z-10">
    </div>
    <footer class=" p-4 shadow-lg  bg-cover footer-background ">
        <div class=" flex items-center justify-center min-h-screen pt-20 pb-10 ">
            <div class="container mx-auto p-4 flex flex-col items-center space-y-4    rounded-lg">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center">Download the <span class=" text-green-500 ">Medicalis</span> App today and get the best health services from us.</h1>
                <p class="text-sm md:text-base lg:text-lg text-gray-600">Get the best features on Google Play Store and App Store</p>
                <button class="px-8 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                    Download App
                </button>
            </div>
        </div>

        <div class="container mx-auto flex justify-between items-center  ">
            <div class="flex space-x-4 items-center">
                <img src="./Assets/logo.jpg" alt="Logo" class="h-8 rounded-full">
                <a href="#" class="text-green-500 font-bold">Medicalis</a>
            </div>
            <div class="flex space-x-4 items-center text-center" id='footerNav_div'>
               
            </div>
        </div>
    </footer>
</div>
`}
let footerNavItems = ['About us', 'How it works', 'Doctors', 'Contact us']



let body = document.querySelector('body')

let Footer = document.createElement('div')
Footer.innerHTML = footerDesign()

body.appendChild(Footer)

let footerNav_div = document.getElementById('footerNav_div')
// console.log(footerNav_div)
footerNavItems.forEach((v) => {
    footerNav_div.innerHTML += `<a href="#" class="text-gray-600 hover:text-green-500">${v}</a>`
})