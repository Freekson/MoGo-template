$(function() {

    var header = $('header');
    var height = $('#header').innerHeight()-40; // Переменная с высотой header
    var scrollOffset = $(window).scrollTop(); //Сохраняем текущий скрол страницы

    checkScroll(scrollOffset); //вызов функция

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
        
    });

    function checkScroll(scrollOffset) { //функция

        if(scrollOffset > height){ //проверка высоты скрола
            header.addClass("fixed");
        }
        if(scrollOffset < height){
            header.removeClass("fixed");

        }
    }

    $("[data-scroll]").on("click", function(event){
		event.preventDefault();

		var $this = $(this),
				blockId = $this.data("scroll"),
				blockOffset = $(blockId).offset().top;

		$("a").removeClass("active");
		$this.addClass("active")

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});

    $("#nav-toogle").on("click", function(event){
		event.preventDefault();

		$(this).toggleClass("active");
		$("nav").toggleClass("active");
	});

    $("[data-collapse]").on("click", function(event){
		event.preventDefault();

		var $this = $(this),
				blockId = $this.data("collapse");
			
		$(blockId).slideToggle();
		$this.attr('id', ($(this).attr('id') === 'active' ? 'non-active' : 'active'));
	});
});
