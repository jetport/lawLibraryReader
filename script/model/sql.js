/**
 * 持久化数据层
 */

(function(exports,$){

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
			num : parseInt(_param.num,10) || 10
		};
		if(_param.cat){
			data.cat = _param.cat;
		}
		$.getJSON('http://www.nbmsa.gov.cn/api/law_documents/documents/?callback=alert',data,function(_result){
        	var me = {key:'categories_'+(data.start * data.num),data:_res};//TODO
			store.save(me);
			//
			_callback(_result);
		});
	}

	var deferred = $.Deferred();


	exports.sql = {
		listCategory : function(){
			var deferred = $.Deferred();

			store.get('categories',function(_res){
				if(_res){// cache hits
					deferred.resolve(_res);
				}else{
					fetchCategorys(function(_res){
						deferred.resolve(_res);
					});
				}
			})

			return deferred;
		},
		listDocuments : function(_params){
			var deferred = $.Deferred();

			store.get('categories',function(_res){
				if(_res){// cache hits
					deferred.resolve(_res);
				}else{
					fetchDocuments(_param,function(_res){
						deferred.resolve(_res);
					});
				}
			})

			return deferred;
		},
		search : function(_params){
			var deferred = $.Deferred();
			return deferred;
		}
	};

})(window,Zepto);