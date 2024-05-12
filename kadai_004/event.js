// 読込途中に実行
$(window).on('load', function() {
    console.log('loadイベントが発生しました');
})

// HTML要素を全て読み込んだ後から実行
$(function() {
    // ボタンがクリックされた場合
    $(window).on('scroll', function(){
        console.log('scrollイベントが発生しました');
    });
});
