// search-box
const search = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-dropdown');
const showTimesIcon = document.querySelector('.add-icon');
const menu = document.querySelector('.off-canvas-menu');
const listDropdown = document.querySelector('.off-canvas-dropdown');
const menuItems = document.querySelectorAll('.list-item');
const menuBar = document.querySelector('.menu-bar');
const searchFiter = document.querySelector(".off-canvas")
const menuClose = document.querySelector(".off-canvas-close")
const modalClose = document.querySelector(".btn-close");
const modalPlayer = document.querySelector("#player");
const modalClick = document.querySelector(".modal");


/*---------------- search box ----------------*/

search.addEventListener('click', () => {
    searchBox.classList.toggle('show');
    showTimesIcon.classList.toggle('show');
})

/*---------------- menu ----------------*/
for(let i= 0; i < menu.children.length; i++){
    const newdiv = document.createElement("div");
    const element = menu.children[i]
    const lists = element.children[0];
    const anglebuttom =  lists.appendChild(newdiv);
    anglebuttom.innerHTML = `<button class="off-canvas-dropdown-toggle icon-element icon-element-xs" type="button"><i class="las la-angle-down upbtn"></i></button>`
}
menuItems.forEach(function(questioned){
    const btns = questioned.querySelector('.off-canvas-dropdown-toggle');
    console.log(btns);
    
    btns.addEventListener('click', function(){
        menuItems.forEach(function(item){
           if(item !== questioned){
               item.classList.remove('active');
           }
       });
       questioned.classList.toggle('active')
    })
})

/*---------------- menuBar ----------------*/
menuBar.addEventListener('click', () => {
    searchFiter.classList.toggle('active')
})
menuClose.addEventListener('click', () => {
    searchFiter.classList.remove('active')
})
/*---------------- video Palyer ----------------*/
modalClose.addEventListener("click", function () {
        modalPlayer.pause();
}, false);
modalClick.addEventListener("click", function () {
    modalPlayer.pause();
}, false);


