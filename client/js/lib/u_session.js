//(function( App ){
//
//    App.Utils.session = function( next ){
//        Meteor.call( 'sessionUpdate', amplify.store( 'sessionId' ), function( e, res ){
//
//            if( e ){
//                next( e );
//            }
//            else {
//                amplify.store( 'sessionId', res.sessionId );
//                next( null, res.sessionId );
//            }
//        });
//    };
//
//})( ED );