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
		var _res ={key:'documents',data: [
    {
        category: "法律法规文库__法规规范__行政法规",
        markdown_html_page: "/media/documents/2014/08/06/af4fd3af9f60a32acc253035bf65438335a55953/html/markdown.html",
        simple_html_page: "/media/documents/2014/08/06/af4fd3af9f60a32acc253035bf65438335a55953/html/simple.html",
        description: "",
        tags: "综合",
        created: "2014-08-06 15:16:23",
        id: 3327,
        full_html_pages: [
            "/media/documents/2014/08/06/af4fd3af9f60a32acc253035bf65438335a55953/html/page-1.html",
            "/media/documents/2014/08/06/af4fd3af9f60a32acc253035bf65438335a55953/html/page-2.html",
            "/media/documents/2014/08/06/af4fd3af9f60a32acc253035bf65438335a55953/html/page-3.html",
            "/media/documents/2014/08/06/af4fd3af9f60a32acc253035bf65438335a55953/html/page-4.html",
            "/media/documents/2014/08/06/af4fd3af9f60a32acc253035bf65438335a55953/html/page-5.html"
        ],
        publish_date: "1994-07-15 15:08:18",
        effective_date: "1994-07-15 15:09:00",
        title: "中华人民共和国公民出境入境管理法实施细则（1994年7月15日发布）",
        expired: false,
        publish_source: "国务院"
    },
    {
        category: "法律法规文库__法规规范__行政法规",
        markdown_html_page: "/media/documents/2014/08/06/5c9de5a51e66cdbb90319ee36ab2461c3eb65021/html/markdown.html",
        simple_html_page: "/media/documents/2014/08/06/5c9de5a51e66cdbb90319ee36ab2461c3eb65021/html/simple.html",
        description: "",
        tags: "综合",
        created: "2014-08-06 15:19:35",
        id: 3328,
        full_html_pages: [
        "/media/documents/2014/08/06/5c9de5a51e66cdbb90319ee36ab2461c3eb65021/html/page-1.html",
        "/media/documents/2014/08/06/5c9de5a51e66cdbb90319ee36ab2461c3eb65021/html/page-2.html",
        "/media/documents/2014/08/06/5c9de5a51e66cdbb90319ee36ab2461c3eb65021/html/page-3.html",
        "/media/documents/2014/08/06/5c9de5a51e66cdbb90319ee36ab2461c3eb65021/html/page-4.html",
        "/media/documents/2014/08/06/5c9de5a51e66cdbb90319ee36ab2461c3eb65021/html/page-5.html",
        "/media/documents/2014/08/06/5c9de5a51e66cdbb90319ee36ab2461c3eb65021/html/page-6.html",
        "/media/documents/2014/08/06/5c9de5a51e66cdbb90319ee36ab2461c3eb65021/html/page-7.html",
        "/media/documents/2014/08/06/5c9de5a51e66cdbb90319ee36ab2461c3eb65021/html/page-8.html",
        "/media/documents/2014/08/06/5c9de5a51e66cdbb90319ee36ab2461c3eb65021/html/page-9.html",
        "/media/documents/2014/08/06/5c9de5a51e66cdbb90319ee36ab2461c3eb65021/html/page-10.html",
        "/media/documents/2014/08/06/5c9de5a51e66cdbb90319ee36ab2461c3eb65021/html/page-11.html"
        ],
        publish_date: "2001-12-11 15:13:05",
        effective_date: "2002-01-01 15:13:38",
        title: "中华人民共和国国际海运条例（2001年12月11日发布）",
        expired: false,
        publish_source: "国务院"
    },
    {
        category: "法律法规文库__法规规范__行政法规",
        markdown_html_page: "/media/documents/2014/08/06/5e4b12c2d6785901586d7c3e9abe8e14a2c2e332/html/markdown.html",
        simple_html_page: "/media/documents/2014/08/06/5e4b12c2d6785901586d7c3e9abe8e14a2c2e332/html/simple.html",
        description: "",
        tags: "通航",
        created: "2014-08-06 15:21:02",
        id: 3329,
        full_html_pages: [
        "/media/documents/2014/08/06/5e4b12c2d6785901586d7c3e9abe8e14a2c2e332/html/page-1.html",
        "/media/documents/2014/08/06/5e4b12c2d6785901586d7c3e9abe8e14a2c2e332/html/page-2.html",
        "/media/documents/2014/08/06/5e4b12c2d6785901586d7c3e9abe8e14a2c2e332/html/page-3.html",
        "/media/documents/2014/08/06/5e4b12c2d6785901586d7c3e9abe8e14a2c2e332/html/page-4.html"
        ],
        publish_date: "1993-01-11 15:14:45",
        effective_date: "1993-02-01 15:15:00",
        title: "中华人民共和国海上航行警告和航行通告管理规定（1993年1月11日发布）",
        expired: false,
        publish_source: "国务院"
    },
    {
        category: "法律法规文库__法规规范__行政法规",
        markdown_html_page: "/media/documents/2014/08/06/81d08d2259b86dc81b8e6f470a8fe2078cdd5cb3/html/markdown.html",
        simple_html_page: "/media/documents/2014/08/06/81d08d2259b86dc81b8e6f470a8fe2078cdd5cb3/html/simple.html",
        description: "",
        tags: "通航",
        created: "2014-08-06 15:22:32",
        id: 3330,
        full_html_pages: [
        "/media/documents/2014/08/06/81d08d2259b86dc81b8e6f470a8fe2078cdd5cb3/html/page-1.html",
        "/media/documents/2014/08/06/81d08d2259b86dc81b8e6f470a8fe2078cdd5cb3/html/page-2.html",
        "/media/documents/2014/08/06/81d08d2259b86dc81b8e6f470a8fe2078cdd5cb3/html/page-3.html",
        "/media/documents/2014/08/06/81d08d2259b86dc81b8e6f470a8fe2078cdd5cb3/html/page-4.html",
        "/media/documents/2014/08/06/81d08d2259b86dc81b8e6f470a8fe2078cdd5cb3/html/page-5.html",
        "/media/documents/2014/08/06/81d08d2259b86dc81b8e6f470a8fe2078cdd5cb3/html/page-6.html"
        ],
        publish_date: "1990-03-03 15:16:06",
        effective_date: "1990-03-03 15:16:27",
        title: "中华人民共和国海上交通事故调查处理条例（1990年3月3日发布）",
        expired: false,
        publish_source: "国务院"
    },
    {
        category: "法律法规文库__法规规范__行政法规",
        markdown_html_page: "/media/documents/2014/08/06/8200072301fe65ea4811271b5f9cfb78960b57da/html/markdown.html",
        simple_html_page: "/media/documents/2014/08/06/8200072301fe65ea4811271b5f9cfb78960b57da/html/simple.html",
        description: "",
        tags: "综合",
        created: "2014-08-06 15:23:29",
        id: 3331,
        full_html_pages: [
        "/media/documents/2014/08/06/8200072301fe65ea4811271b5f9cfb78960b57da/html/page-1.html",
        "/media/documents/2014/08/06/8200072301fe65ea4811271b5f9cfb78960b57da/html/page-2.html",
        "/media/documents/2014/08/06/8200072301fe65ea4811271b5f9cfb78960b57da/html/page-3.html",
        "/media/documents/2014/08/06/8200072301fe65ea4811271b5f9cfb78960b57da/html/page-4.html",
        "/media/documents/2014/08/06/8200072301fe65ea4811271b5f9cfb78960b57da/html/page-5.html",
        "/media/documents/2014/08/06/8200072301fe65ea4811271b5f9cfb78960b57da/html/page-6.html",
        "/media/documents/2014/08/06/8200072301fe65ea4811271b5f9cfb78960b57da/html/page-7.html",
        "/media/documents/2014/08/06/8200072301fe65ea4811271b5f9cfb78960b57da/html/page-8.html",
        "/media/documents/2014/08/06/8200072301fe65ea4811271b5f9cfb78960b57da/html/page-9.html",
        "/media/documents/2014/08/06/8200072301fe65ea4811271b5f9cfb78960b57da/html/page-10.html",
        "/media/documents/2014/08/06/8200072301fe65ea4811271b5f9cfb78960b57da/html/page-11.html"
        ],
        publish_date: "2007-04-05 15:22:31",
        effective_date: "2008-05-01 15:23:24",
        title: "中华人民共和国政府信息公开条例（2007年4月5日发布）",
        expired: false,
        publish_source: "国务院"
    },
    {
        category: "法律法规文库__法规规范__行政法规",
        markdown_html_page: "/media/documents/2014/08/06/926b76842f1bf9c5bc6aea0c2b65117addbf3e16/html/markdown.html",
        simple_html_page: "/media/documents/2014/08/06/926b76842f1bf9c5bc6aea0c2b65117addbf3e16/html/simple.html",
        description: "",
        tags: "危防",
        created: "2014-08-06 15:24:09",
        id: 3332,
        full_html_pages: [
        "/media/documents/2014/08/06/926b76842f1bf9c5bc6aea0c2b65117addbf3e16/html/page-1.html",
        "/media/documents/2014/08/06/926b76842f1bf9c5bc6aea0c2b65117addbf3e16/html/page-2.html",
        "/media/documents/2014/08/06/926b76842f1bf9c5bc6aea0c2b65117addbf3e16/html/page-3.html",
        "/media/documents/2014/08/06/926b76842f1bf9c5bc6aea0c2b65117addbf3e16/html/page-4.html",
        "/media/documents/2014/08/06/926b76842f1bf9c5bc6aea0c2b65117addbf3e16/html/page-5.html"
        ],
        publish_date: "1985-03-06 15:17:41",
        effective_date: "1985-04-01 15:18:09",
        title: "中华人民共和国海洋倾废管理条例（1985年3月6日发布）",
        expired: false,
        publish_source: "国务院"
    },
    {
        category: "法律法规文库__法规规范__行政法规",
        markdown_html_page: "/media/documents/2014/08/06/9df55a681f40379b2356e0abc6aafc524d88b880/html/markdown.html",
        simple_html_page: "/media/documents/2014/08/06/9df55a681f40379b2356e0abc6aafc524d88b880/html/simple.html",
        description: "",
        tags: "综合",
        created: "2014-08-06 15:25:18",
        id: 3333,
        full_html_pages: [
        "/media/documents/2014/08/06/9df55a681f40379b2356e0abc6aafc524d88b880/html/page-1.html",
        "/media/documents/2014/08/06/9df55a681f40379b2356e0abc6aafc524d88b880/html/page-2.html",
        "/media/documents/2014/08/06/9df55a681f40379b2356e0abc6aafc524d88b880/html/page-3.html",
        "/media/documents/2014/08/06/9df55a681f40379b2356e0abc6aafc524d88b880/html/page-4.html",
        "/media/documents/2014/08/06/9df55a681f40379b2356e0abc6aafc524d88b880/html/page-5.html",
        "/media/documents/2014/08/06/9df55a681f40379b2356e0abc6aafc524d88b880/html/page-6.html",
        "/media/documents/2014/08/06/9df55a681f40379b2356e0abc6aafc524d88b880/html/page-7.html"
        ],
        publish_date: "1987-10-20 15:25:13",
        effective_date: "1987-10-20 15:25:24",
        title: "中华人民共和国渔业法实施细则（1987年10月20日发布）",
        expired: false,
        publish_source: "国务院"
    },
    {
        category: "法律法规文库__法规规范__行政法规",
        markdown_html_page: "/media/documents/2014/08/06/c4527bc17b9c231803a0ffc95029aef078ba00ea/html/markdown.html",
        simple_html_page: "/media/documents/2014/08/06/c4527bc17b9c231803a0ffc95029aef078ba00ea/html/simple.html",
        description: "",
        tags: "船舶",
        created: "2014-08-06 15:26:08",
        id: 3334,
        full_html_pages: [
        "/media/documents/2014/08/06/c4527bc17b9c231803a0ffc95029aef078ba00ea/html/page-1.html",
        "/media/documents/2014/08/06/c4527bc17b9c231803a0ffc95029aef078ba00ea/html/page-2.html",
        "/media/documents/2014/08/06/c4527bc17b9c231803a0ffc95029aef078ba00ea/html/page-3.html",
        "/media/documents/2014/08/06/c4527bc17b9c231803a0ffc95029aef078ba00ea/html/page-4.html",
        "/media/documents/2014/08/06/c4527bc17b9c231803a0ffc95029aef078ba00ea/html/page-5.html",
        "/media/documents/2014/08/06/c4527bc17b9c231803a0ffc95029aef078ba00ea/html/page-6.html"
        ],
        publish_date: "2003-06-27 15:25:54",
        effective_date: "2003-08-01 15:26:15",
        title: "中华人民共和国渔业船舶检验条例（2003年6月27日发布）",
        expired: false,
        publish_source: "国务院"
        },
        {
        category: "法律法规文库__法规规范__行政法规",
        markdown_html_page: "/media/documents/2014/08/06/b96a36455e23d4872e4437129778af13487d7bec/html/markdown.html",
        simple_html_page: "/media/documents/2014/08/06/b96a36455e23d4872e4437129778af13487d7bec/html/simple.html",
        description: "",
        tags: "综合",
        created: "2014-08-06 15:27:57",
        id: 3335,
        full_html_pages: [
        "/media/documents/2014/08/06/b96a36455e23d4872e4437129778af13487d7bec/html/page-1.html",
        "/media/documents/2014/08/06/b96a36455e23d4872e4437129778af13487d7bec/html/page-2.html",
        "/media/documents/2014/08/06/b96a36455e23d4872e4437129778af13487d7bec/html/page-3.html",
        "/media/documents/2014/08/06/b96a36455e23d4872e4437129778af13487d7bec/html/page-4.html"
        ],
        publish_date: "1989-07-03 15:27:35",
        effective_date: "1989-08-01 15:28:02",
        title: "中华人民共和国渔港水域交通安全管理条例（1989年7月3日发布）",
        expired: false,
        publish_source: "国务院"
    },
    {
        category: "法律法规文库__法规规范__行政法规",
        markdown_html_page: "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/markdown.html",
        simple_html_page: "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/simple.html",
        description: "",
        tags: "综合",
        created: "2014-08-06 15:29:02",
        id: 3336,
        full_html_pages: [
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-1.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-2.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-3.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-4.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-5.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-6.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-7.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-8.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-9.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-10.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-11.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-12.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-13.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-14.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-15.html",
            "/media/documents/2014/08/06/907f21856c7152718e77d5211dabd489ba09d272/html/page-16.html"
        ],
        publish_date: "2007-05-29 15:28:38",
        effective_date: "2007-08-01 15:29:07",
        title: "中华人民共和国行政复议法实施条例（2007年5月29日发布）",
        expired: false,
        publish_source: "国务院"
    }
]};
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
				// if(_res && _res.data){// cache hits
				// 	deferred.resolve(_res.data.splice(start, num));
				// }else{
					fetchDocuments(_param,function(_res2){
						deferred.resolve(_res2.data.splice(start, num));
					});
				// }
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