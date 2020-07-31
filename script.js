$('body').ready(function() {
    let menu = function() {
        $('.menu').hide();
        $('.mens').click(function() {
            event.preventDefault();
            $('.menu').slideToggle();
            if($('.mens a').css('color') == 'rgb(51, 51, 51)'){
                $('.mens a').css('color', '#74dede')
            }else if(($('.mens a').css('color') == 'rgb(116, 222, 222)')){
                $('.mens a').css('color', 'rgb(51, 51, 51)')
            }   
        })
    }
    menu();

    let options = function() {
        $('.options input').focus(function() {
            $(this).css('outline-color', 'darkgreen')
        })
        $('.options input').blur(function() {
            $(this).css('outline-color', 'black')
        })
    }
    options();
    let lightbox = function() {
        $('.lightbox').hide();
        let i = 0;
        $('.secondSectionPic img').click(function() {
            $('.lightbox').stop().slideDown();
            let src = $(this).attr('src');
            $('.lightbox img').attr('src', src);
    
            let images = [
                "images/t-shirt.jpg",
                "images/next.jpg"
            ]
            
            $('.next').click(function() {
                i = (i + 1) % images.length;
                $('.lightbox img').fadeOut(function() {
                    $(this).attr('src', images[i]).fadeIn()
                })
            })
            $('.esc').click(function() {
                $('.lightbox').stop().slideUp()
            })
        });
    }
    lightbox();
    let enter = function() {
        $('.firstSection input').keypress(function(e) {
            if (e.which == 13) {
                let input = $('.firstSection input').val();
                input.trim();
                let options = $('.options a');
         
                for (let i = 0; i < options.length; i++) {
                    let oneItem = options[i];
                    $(oneItem).css('color', 'black');
                    let text = $(oneItem).text();
                    text.toLowerCase();
                    if (text == input.toLowerCase()) {
                        $(oneItem).css('color', 'green');
                        event.preventDefault;
                        console.log(oneItem);
                    }   
                }
                
            }
        });
    }
    enter();

    if ($('main').css('width') == '600px') {
        $('header').css('width', '380%');
        $('.firstSection').css('width', '380%');
    }
})