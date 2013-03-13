(function( App ){

    var HTMLData = App.Data.Preview;

    Template.buttonPreview.html = function(){
        return HTMLData.findOne({}).html;
    };

    Template.buttonPreview.css = function(){
        return HTMLData.findOne({}).css;
    };

    Template.buttonPreview.preserve( [ '.custom-HTML' ]);
    Template.buttonPreview.events({
        'keyup .custom-HTML-content': function( e ){
            var textarea = e.currentTarget;
            HTMLData.update({}, { $set: { html: textarea.value } });
        }
    });
})( ED );