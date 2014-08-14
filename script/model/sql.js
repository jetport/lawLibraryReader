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
			var _res =[{
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
		}];
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