$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></img></button>',
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 991 ,
              settings: {
                arrows: false,
                variableWidth: true,
                centerMode: true
              }
            },
            {
              breakpoint: 767, 
              settings: {
                arrows: false,
                variableWidth: true,
                centerMode: true
              }
            }
        ]
      });
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    function removeContainer (x){
      var containerClass = document.getElementById("containerRemove");
      if (x.matches) {
        containerClass.classList.remove("container");
      }
    }

    var media = window.matchMedia("(max-width: 991px)");
    removeContainer(media);

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // modal

    $('[data-model="consultation"]').on('click',function () {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
      $(this).on('click', function () {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    })
  });