document.addEventListener('DOMContentLoaded', function() {
    // 슬라이드 : 페이드 효과
    // let currentIndex = 0;
    // $(".slider").hide().first().show();
    //
    // setInterval(function(){
    //     let nextIndex = (currentIndex+1) % 3;
    //
    //     $(".slider").eq(currentIndex).fadeOut(1200);
    //     $(".slider").eq(nextIndex).fadeIn(1200);
    //
    //     currentIndex = nextIndex;
    // }, 3000);


    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });

    $(function(){
        $(".nav > ul > li").mouseover(function(){
            $(".nav > ul > li > .submenu").stop().fadeIn();
            $("#main").addClass("on");
        });
        $(".nav > ul > li").mouseout(function(){
            $(".nav > ul > li > .submenu").stop().fadeOut();
            $("#main").removeClass("on");
        });
    });

    // 탭 메뉴
    const tabBtn = $(".info-menu > a");     //탭 버튼 설정
    const tabCont = $(".info-cont > div");  //탭 콘텐츠 설정
    tabCont.hide().eq(0).show();        //탭 콘텐츠를 숨기고 첫 번째 콘텐츠만 보여줌

    tabBtn.on("click", function(){      //버튼을 클릭하면
        const index = $(this).index();      //클릭한 버튼의 번호를 저장

        $(this).addClass("active").siblings().removeClass("active");    //클릭한 버튼에 클래스를 추가하고 나머지는 제거함
        tabCont.eq(index).show().siblings().hide();             //클릭한 버튼 순서에 맞는 콘텐츠에 클래스를 추가하고 나머지는 숨김
    });

    // 팝업
    $(".popup-btn").click(function(){   //팝업 버튼 클릭
        $(".popup-view").show();    //팝업 나타나기
    });
    $(".popup-close").click(function(){     //팝업 닫기 버튼 클릭
        $(".popup-view").hide ();   //팝업 숨기기
    });
});
