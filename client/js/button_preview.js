(function(){

    var HTMLData = new Meteor.Collection();
    HTMLData.insert({ html: ''});

    Template.buttonPreview.html = function(){
        return HTMLData.findOne({}).html;
    };
    Template.buttonPreview.preserve( [ '.custom-HTML' ]);
    Template.buttonPreview.events({
        'keyup .custom-HTML-content': function( e ){
            console.log( 'change!' );
            var textarea = e.currentTarget;
            HTMLData.update({}, { html: textarea.value });
            var cursor = HTMLData.find({});
            cursor.forEach(function( data ){
                console.log( 'html', data );
            });
        }
    });
})();