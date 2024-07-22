import cardsdata from './firstfourcardscontentfile.js'

let four_body_cards_icon1 = cardsdata.four_body_cards_icons_array
let title_four_cards_1 = cardsdata.title_four_cards_array
let four_cards_details = cardsdata.four_cards_details_array
let button_text = cardsdata.button_details

console.log(four_body_cards_icon1);
console.log(title_four_cards_1);
console.log(four_cards_details);
console.log(button_text);

// Create a new paragraph element
const paragraph = document.createElement('p');

// Add the required classes to the paragraph element
paragraph.classList.add('text-blue-300', 'font-bold', 'text-4xl', 'mb-5', 'mt-5');

// Set the inner text of the paragraph element
paragraph.innerText = 'Our offered Medical Services for all ages';

// Append the paragraph element to the body
document.body.appendChild(paragraph);



let main = document.createElement('div')
main.setAttribute('id', 'parent')
main.className = 'w-[90vw] flex justify-center items-center flex-wrap p-5 bg-blue-200 rounded-2xl'
document.body.appendChild(main)
// let main=document.getElementById('parent')

main.style.backgroundColor = 'bg-blue-500'

for (let i = 0; i < four_body_cards_icon1.length; i++) {

    main.innerHTML += cardsmaker(four_body_cards_icon1[i], title_four_cards_1[i], four_cards_details, button_text[i])
}

function cardsmaker(icon, title, details, button_text) {
    return `<div class="w-[32vw] h-[30vh] flex bg-blue-200 flex-row justify-center items-center gap-5 mt-5 ml-5 rounded-xl p-2">
                <div class=" flex flex-col justify-center items-center gap-2">
                    <img src="${icon}" style="width: 140px; height: 140px"> 
                </div>
                <div class=" w-[24vw] bg-blue-300 flex flex-col justify-center items-start rounded-xl gap-2 p-3">
                    <div class="font-semibold"> ${title}</div>
                    <div class=""> ${details}</div>
                    <div class="bg-blue-100 p-2 rounded-xl text-blue-700 font-semibold hover:bg-blue-500 hover:text-white"> ${button_text}</div>
                </div>
            </div>`
}



// ----------------------Six cards Data--------------

import sixcards from './secondsixcardsdata.js'
let secondpart2000 = document.createElement('div')
secondpart2000.setAttribute('id', 'secondpart2000')
secondpart2000.className = 'w-[85vw] bg-gray-50 flex justify-center items-center flex-wrap p-5 gap-5'
document.body.appendChild(secondpart2000)
// let secondpart2000=document.getElementById('secondpart2000')
// console.log(secondpart2000);

let sixcards_icons = sixcards.six_cards_icon
let sixcardstitles = sixcards.six_cards_titles
let sixcards_link = sixcards.six_cards_link_text

console.log(sixcards_icons);
console.log(sixcardstitles);
console.log(sixcards_link);


let six_card_head = '2,00,000'
let six_cards_subheading = 'Our Departments we provide sit amete commodo dui convallis'

function six_cards_subheading_maker(six_cards_subheading) {
    return `<div class="w-[35vw] text-center text-2xl font-semibold text-[#464680] mt-5 mb-5"> ${six_cards_subheading}</div>`
}
function six_cards_heading_maker(six_card_head) {
    return `<div class="text-2xl font-semibold text-[#464680] mt-5 mb-5"> ${six_card_head}</div>`
}
function six_cards_maker(sixcards_icons, sixcardstitles, sixcards_link) {
    return `<div class="w-[20vw] h-[20vh] bg-[#eaf0fc] hover:bg-white flex  hover:shadow-xl flex-row justify-center items-center gap-5 mt-5 ml-5 p-3 rounded-xl relative">
    <div class="flex flex-col justify-center items-center gap-2 absolute mb-[18vh]">
        <div class="bg-[#c1d2fe] hover:bg-blue-500 hover:text-white text-2xl p-4 rounded-full">${sixcards_icons}</div> 
    </div>
    <div class=" w-[20vw] h-[20vh]  flex flex-col justify-center items-center rounded-xl gap-2 p-2">
        <div class="font-semibold mt-4"> ${sixcardstitles}</div>
        <a href="" class="underline text-blue-500">${sixcards_link}</a>
    </div>
</div>`
}



let cards = ""
for (let i = 0; i < sixcards_icons.length; i++) {

    cards += six_cards_maker(sixcards_icons[i], sixcardstitles[i], sixcards_link)

}



function FNmain() {
    return (
        `<div class=" flex flex-col justify-center items-center">
            ${six_cards_heading_maker(six_card_head)}
            ${six_cards_subheading_maker(six_cards_subheading)}
         
        </div >
        <div class="flex flex-row flex-wrap justify-center items-center">

            ${cards}

        </div>
        
        `
    )
}

secondpart2000.innerHTML += FNmain()


// -----------------Last Portion Doughnut chart----------------------

function createElement(tag, classNames, innerHTML = '', style = {}) {
    const element = document.createElement(tag);
    element.className = classNames;
    element.innerHTML = innerHTML;
    Object.assign(element.style, style);
    return element;
}

function createChart() {
    const chartContainer = createElement('div', 'chart-container shadow-lg p-8 rounded-lg');
    const canvas = createElement('canvas', '', '', { id: 'myChart' });

    canvas.style.width = "200px";
    canvas.style.height = "200px";

    const ctx = canvas.getContext('2d');
    const data = {
        datasets: [{
            data: [30, 42, 28],
            backgroundColor: ['#F56565', '#4299E1', '#ECC94B'],
            borderWidth: 0,
            cutout: '70%',
        }],
        labels: ['Recovery', 'Active', 'Death'],
    };
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
        },
    };

    new Chart(ctx, config);

    const percentage = createElement('div', 'absolute inset-0 flex items-center justify-center', '<div class="text-4xl font-bold">42%</div>');
    chartContainer.appendChild(createElement('h3', 'text-lg font-bold mb-4 text-center', 'Ratio Of Choose'));
    const canvasWrapper = createElement('div', 'w-48 h-48 mx-auto relative');
    canvasWrapper.appendChild(canvas);
    canvasWrapper.appendChild(percentage);
    chartContainer.appendChild(canvasWrapper);
    chartContainer.appendChild(createLegend());
    return chartContainer;
}

function createLegend() {
    const legend = createElement('div', 'flex justify-around mt-4');
    legend.innerHTML = `
        <div class="flex items-center"><span class="w-5 h-2 bg-pink-300 mr-2 rounded-full"></span>Recovery</div>
        <div class="flex items-center"><span class="w-5 h-2 bg-blue-500 mr-2 rounded-full"></span>Active</div>
        <div class="flex items-center"><span class="w-5 h-2 bg-yellow-300 mr-2 rounded-full"></span>Death</div>
    `;
    return legend;
}

function createCard(iconClass, title) {
    const card = createElement('div', 'card bg-blue-50 p-4 rounded-lg shadow-md transition cursor-pointer flex flex-row gap-3');
    const icon = createElement('div', 'bg-blue-300 w-14 h-14 flex justify-center items-center rounded-xl text-xl', `<i class="${iconClass}"></i>`);
    const content = createElement('div', '', `<h3 class="font-bold">${title}</h3><a href="#" class="text-blue-500">LEARN MORE</a>`);
    card.appendChild(icon);
    card.appendChild(content);
    return card;
}

function createSection() {
    const section = createElement('div', 'w-[85vw] bg-gray-50 rounded-lg shadow-lg flex flex-row items-center justify-between p-5 z-10');
    const leftCol = createElement('div', 'w-1/3 flex flex-col justify-center items-center');
    const rightCol = createElement('div', 'w-1/2');

    const chartWrapper = createElement('div', 'w-[20vw] relative ml-32');
    chartWrapper.appendChild(createChart());
    chartWrapper.appendChild(createElement('div', 'absolute inset-0 bg-blue-100 opacity-25 rounded-lg', '', { filter: 'blur(50px)' }));
    leftCol.appendChild(createElement('div', 'bg-blue-300 w-32 h-96 rounded-xl absolute mr-16'));
    leftCol.appendChild(chartWrapper);

    rightCol.innerHTML = `
        <h2 class="text-3xl font-bold mb-4">Why You Should Choose Our Health Service</h2>
        <p class="text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget ipsum ac metus porttitor luctus.</p>
    `;
    const grid = createElement('div', 'grid grid-cols-2 gap-4 mb-8');
    grid.appendChild(createCard('fa fa-solid fa-truck-medical', 'Advanced Care'));
    grid.appendChild(createCard('fa fa-solid fa-brain', 'Laboratory Test'));
    grid.appendChild(createCard('fa fa-solid fa-crutch', 'Psychotherapy'));
    grid.appendChild(createCard('fa fa-solid fa-hand-holding-medical', 'Dermatology'));
    rightCol.appendChild(grid);

    const buttonGroup = createElement('div', 'flex items-center');
    buttonGroup.innerHTML = `
        <button class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Make Appointment</button>
        <span class="mx-4 text-gray-500">OR</span>
        <a href="#" class="text-blue-500">Learn More</a>
    `;
    rightCol.appendChild(buttonGroup);

    section.appendChild(leftCol);
    section.appendChild(rightCol);
    console.log(section);

    document.body.appendChild(section);
}

// Call the function to create and display the section
createSection();