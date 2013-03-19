(function( App ){

    var Data = App.Data;


    Template.cssOutput.css = function(){
        return Data.Preview.findOne({}).css.replace( /\n+/g, '<br>');
    };

    Template.cssOutput.path = function(){
        return Data.Preview.findOne({}).path;
    };

    Template.cssOutput.rendered = function(){
        hljs.highlightBlock( this.find('pre'), null, true);
    };

//    hljs.highlightBlock(outputCSSCon[0], null, true);
})( ED );