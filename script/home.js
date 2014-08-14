window.MSA.Home = MSA.Class({
    init: function(data){
        this.page = data.page;
        this.$p = $(this.page);
        this.$categoryListCont = this.$p.find('.js-category-list');
        this.$articleListCont = this.$p.find('.js-aritcle-list');
        this.$listCont = this.$p.find('.js-list-cont');
        this.$formSearch = this.$p.find('.js-form-search');
        this.$btnSearch = this.$p.find('.js-btn-search');
        this.$btnMenu = this.$p.find('.js-btn-menu');
        this.initData();
        this.initDom();
        this.initEvent();
    },

    initData: function(){
        var that = this;
        this.articleList = MSA.List.getArticles();
        this.categories = MSA.List.getCategories();
    },

    initDom: function(){
        this.initCategory();
        this.initArticleList();
    },

    initEvent: function(){
        var that = this;
        $p = this.$p;
        $formSearch = this.$formSearch;
        $btnSearch = this.$btnSearch;
        $btnMenu = this.$btnMenu;

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
            if(that.$listCont.hasClass('move-left')){
                that.$listCont.removeClass('move-left');
            }else{
                that.$listCont.addClass('move-left');
            }
            e.preventDefault();
        })

        $p.on('click', 'li.js-menu-item', function(){
            var categoryName = $(this).text();
            var categoryId = $(this).attr('data-id');
            
        })
    },

    initCategory: function(){
        var that = this;
        this.$categoryListCont.html('');
        $.each(this.categories, function(i, o){
            if(o.name){
                that.$categoryListCont.append('<li class="js-menu-item" data-index="' + i + '" data-id="' + o.id + '">' + o.name + '</li>');
            }
        })
    },

    initArticleList: function(){
        var that = this;
        $p = this.$p;
        that.$articleListCont.html('');
        $.each(this.articleList, function(i, o){
            if(o.name){
                that.$articleListCont.append('<li class="js-item" data-id="' + o.id + '">' + o.name + '</li>');
            }
        })
    }

});

App.controller('home', function (page) {
    var home = new MSA.Home({
        page: page
    });
    // window.MSA.home.init({
    //     page: page
    // });
});