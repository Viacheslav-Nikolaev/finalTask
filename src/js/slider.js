export let swiper; 

export function swiperStart() {
   swiper = new Swiper('.slider', {
      slidesPerView: 'auto',
      centeredSlides: false,
      spaceBetween: 16,
      setWrapperSize: true,
      pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
         clickable: true,
      }
   });
}


export function changes(screen) {
   if (!screen.matches) {
      swiperStart();
   } else if (swiper !== undefined) {
      swiper.destroy();
   }
}


export let screen = window.matchMedia('(min-width: 768px)');
screen.addListener(changes);
changes(screen);

