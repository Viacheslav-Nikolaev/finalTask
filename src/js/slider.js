export let swiperOne;
export let swiperTwo;

export function swiperStartOne(swiperClass) {
   
   swiperOne = new Swiper(swiperClass, {
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

export function swiperDestroy(swiper) {
   swiper.destroy()
}



export function swiperStartTwo(swiperClass) {
   swiperTwo = new Swiper(swiperClass, {
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


export function changesOne(screen) {
   if (!screen.matches) {
      swiperStartOne('.repair-brand__menu');
   } else if (swiperOne !== undefined) {
      swiperDestroy(swiperOne);
   }
}

export function changesTwo(screen) {
   if (!screen.matches) {
      swiperStartTwo('.repair-types__menu');
   } else if (swiperOne !== undefined) {
      swiperDestroy(swiperTwo);
   }
}



export let screen = window.matchMedia('(min-width: 768px)');
screen.addListener(changesOne);
screen.addListener(changesTwo);
changesOne(screen);
changesTwo(screen);






