$(function () { // 通常の記述はここに書いていく
    /*
    ハンバーガーメニュー 
    ———————————*/
    $('.hamburger,.header__item > a,.overlay').on('click', function () {
        $('body, .header__nav, .hamburger, .overlay').toggleClass('active');

        let imgHeight = $('.mainVisual').outerHeight();
        let scroll = $(window).scrollTop();

        if ($('body, .header__nav, .hamburger').hasClass('active')) { // 開く時
            console.log("active");

            if (scroll > imgHeight - 50) {
                $('.hamburger').removeClass('scroll'); // 開く時に黒かったら白にする
                console.log("test");
            }
        } else { // 閉じる時
            if (scroll > imgHeight - 50) {
                $('.hamburger').addClass('scroll'); // 黒にする
        }};
    });

    /*
    スムーススクロール
    ———————————*/
    $('a[href^="#"]').on('click', function () { // aタグのhref属性に # から始まるリンクが設定してある要素を、クリックしたら処理実行
        // スクロールの速度
        let speed = 400; // ミリ秒

        // クリックしたaタグのhref属性（#、#about等）を取得し、変数に格納
        let href = $(this).attr("href");
        // thisとする事で処理を切り分けている、thisにはクリックしたhtml要素が格納されている。
        // ちなみに$()で囲まないと生のオブジェクトとなりattrは使えないから$()でjqueryのオブジェクトにしている。

        // 上で取得した値が#か空白だったら'html'を(TOP用)、それ以外だったら先ほど取得したhref属性の値を変数に格納。つまりtargetにはhtmlか#about等が入る。
        let target = $(href == "#" || href == "" ? 'html' : href); // 「条件式 ? Trueの処理 : False(それ以外)の処理」
        // $()で取得した移動先の要素のオブジェクトを生成
        // console.log($(href));
        // console.log(target);

        // 移動先を座標の数値で取得
        let position = target.offset().top;

        // スムーススクロール
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing'); //scrollTopはメソッドでその引数にpostionを指定
        // プロパティ, duratioin, easing

        return false; // この記述が無くても動く 
    });
});


/*
スクロールに応じてヘッダーのcssを変更
———————————*/
$(function () { // 通常の記述はここに書いていく  
    $(window).on('load scroll', function () { // スクロールされる度に、変数が書き換えられるから、レスポンシブに対応。
        let imgHeight = $('.mainVisual').outerHeight();
        let bgHeight = $('.mainVisual-inner').outerHeight();
        let scroll = $(window).scrollTop();

        if (scroll > imgHeight - 50) {
            $('.hamburger').addClass('scroll'); // toggleだと挙動がおかしくなる

        } else {
            $('.hamburger').removeClass('scroll');
        }

        if (scroll > bgHeight - 50) {
            $('.logo').addClass('scroll'); // toggleだと挙動がおかしくなる

        } else {
            $('.logo').removeClass('scroll');
        }
    });
});