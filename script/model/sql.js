/**
 * 持久化数据层
 */

(function(exports,$){
    var PAGESIZE = 20;
    // creat a new db
    var store = new Lawnchair({name:'tb_categories'}, function(store) {
        // 预加载 文档分类数据；
        // 保存
        // fetchCategorys(function(_res){
        //  store.save(_res);
        // });
        
    });
    var documentStore = new Lawnchair({name:'tb_documents'}, function(store) {});
    var detailStore = new Lawnchair({name:'tb_docu_details'}, function(store) {});

    // get category list
    function fetchCategorys(_callback){
        $.ajax({
            url:'http://www.nbmsa.gov.cn/api/law_documents/categories/',
            success : function(_result){
                var me = {key:'categories',data:_result};
                _callback(me);
                //
                //TODO strip unused properties
                store.save(me);
            }
        });
    }
    // get documents list of one category
    function fetchDocuments(_param, _callback){
        var data = {
            start : parseInt(_param.start,10) || 0,
            cat : _param.cat,
            num : parseInt(_param.num,10) || PAGESIZE
        };
        
        //no hit
        $.getJSON('http://www.nbmsa.gov.cn/api/law_documents/documents/',data,function(_res){
            var ley = 'documents'+data.cat;
            _callback({key:ley,data:_res});
            //
            documentStore.get(ley,function(older){
                //
                if(older && older.data){
                    var newer = older;
                }else{
                    var newer = {key:ley,data:[]};
                }
                for(var i= 0, l = _res.length; i<l; i++){
                    var artice = _res[i];
                    newer.data[data.start+i] = artice;
                    // 保存id和content到缓存，如果content存在
                    if(artice.html_body){
                        detailStore.save({
                            key : ''+artice.id,
                            data : {
                                id: artice.id,
                                content : artice.html_body
                            }
                        })
                    }
                }
                try{
                    //TODO strip unused properties
                    store.save(newer);
                }catch(e){
                    alert('数据离线失败');
                }
                
            })
        });
            
        
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
        $.getJSON(
            'http://www.nbmsa.gov.cn/api/law_documents/search/',
            data,
            function(_res){
                _callback(_res);
            }
        );
        //TODO  search in cache
    };
    function getHTMLById(_id, _callback){
        
        $.getJSON(
            'http://www.nbmsa.gov.cn/api/law_documents/document/'+_id+'/',
            {},
            function(_res){
                try{
                    var val = {
                        key : ''+_id,
                        data : _res
                    };
                    _callback(val);
                    //
                    detailStore.save(val);
                }catch(e){
                    alert('数据离线失败');
                }
            }
        );
    }
// fetch detail by document id
    function fetchDetails(_param,_callback){
        $.ajax({
            url:'http://www.nbmsa.gov.cn/api/law_documents/offline/',
            data :{
                start : parseInt(_param.start,10) || 0,
                num : parseInt(_param.num,10) || 20
            },
            success : function(_result){
                _callback && _callback(_result);
                //
                for(var i= 0, l = _result.length; i<l; i++){
                    try{
                        var item =_result[i];
                        detailStore.save({
                            key : ''+item.id,
                            data : item
                        });
                    }catch(e){
                        alert('数据离线失败');
                    }
                }
            }
        });
    };
    //
    var sql = {
        getDetailById : function(_id){
            var deferred = $.Deferred();

            detailStore.get(''+_id,function(_res){
                if(_res && _res.data){// cache hits
                    deferred.resolve(_res.data);
                }else{
                    getHTMLById(_id, function(_result){
                        deferred.resolve(_result.data);
                    });
                }
            });

            return deferred;
        },
        listCategory : function(){
            var deferred = $.Deferred();

            store.get('categories',function(_res){
                if(_res && _res.data){// cache hits
                    deferred.resolve(_res.data);
                }else{
                    fetchCategorys(function(_result){
                        deferred.resolve(_result.data);
                    });
                }
            })

            return deferred;
        },
        listDocuments : function(_param){
            if(_param.cat == null){
                throw Error('No category parameter')
            }

            var deferred = $.Deferred();
            var start = _param.start || 0,
                num = _param.num || PAGESIZE
            store.get('documents'+_param.cat,function(older){
                if(older && older.data){
                    var outs = older.data.slice(start,start+num);
                    if(outs[0] && outs[num-1]){//cache hits
                        deferred.resolve(outs);
                        return;
                    }
                }
                // not hit
                fetchDocuments(_param,function(_res2){
                    deferred.resolve(_res2.data);
                });
            });

            return deferred;
        },
        search : function(_param){
            var deferred = $.Deferred();
            searchDocuments(_param,function(_res){
                if(_res){
                    deferred.resolve(_res);
                }else{
                    deferred.resolve([]);
                }
            })

            return deferred;
        },
        download: function(_param, _callback){
            var param = _param || {};
            // var deferred = $.Deferred();
            var start = param.start || 0,
                num = param.num || PAGESIZE

            // 强制下载
            preFetch(function(_res){
                // deferred.done(_res);
                if (_callback) {
                    _callback(_res);
                };
            })

            // return deferred;

        }
    };
    //
    
    var documentTotal = 0;
    function preFetch(_callback){
        // download category
        var categoryMaps = {};
        sql.listCategory().done(function(_lst){
            for (var i = _lst.length - 1; i >= 0; i--) {
                var item = _lst[i];
                documentTotal += item.docs_amount;
                categoryMaps[item.id] = item.docs_amount;
            }
        }).then(preFetchDocuments).done(preFetchDetails);

        function preFetchDocuments(){
            var deferred = $.Deferred();
            // download all documents
            // 列表下载比例占总下载量的20%
            var downloadNum = 0;
            for(var i in categoryMaps){
                if(categoryMaps.hasOwnProperty(i)){
                    if(categoryMaps[i] != 0){
                        (function(j){
                            sql.listDocuments({
                                cat : j,
                                start :0,
                                num : categoryMaps[j]
                            }).done(function(){
                                downloadNum += categoryMaps[j];
                                var percent = parseInt(downloadNum * 100 * 0.2 / documentTotal,10);
                                if (_callback) {
                                    _callback(percent);
                                };

                                if (downloadNum >= documentTotal) {
                                    deferred.resolve();
                                };
                            })
                        })(i);
                    }
                }
            }
            return deferred;
        }

        function preFetchDetails(){
            var deferred = $.Deferred();
            // meanwhile download document's detail
            var downloadNum = 0;
            var PAGESIZE = 10;
            var start = 0;
            for (var start = 0; start < documentTotal; start += PAGESIZE) {
                (function(start){
                    fetchDetails({
                        start : start,
                        num : PAGESIZE,
                    }, function(){
                        downloadNum += PAGESIZE;
                        var percent = parseInt(downloadNum * 100 * 0.2 / documentTotal,10) + 20;
                        if (_callback) {
                            _callback(percent);
                        };

                        if (downloadNum >= documentTotal) {
                            deferred.resolve();
                        };
                    });
                })(start);
            };
            return deferred;
        }
    };
    //
    exports.sql = sql;

})(window,Zepto);