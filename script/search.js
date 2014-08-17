window.MSA.Search = MSA.Class({
    init: function(data){
        this.page = data.page;
        this.$p = $(this.page);
        this.$articleListCont = this.$p.find('.js-aritcle-list');
        this.$listCont = this.$p.find('.js-list-cont');
        this.$formSearch = this.$p.find('.js-form-search');
        this.$loading = this.$p.find('.js-loading');
        this.initData();
        this.initDom();
        this.initEvent();
    },

    initData: function(){
        var that = this;
    },

    initDom: function(){

    },

    initEvent: function(){
        var that = this;
        $p = this.$p;

        $p.on('click', 'li.js-item', function(e){
            e.isPropagationStopped()
            $item = $(this);
            App.load('detail');
        })

        App.infiniteScroll(that.$articleListCont[0], { loading: that.$loading[0] }, function (next) {
            sql.search({}).done(function(_res){
                var htmlList = [];
                $.each(_res, function(i, o){
                    if(o.title){
                        htmlList.push('<li class="js-item" data-id="' + o.id + '">' + o.title + '</li>');
                    }
                })
                next(htmlList);
            });
        });
    }
});

App.controller('search', function (page, args) {
    var search = new MSA.Search({
        page: page
    });
});