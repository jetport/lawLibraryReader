window.MSA.home = {
    init: function(data){
        this.page = data.page;
        var list = MSA.List.getArticles();
        this.categories = MSA.List.getCategories();
        $p = $(this.page);
        this.$p = $p;
        $listCont = $p.find('.js-aritcle-list');
        $formSearch = $p.find('.js-form-search');
        $btnSearch = $p.find('.js-btn-search');
        $btnMenu = $p.find('.js-btn-menu');

        $.each(list, function(i, o){
            if(o.name){
                $listCont.append('<li class="js-item" data-id="' + o.id + '">' + o.name + '</li>');
            }
        })

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
            var categoryName = $(this).text();
            var categoryId = $(this).attr('data-id');
            
        })

        this.initCategory();
    },
    initCategory: function(){
        var that = this;
        this.$categoryListCont = this.$p.find('.js-category-list');
        this.$categoryListCont.html('');
        $.each(this.categories, function(i, o){
            if(o.name){
                that.$categoryListCont.append('<li class="js-menu-item" data-index="' + i + '" data-id="' + o.id + '">' + o.name + '</li>');
            }
        })
    }
}

App.controller('home', function (page) {
    window.MSA.home.init({
        page: page
    });
});