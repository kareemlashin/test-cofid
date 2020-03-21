$(document).ready(function() {
    $(".faq").accordion({
        questionClass: '.question',
        answerClass: '.answer',
        itemClass: '.item'
    });
    $("#splash-screen").fadeOut(1000);
    let heightWindow = $(window).height();
    let heightnav = $("nav").height();
    let heightnavSecond = $(".second-nav-top").height();
    let wind = heightnav - heightnavSecond
    $("header").height(heightWindow - wind);

    $(".item").hover(function() {
        $(this).addClass("shadow");
    }, function() {
        $(this).removeClass("shadow");
    })
    $(".second-nav-top").css({
        top: heightnav + 7
    })

    $(window).scroll(function() {
        let windowScroll = $(window).scrollTop();
        if (windowScroll > 10) {
            $("nav").addClass("shadow")

        } else {
            $("nav").removeClass("shadow");
        }
    })
    let dirPage = $("html").attr("dir");
    if (dirPage == "rtl") {
        $('.owl-carousel').owlCarousel({
            rtl: true,
            loop: true,
            margin: 50,
            nav: true,
            touchDrag: true,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
    } else {
        $('.owl-carousel').owlCarousel({
            rtl: false,
            loop: true,
            margin: 50,
            nav: true,
            touchDrag: true,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
    }
    $(".owl-prev").empty();
    $(".owl-prev").append("<i class='fas fa-arrow-left '></i>")
    $(".owl-next").empty();
    $(".owl-next").append("<i class='fas fa-arrow-right'></i>")
    $(".owl-next").addClass("shadow");
    $(".owl-prev").addClass("shadow");
    $("#begin").click(function() {
        $(".welcome-test").fadeOut();
        $(".question-container ,  #q1").fadeIn();
    });
    let coinsYes = 0;
    let coinsNo = 0;
    let widthBar = 10;
    let qNum = 1;
    $(".yes").click(function() {
        if (qNum < 11) {
            qNum++;
            let bar = widthBar + 10;
            widthBar = bar;
            $(".dunamicNum").text(qNum);
            $(".barActive").width(bar);
            coinsYes++;
            $(".quesion").attr("id");
            $(".quesion").fadeOut(0);
            $('.question-container ,  #q' + qNum + '').fadeIn();
        } else {
            coinsYes++;
            $(".quesion").attr("id");
            $(".quesion , #bars-config").fadeOut(0);
            $("#result").fadeIn();
        }
    });

    $(".no").click(function() {
        if (qNum < 11) {
            qNum++;
            coinsNo++;
            let bar = widthBar + 10;
            widthBar = bar;
            $(".dunamicNum").text(qNum);
            $(".barActive").width(bar);
            coinsYes++;
            $(".quesion").attr("id");
            $(".quesion").fadeOut(0);
            $('.question-container ,  #q' + qNum + '').fadeIn();
        } else {
            coinsNo++;
            $(".quesion").attr("id");
            $(".quesion , #bars-config").fadeOut(0);
            $("#result").fadeIn();


        }
    });
    $("#Previous").click(function() {
        if (qNum > 1) {
            qNum--;
            $(".quesion").fadeOut(0);
            $('.question-container ,  #q' + qNum + '').fadeIn();
            let bar = widthBar - 10;
            widthBar = bar;
            $(".dunamicNum").text(qNum);
            $(".barActive").width(bar);
        }
    })
})