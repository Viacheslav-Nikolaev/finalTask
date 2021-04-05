let sidebarList = document.querySelectorAll('.sidebar-menu__list-btn');
let serviceMenuTitle = document.querySelector('.service-menu__title');


let addSidebarBtnHandler = function (sidebarListItem) {
   sidebarListItem.addEventListener('click', function () {
      for (let j = 0; j < sidebarList.length; j++) {
         if(sidebarList[j].classList.contains('sidebar-menu__list-btn--active')) {
            sidebarList[j].classList.remove('sidebar-menu__list-btn--active')
         }
      }
      
      serviceMenuTitle.textContent = sidebarListItem.textContent
      sidebarListItem.classList.add('sidebar-menu__list-btn--active')
   })
}

for (let i = 0; i < sidebarList.length; i++) {
   addSidebarBtnHandler(sidebarList[i]);
}