$(function() {
    // id属性がbtnの要素がクリックされたら要素を追加
    $('.btn').on('click', function(){
        $('.text-box').val('クリックしました！');
    });
 });