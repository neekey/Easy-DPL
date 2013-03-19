(function( App ){

    var Data = App.Data;


    Template.cssOutput.CSS = function(){
        return Data.Preview.findOne({}).css.replace( /\n+/g, '<br>');
    };

    Template.cssOutput.rawCSS = function(){
        return Data.Preview.findOne({}).css;
    };

    Template.cssOutput.rendered = function(){
        hljs.highlightBlock( this.find('pre'), null, true);
    };

    Template.cssOutput.preserve([ '.J_CopyCSS' ]);

    Meteor.startup(function(){

        window.clip = new ZeroClipboard( $('.J_CopyCSS'), {
            moviePath: "flash/ZeroClipboard/ZeroClipboard.swf"
        });

        // 鼠标按下时，重新设置内容
        clip.on( 'mousedown', function(client) {
            clip.setText( Data.Preview.findOne({}).css );
        } );

        // 复制完成，提示
        clip.on( 'complete', function(client, args) {
            alert( 'CSS 已经复制到您的剪贴板中!' );
        } );
    });

})( ED );