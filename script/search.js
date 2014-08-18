window.MSA.Search = MSA.Class({
    init: function(data){
        this.page = data.page;
        this.keyWord = data.data.keyWord;
        this.$p = $(this.page);
        this.$articleListCont = this.$p.find('.js-aritcle-list');
        this.$listCont = this.$p.find('.js-list-cont');
        this.$formSearch = this.$p.find('.js-form-search');
        this.$iptSearch = this.$p.find('.js-ipt-search');
        this.$loading = this.$p.find('.js-loading');
        this.initData();
        this.initDom();
        this.initEvent();
    },

    initData: function(){
        var that = this;
        this.startIndex = 0;
        this.documents = [];
    },

    initDom: function(){
        this.$iptSearch.val(this.keyWord);
        this.loadDocuments();
    },

    initEvent: function(){
        var that = this;
        $p = this.$p;

        $p.on('click', 'li.js-item', function(e){
            e.isPropagationStopped()
            $item = $(this);

            var article = that.getArticleById(Number($item.attr('data-id')));
            if(article != undefined){
                App.load('detail', {
                    article: article
                });
            }
        })
    },

    loadDocuments: function(){
        var that = this;
        App.infiniteScroll(that.$articleListCont[0], { loading: that.$loading[0] }, function (next) {
            var params = {
                start: that.startIndex
            };
            if(this.keyWord){
                params.keyWord = this.keyWord;
            }
            sql.search(params).done(function(_res){
                var htmlList = [];
                $.each(_res, function(i, o){
                    if(o.title){
                        htmlList.push('<li class="js-item" data-id="' + o.id + '">' + o.title + '</li>');
                        that.documents.push(o);
                    }
                });
                that.startIndex += htmlList.length;
                next(htmlList);
            });
        });
    },

    getArticleById: function(id){
        for(var i = 0, len = this.documents.length; i < len; i++){
            var article = this.documents[i];
            if(id == article.id){
                return article;
            }
        }
    }
});

App.controller('search', function (page, args) {
    var search = new MSA.Search({
        page: page,
        data: {
            keyWord: args.keyWord
        }
    });
});