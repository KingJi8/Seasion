$(function(){
    var du = 300,
        hlong = 500,
        long = 1000;
    
    var winW = $(window).width(),
        winH = $(window).height();
    $('.wrap>section').height(winH);
    
    function roomW() {
        if(winW>640) {
            $('.s2-box').find('li').each(function(i){
                $(this).on('mouseenter', function(){
                    $('.s2-box').find('li').stop().css({width:'15%', transition:'0.5s'});
                    $('.s2-box').find('.s2-r-in>*').css({opacity:0.4, transition:'0.5s'});
                    $(this).css({width:'70%', transition:'0.5s'});
                    $(this).find('.sec-blc').css({opacity:0.2, transition:'0.5s'});
                    $(this).find('.s2-r-in>*').css({opacity:1, transition:'0.5s'})
                }).on('mouseleave', function(){
                    $('.s2-box').find('.sec-blc').css({opacity:0.4, transition:'0.5s'});
                    $('.s2-box').find('.s2-r-in>*').css({opacity:1, transition:'0.5s'});
                    $('.s2-box').find('li').eq(0).css({width:'33.33%', transition:'0.5s'});
                    $('.s2-box').find('li').eq(1).css({width:'33.33%', transition:'0.5s'});
                    $('.s2-box').find('li').eq(2).css({width:'33.34%', transition:'0.5s'});
                })
            })
        }
    }
    roomW();
    $('.s2-box a').click(function(){
        return false;
    })
    
    function todaycheck() {
        var today = new Date();
        var nowMonth = today.getMonth(),
            nowDate = today.getDate(),
            nowYear = String(today.getFullYear());
        var todayMonth = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        
        $('.s0-cininput').attr('placeholder', nowDate+' '+todayMonth[nowMonth]+' '+nowYear)
        $('.s0-coutinput').attr('placeholder', (nowDate+1)+' '+todayMonth[nowMonth]+' '+nowYear)
    }
    todaycheck();
    
    function menutoggle(){
        $('.gnav>button').on('click',function(){
            $('.gnb').toggleClass('active');
        })
    }
    menutoggle();
    
    function wholeScroll(){
        var indexN = 0;
        $('.wrap>section').each(function(index){
            $(this).on('DOMMouseScroll mousewheel', function(e){
                var moveTop = null;
                if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
                    /*console.log('휠을 올렸다');*/
                    if($(this).prev() != undefined){
                        moveTop = $(this).prev().offset().top;
                        indexN = index-1;
                    }else{
                        moveTop = $(this).offset().top;
                    };
                }else{
                    /*console.log('휠을 내렸다');*/
                    if($(this).next() != undefined) {
                        moveTop = $(this).next().offset().top;
                        indexN = index+1;
                    }else{
                        moveTop = $(this).offset().top;
                    };
                };

                $('html,body').stop().animate({scrollTop:moveTop},500)
                $(window).resize(function(){
                    /*윈도우창크기 변경에 따라 scrollTop값도 바꿔주십시다*/
                    winH = $(window).height();
                    $('html,body').stop().animate({scrollTop:winH*indexN})
                })
            })
        })
    }
    wholeScroll();
    
    
    $(window).resize(function(){
        winW = $(window).width();
        winH = $(window).height();
        $('.wrap>section').height(winH);
        
        roomW();
    })
})   
