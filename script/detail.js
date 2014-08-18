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
    	$.ajax({
    		url: 'http://www.nbmsa.gov.cn' + this.article.markdown_html_page,
    		// url: '/test.html',
    		data: {},
    		success: function(_res){
				var pattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im
    			var array_matches = pattern.exec(_res);
    			that.$appContent.html(array_matches[0]);
    		},
    		dataType: 'html'
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