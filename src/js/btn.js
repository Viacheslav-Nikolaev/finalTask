// Кнопки показать все и читать далее
// export function expandMenu(btnClass, innerClass, spanBtnClass, openText) {

//    let btn = document.querySelector('.' + btnClass);
//    let inner = document.querySelector('.' + innerClass);
//    let spanBtn = document.querySelector('.' + spanBtnClass);

//    btn.addEventListener('click', function () {
//       if (!inner.classList.contains(innerClass + '--open')) {
//          inner.classList.remove(innerClass + '--close');
//          inner.classList.add(innerClass + '--open');
//          btn.classList.add('btn__close');
//          spanBtn.textContent = 'Скрыть';
//       } else {
//          inner.classList.remove(innerClass + '--open');
//          inner.classList.add(innerClass + '--close');
//          btn.classList.remove('btn__close');
//          spanBtn.textContent = 'Скрыть';
//          spanBtn.textContent = openText;
//       }
//    })
// }

// expandMenu('service-menu__btn', 'service-menu__text-inner', 'service-menu__btn > span', 'Читать далее');
// expandMenu('repair-brand__btn', 'repair-brand__menu-wrapper', 'repair-brand__btn > span', 'Показать все');
// expandMenu('repair-types__btn', 'repair-types__menu-wrapper', 'repair-types__btn > span', 'Показать все');
//-------------------------------------------------------------------------------------------------------------------------------------



// кнопка вызова бокового меню
export function menuBurger(btnClass, menuClass) {

   let btnOpen = document.querySelector('.' + btnClass + '--open');
   let btnClose = document.querySelector('.' + btnClass + '--close');

   let shadow = document.querySelector('.shadow');

   let main = document.querySelector('.main');
   let header = document.querySelector('.header');
   let menu = document.querySelector('.' + menuClass);

   btnOpen.addEventListener('click', function () {
      shadow.classList.add('shadow--open');
      header.classList.add('header--opacity');
      main.classList.add('main--opacity');
      menu.classList.add(menuClass + '--open');
   })

   btnClose.addEventListener('click', function () {
      shadow.classList.remove('shadow--open')
      header.classList.remove('header--opacity');
      main.classList.remove('main--opacity');
      menu.classList.add(menuClass + '--close');
      menu.classList.remove(menuClass + '--open');
   })
}

menuBurger('menu-burger', 'sidebar-page');
// -------------------------------------------------------------------------------------------------------


export function popUpMenu(idOpen, idClose, classMenu,) {
   let BtnOpen = document.querySelector('#' + idOpen);
   let BtnClose = document.querySelector('#' + idClose);

   let shadow = document.querySelector('.shadow');

   let sidebarPage = document.querySelector('.sidebar-page');
   let main = document.querySelector('.main');
   let header = document.querySelector('.header');
   let menu = document.querySelector('.' + classMenu);

   BtnOpen.addEventListener('click', function () {
      shadow.classList.add('shadow--open')
      sidebarPage.classList.add('sidebar-page--opacity')
      sidebarPage.classList.add('sidebar-page--close');
      sidebarPage.classList.remove('sidebar-page--open');
      header.classList.add('header--opacity');
      main.classList.add('main--opacity');
      menu.classList.add(classMenu + '--open');

   })

   BtnClose.addEventListener('click', function () {
      sidebarPage.classList.remove('sidebar-page--opacity');
      shadow.classList.remove('shadow--open');
      header.classList.remove('header--opacity');
      main.classList.remove('main--opacity');
      menu.classList.add(classMenu + '--close');
      menu.classList.remove(classMenu + '--open');
   })
}

popUpMenu('item-message__open-1', 'item-message__close', 'message')
popUpMenu('item-message__open-2', 'item-message__close', 'message')

popUpMenu('item-phone__open-1', 'item-phone__close', 'phone');
popUpMenu('item-phone__open-2', 'item-phone__close', 'phone');



