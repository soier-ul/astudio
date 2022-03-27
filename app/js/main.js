$(function () {

  $('.burger, .header__list a').on('click', function () {
    $('.header__list').toggleClass('header__list--active');
  });

  $(".header__list a, .logo--footer").on("click", function (e) {

    e.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 700);
  });

  // header hide
  let lastScroll = 0;
  const defaultOffset = 400;
  const header = document.querySelector('.header');

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains('header--hide');

  window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
      header.classList.add('header--hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
      header.classList.remove('header--hide');
    }

    lastScroll = scrollPosition();
  })
  // header hide

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });


});