const noti = document.querySelector('#notifications .notifications-count');
const notiM = document.querySelector('#messagens-notifications .notifications-count');

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    });
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        nPopUp(item);
    })

})