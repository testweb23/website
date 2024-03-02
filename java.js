Const header = document.querySelector("header");

window.addEventlistever ("scroll", function(){
    header.classlist.toggle ("sticky", this.window.scrolly > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classlist.toggle('bx-x');
    menu.classlist.toggle('open');
}