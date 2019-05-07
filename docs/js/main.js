$(document).ready(function() {
  // Скрипт для показа и скрытия выпадающего меню на смартфонах
  // Создаем переменые для кнопки и для меню
  var pull = $('#navigation-toggle');

  var menu = $('.navigation ul');
  // Описываем событие при нажатии на кнопку
  $(pull).on("click", function(e){
      // Отменяем стандартное поведение ссылки в браузере
      e.preventDefault();
      // Открываем/Скрываем меню
      menu.slideToggle();
      // Добавляем модификатор --active
      $(this).toggleClass('navigation__toggle-button--active');
  });


  // При изменении размера окна, в большую сторону, если меню было скрыто, показываем его
  // И у кнопки убираем модификатор --active
  $(window).resize(function(){
      var w = $(window).width();
      if(w > 992) {
          menu.removeAttr('style');
          pull.removeClass('navigation__toggle-button--active');
      } else {

      }
  });

  // Скрываем меню при клике на него на смартфоне и планцете
  // По клику на ссылку в меню запускаем ф-ю fnstart();
  $('nav.navigation a').on("click", function(){
    fnstart();
  });

  // В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
  // тогда убираем класс модификатор --active у кнопки pull
  // и сворачиваем/скрываем меню 
  function fnstart(){ 
    if ( $("#navigation-toggle").hasClass("navigation__toggle-button--active")  ) {
        pull.toggleClass('navigation__toggle-button--active');
      menu.slideToggle();
    }
  };

  // Карусель - слайдер
  $("#owl-carousel").owlCarousel({
    singleItem: true,
    navigation: true,
    theme: "top-slider-theme",
    navigationText : ["",""],
    slideSpeed: 600
  });


  //slide2id - плавная прокрутка по ссылкам внутри страницы
  $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
      highlightSelector:"nav a"
  });

})



// вызов библиотеки wow.js
// new WOW().init();

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();