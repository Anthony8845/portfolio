new Swiper('.swiper', {
    navigation: {
        nextEl: '.portfolio__arrow-right',
        prevEl: '.portfolio__arrow-left',
        disabledClass: 'portfolio__arrow-disable',        
    },
    breakpoints: {
        480: {
            grid: {
                fill: 'row',
                rows: 2
            }
          },
        768: {
            slidesPerView: 2,
            grid: {
                fill: 'row',
                rows: 2
            },
          },
        
    },
})