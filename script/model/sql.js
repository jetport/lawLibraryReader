/**
 * 持久化数据层
 */

(function(exports,$){
	var PAGESIZE = 10;
	// creat a new db
	var store = new Lawnchair({name:'tb_lawreader'}, function(store) {
        // 预加载 文档分类数据；
        // 保存
        fetchCategorys(function(_res){
        	store.save(_res);
        });
        
    });
    // get category list
	function fetchCategorys(_callback){
		var _res = [
		    {
		        "id": 743, 
		        "open_class": 0, 
		        "children": [], 
		        "name": "海事国际公约", 
		        "description": ""
		    }, 
		    {
		        "id": 744, 
		        "open_class": 0, 
		        "children": [
		            {
		                "id": 745, 
		                "open_class": 0, 
		                "children": [], 
		                "name": "法律", 
		                "description": ""
		            }, 
		            {
		                "id": 746, 
		                "open_class": 0, 
		                "children": [], 
		                "name": "行政法规", 
		                "description": ""
		            }, 
		            {
		                "id": 747, 
		                "open_class": 0, 
		                "children": [], 
		                "name": "部门规章", 
		                "description": ""
		            }, 
		            {
		                "id": 748, 
		                "open_class": 0, 
		                "children": [], 
		                "name": "规范性文件", 
		                "description": ""
		            }, 
		            {
		                "id": 749, 
		                "open_class": 1, 
		                "children": [], 
		                "name": "地方法规、规章、规范性文件", 
		                "description": ""
		            }, 
		            {
		                "id": 750, 
		                "open_class": 1, 
		                "children": [], 
		                "name": "船舶与海上设施检验规则", 
		                "description": ""
		            }, 
		            {
		                "id": 751, 
		                "open_class": 1, 
		                "children": [], 
		                "name": "司法解释", 
		                "description": ""
		            }
		        ], 
		        "name": "法规规范", 
		        "description": ""
		    }, 
		    {
		        "id": 752, 
		        "open_class": 1, 
		        "children": [], 
		        "name": "标准文库", 
		        "description": ""
		    }, 
		    {
		        "id": 753, 
		        "open_class": 1, 
		        "children": [], 
		        "name": "内部业务工作制度", 
		        "description": ""
		    }
		];
		// $.ajax({url:'http://www.nbmsa.gov.cn/api/law_documents/categories/'},function(_result){
        	var me = {key:'categories',data:_res};
			store.save(me);
			//
			_callback(me);
		// });
	}
	// get documents list of one category
	function fetchDocuments(_param, _callback){
		var data = {
			start : parseInt(_param.start,10) || 0,
			num : parseInt(_param.num,10) || PAGESIZE
		};
		if(_param.cat){
			data.cat = _param.cat;
		}
		// $.getJSON('http://www.nbmsa.gov.cn/api/law_documents/documents/',data,function(_result){
		var _res ={key:'documents',data: [{
		    id: 333,
		    name: '中华人民共和国船舶登记条例',
		    cateory: '123',
		    publish_date: '2012-1-1',
		    effective_date: '2012-5-1',
		    markdown_html: '<div>  第一章　总则 ... </div>',
		    pdf_document_url: 'http://www.nbmsa.gov.cn/media/documents/2012/01/01/h2asdfh32asdafd3434df3.pdf'
		},{
		    id: 333,
		    name: '美国人民共和国船舶登记条例',
		    cateory: '123',
		    publish_date: '2012-1-1',
		    effective_date: '2012-5-1',
		    markdown_html: '<div>  第2章　总则 ... </div>',
		    pdf_document_url: 'http://www.nbmsa.gov.cn/media/documents/2012/01/01/h2asdfh32asdafd3434df3.pdf'
		},{
		    id: 333,
		    name: '英国联邦船舶登记条例',
		    cateory: '123',
		    publish_date: '2012-1-1',
		    effective_date: '2012-5-1',
		    markdown_html: '<div>  第2章　总则 ... </div>',
		    pdf_document_url: 'http://www.nbmsa.gov.cn/media/documents/2012/01/01/h2asdfh32asdafd3434df3.pdf'
		}]};
			store.get('documents',function(older){
				if(older && older.data){
					var newer = older;
				}else{
					var newer = {key:'documents',data:[]};
				}
				for(var i= 0, l = _res.data.length; i<l; i++){
					newer.data[data.start+i] = _res.data[i];
				}

				store.save(newer);
				//
				_callback(newer);
			})
		// });
	}
	// search
	function searchDocuments(_param, _callback){
		var data = {
			start : parseInt(_param.start,10) || 0,
			num : parseInt(_param.num,10) || PAGESIZE
		};
		if(_param.keyword){
			data.keyword = _param.keyword;
		}
		// $.getJSON('http://www.nbmsa.gov.cn/api/law_documents/search/',data,function(_result){
			var _res =[
    {
        "category": "法律法规文库__法规规范__行政法规", 
        "markdown_html_page": "/media/documents/2014/08/06/2dc659b6106aabfaf552e749786e47e84e2687e6/html/markdown.html", 
        "simple_html_page": "/media/documents/2014/08/06/2dc659b6106aabfaf552e749786e47e84e2687e6/html/simple.html", 
        "description": "", 
        "tags": "综合", 
        "created": "2014-08-06 15:59:19", 
        "id": 3369, 
        "full_html_pages": [
            "/media/documents/2014/08/06/2dc659b6106aabfaf552e749786e47e84e2687e6/html/page-1.html", 
            "/media/documents/2014/08/06/2dc659b6106aabfaf552e749786e47e84e2687e6/html/page-2.html", 
            "/media/documents/2014/08/06/2dc659b6106aabfaf552e749786e47e84e2687e6/html/page-3.html", 
            "/media/documents/2014/08/06/2dc659b6106aabfaf552e749786e47e84e2687e6/html/page-4.html", 
            "/media/documents/2014/08/06/2dc659b6106aabfaf552e749786e47e84e2687e6/html/page-5.html"
        ], 
        "publish_date": "2001-11-11 15:59:14", 
        "effective_date": "2002-01-01 15:59:27", 
        "title": "行政法规制定程序条例（2001年11月11日发布）", 
        "expired": false, 
        "publish_source": "国务院"
    }, 
    {
        "category": "法律法规文库__法规规范__行政法规", 
        "markdown_html_page": "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/markdown.html", 
        "simple_html_page": "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/simple.html", 
        "description": "", 
        "tags": "综合", 
        "created": "2014-08-06 16:28:00", 
        "id": 3402, 
        "full_html_pages": [
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-1.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-2.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-3.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-4.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-5.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-6.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-7.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-8.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-9.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-10.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-11.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-12.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-13.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-14.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-15.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-16.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-17.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-18.html", 
            "/media/documents/2014/08/06/18223edf1bc630908478334985067390af5ffc2a__/html/page-19.html"
        ], 
        "publish_date": "2011-01-08 00:00:00", 
        "effective_date": "2011-01-08 00:00:00", 
        "title": "国务院关于废止和修改部分行政法规的决定(2011年1月8日发布)", 
        "expired": false, 
        "publish_source": "国务院"
    }
];
			_callback(_res);
		// });
		//TODO  search in cache
	}

	exports.sql = {
		listCategory : function(){
			var deferred = $.Deferred();

			store.get('categories',function(_res){
				if(_res){// cache hits
					deferred.resolve(_res.data);
				}else{
					fetchCategorys(function(_res){
						deferred.resolve(_res.data);
					});
				}
			})

			return deferred;
		},
		listDocuments : function(_param){
			var deferred = $.Deferred();
			var start = _param.start || 0,
				num = _param.num || PAGESIZE

			store.get('documents',function(_res){
				if(_res && _res.data){// cache hits
					deferred.resolve(_res.data.splice(start, num));
				}else{
					fetchDocuments(_param,function(_res2){
						deferred.resolve(_res2.data.splice(start, num));
					});
				}
			})

			return deferred;
		},
		search : function(_param){
			var deferred = $.Deferred();
			searchDocuments(_param,function(_res){
				if(_res){// cache hits
					deferred.resolve(_res);
				}else{
					deferred.resolve([]);
				}
			})

			return deferred;
		}
	};

})(window,Zepto);