export function expandMenu(btnClass, innerClass, spanBtnClass, openText) {

   let btn = document.querySelector('.' + btnClass);
   let inner = document.querySelector('.' + innerClass);
   let spanBtn = document.querySelector('.' + spanBtnClass);

   btn.addEventListener('click', function () {
      if (!inner.classList.contains(innerClass + '--open')) {
         inner.classList.remove(innerClass + '--close');
         inner.classList.add(innerClass + '--open');
         btn.classList.add('btn__close');
         spanBtn.textContent = 'Скрыть';
      } else {
         inner.classList.remove(innerClass + '--open');
         inner.classList.add(innerClass + '--close');
         btn.classList.remove('btn__close');
         spanBtn.textContent = 'Скрыть';
         spanBtn.textContent = openText;
      }
   })
}

expandMenu('service-menu__btn', 'service-menu__text-inner', 'service-menu__btn > span', 'Читать далее');
expandMenu('repair-brand__btn', 'repair-brand__menu-wrapper', 'repair-brand__btn > span', 'Показать все');
expandMenu('repair-types__btn', 'repair-types__menu-wrapper', 'repair-types__btn > span', 'Показать все');


export let menuBurgerOpen = document.querySelector('.menu-burger--open');
export let menuBurgerClose = document.querySelector('.menu-burger--close');
export let sidebarPage = document.querySelector('.sidebar-page');

menuBurgerOpen.addEventListener('click', function () {
   sidebarPage.classList.add('sidebar-page--open');
})

menuBurgerClose.addEventListener('click', function () {
   sidebarPage.classList.remove('sidebar-page--open');
})

