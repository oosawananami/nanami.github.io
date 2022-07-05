
$(function(){
    $('.picture').fadeIn(3000);

});


// ハンバーガーメニュー
$('.burger').on('click',function(){
  $('.burger').toggleClass('close');
  $('.header ul').fadeToggle(500);
});
