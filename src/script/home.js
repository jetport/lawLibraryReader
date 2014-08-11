App.controller('home', function (page) {
    var list = MSA.List.getArticles();
    $p = $(page);
    $listCont = $(page).find('.js-aritcle-list');
    $.each(list, function(i, o){
        if(o.name){
            $listCont.append('<li class="js-item" data-id="' + o.id + '">' + o.name + '</li>');
        }
    })

    $formSearch = $p.find('.js-form-search');
    $btnSearch = $p.find('.js-btn-search');
    $btnSearch.on('click', function(){
        $searchBtn = $(this);
        if($searchBtn.hasClass('selected')){
            $searchBtn.removeClass('selected');
            $formSearch.hide();
        }else{
            $searchBtn.addClass('selected');
            $formSearch.show();
        }
    })

    $p.on('click', 'li.js-item', function(e){
        e.isPropagationStopped()
        $item = $(this);
        App.load('detail');
    })


    $btnMenu = $p.find('.js-btn-menu');
    $btnMenu.on('touchend', function(e){
        $listCont = $p.find('.list-cont');
        if($listCont.hasClass('move-left')){
            $listCont.removeClass('move-left');
        }else{
            $listCont.addClass('move-left');
        }
        e.preventDefault();
    })

    $p.on('click', 'li.js-menu-item', function(){
        alert(1);
    })

    $p.find('.js-aritcle-list').on('touchend', function(){
        $listCont = $(this);
        if($listCont.hasClass('move-left')){
            $listCont.removeClass('move-left');
            e.preventDefault();
        }else{
            $listCont.addClass('move-left');
        }
    })
});