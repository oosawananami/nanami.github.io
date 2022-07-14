
$(function(){
    $('.picture').fadeIn(3000);

    //ロゴクリックでページトップへ
    $('.logo').click(function(){
      $('html, body').animate({scrollTop:0},'fast');
    });

    // ハンバーガーメニュー
    $('.burger').on('click',function(){
      $('.burger').toggleClass('close');
      $('.header ul').fadeToggle(500);
    });


    //スライダー
    $('.slide').slick({
      mobileFirst:true,
      autoplay:true,//自動スライド
      autospeed:500,
      infinite:true,//スライドループ
      slidesToShow:1,
      slidesToScroll:1,
      centerMode:true,
      variablewidth:true,
      arrows: false, //previousのボタン非表示
      responsive:[{
        breakpoint:500, //画面サイズが500以上の場合はSlick表示じゃなくする
        settings:'unslick'
      }]
    });
    //リサイズした時に実行
    $(window).on('resize orientationchange', function() {
　　    $('.slide').slick('resize');
    });
});
