

const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');

function menuClick() {
    sidebar.classList.toggle('sidebar-closed');
}

// menuButton.addEventListener('click', () => {
//     sidebar.classList.toggle('sidebar-closed');
// });