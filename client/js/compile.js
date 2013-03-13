(function( App ){

    var SASS_DATA = App.Data.SASS;
    var PreviewData = App.Data.Preview;
    var data = SASS_DATA.find({});

    data.observeChanges({
        'changed': function( id, newObj ){
            if( newObj.data ){
                Meteor.call( 'compile', 'button', JSON.parse(newObj.data), function( e, css ){
                    if( e ){
                        alert( JSON.stringify( e ) );
                    }
                    else {
                        PreviewData.update({}, { $set: { css: css } });
                    }
                });
            }
        }
    });


})( ED );