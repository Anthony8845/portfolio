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


function hideContacts() {
    $('.header__contacts').slideUp();
}

$('.header__contacts-burger').click(function() {
    $('.header__contacts').slideToggle();
})


$(document).click(function(e) {
    if (!(
    ($(e.targer).parents('.header__conainer').length)
    || ($(e.target).hasClass('header__container'))
    || ($(e.target).hasClass('header__contacts-burger')))
    ) {
    
    hideContacts();
    }
})

// $(document).click(function() {
//     if ($('.header__contacts').css('display', 'block'))
//         $('.header__contacts').slideToggle();
// })

$('.present__order-btn').click(() => {
    $('.page__overlay_modal').fadeIn(300).css('display', 'flex')
})

$('.modal__close').click(() => {
    $('.page__overlay_modal').fadeOut(200)
})