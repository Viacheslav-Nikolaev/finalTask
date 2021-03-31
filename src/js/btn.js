export let btn = document.querySelector('.service-menu__btn');
export let inner = document.querySelector('.service-menu__text-inner');
export let spanBtn = document.querySelector('.service-menu__btn > span');


btn.addEventListener('click', function () {
   if (!inner.classList.contains('service-menu__text-inner--open')) {
      inner.classList.remove('service-menu__text-inner--close');
      inner.classList.add('service-menu__text-inner--open');
      btn.classList.add('btn__close');
      spanBtn.textContent = 'Скрыть';
   } else {
      inner.classList.remove('service-menu__text-inner--open');
      inner.classList.add('service-menu__text-inner--close');
      btn.classList.remove('btn__close');
      spanBtn.textContent = 'Скрыть';
      spanBtn.textContent = 'Читать далее';
   }
})







// let btn = document.querySelector('.brands-btn');
// let wrapper = document.querySelector('.brand-menu__wrapper');
// let spanBtn = document.querySelector('.brands-btn > span');

// btn.addEventListener('click', function () {
//    if (!wrapper.classList.contains('brand-menu__wrapper--open')) {
//       wrapper.classList.remove('brand-menu__wrapper--close');
//       wrapper.classList.add('brand-menu__wrapper--open');
//       btn.classList.add('brands-btn__close');
//       spanBtn.textContent = 'Скрыть';
//    } else {
//       wrapper.classList.remove('brand-menu__wrapper--open');
//       wrapper.classList.add('brand-menu__wrapper--close');
//       btn.classList.remove('brands-btn__close')
//       spanBtn.textContent = 'Показать все';
//    }

// });