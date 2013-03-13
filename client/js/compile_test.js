(function( App ){

    var SASS_DATA = App.Data.SASS;
    var data = SASS_DATA.find({});

    data.observeChanges({
        'changed': function( id, newObj ){
            Meteor.call( 'compile', 'button', newObj.data, function( ){
                console.log( 'comeback', arguments );
            });
        }
    });


})( ED );