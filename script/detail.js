window.MSA.Detail = MSA.Class({
    init: function(data){
        this.page = data.page;
        this.article = data.article;
        this.$p = $(this.page);
        this.$appContent = this.$p.find('.app-content');
        this.initData();
        this.initDom();
        this.initEvent();
    },

    initData: function(){
        var that = this;
    },

    initDom: function(){
    	this.loadDetail();
    },

    initEvent: function(){

    },

    loadDetail: function(){
    	var that = this;
        sql.getDetailById(this.article.id).done(function(_res){
            var pattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im
            var array_matches = pattern.exec(_res['markdown_html']);
            that.$appContent.html(array_matches[1]);
        });
    }
});
App.controller('detail', function (page, args) {
    // put stuff here
    var detail = new MSA.Detail({
        page: page,
        article: args.article
    });
});