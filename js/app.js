$(function() {

    var header = $('header');
    var height = $('#header').innerHeight(); // Переменная с высотой header
    var scrollOffset = $(window).scrollTop(); //Сохраняем текущий скрол страницы

    checkScroll(scrollOffset); //вызов функция

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
        
    });

    function checkScroll(scrollOffset) { //функция
        if(scrollOffset >= height){ //проверка высоты скрола
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }
});