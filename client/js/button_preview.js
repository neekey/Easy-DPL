(function( App ){

    var HTMLData = App.Data.Preview;
    var data = HTMLData.find({});

    // 监控 预览数据变化
    data.observeChanges({
        'changed': function( id, newObj ){
            if( newObj ){
                updatePreview( newObj );
            }
        }
    });

    /**
     * 请iframe发送请求，更新html和css
     * @param {Object} data
     * @param {String} data.html
     * @param {String} data.css
     */
    function updatePreview( data ){
        $( '#preview-frame')[0].contentWindow.postMessage(data, '*');
    }

})( ED );