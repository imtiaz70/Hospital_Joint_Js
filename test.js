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

    document.body.appendChild(section);
}

// Call the function to create and display the section
createSection();