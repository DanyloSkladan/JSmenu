const button = document.querySelector ('#btn-menu');
const menu = document.querySelector ('#slide');

button.addEventListener('click', () => {
    if (menu.classList.contains('disp') == true) {
        menu.classList.remove('disp');} 
    else {
        menu.classList.add('disp');
    }   

})



   
