$(function(){
    var du = 300,
        hlong = 500,
        long = 1000;
    
    var winW = $(window).width(),
        winH = $(window).height();
    
    function roomW() {
        if(winW>640) {
            $('.s2-box').find('li').each(function(i){
                $(this).on('mouseenter', function(){
                    $('.s2-box').find('li').stop().animate({width:'15%'},hlong)
                    $('.s2-box').find('.s2-r-in>*').stop().animate({opacity:0.4},hlong);
                    $(this).stop().animate({width:'70%'},hlong);
                    $(this).find('.sec-blc').stop().animate({opacity:0.2},hlong)
                    $(this).find('.s2-r-in>*').stop().animate({opacity:1},hlong)
                }).on('mouseleave', function(){
                    $('.s2-box').find('.sec-blc').stop().animate({opacity:0.4},hlong)
                    $('.s2-box').find('.s2-r-in>*').stop().animate({opacity:1},hlong);
                    $('.s2-box').find('li').eq(0).stop().animate({width:'33.33%'},hlong)
                    $('.s2-box').find('li').eq(1).stop().animate({width:'33.33%'},hlong)
                    $('.s2-box').find('li').eq(2).stop().animate({width:'33.34%'},hlong)
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
        
        roomW();
    })
})   
