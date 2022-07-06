
$(function(){
    $('.picture').fadeIn(3000);

});

//ロゴクリックでページトップへ
$('.logo').click(function(){
  $('html, body').animate({scrollTop:0},'fast');
});

// ハンバーガーメニュー
$('.burger').on('click',function(){
  $('.burger').toggleClass('close');
  $('.header ul').fadeToggle(500);
});
