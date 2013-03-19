//
////var Future = NodeModules.require('fibers/future'), wait = Future.wait;
//
//(function(){
//
//    var ExpireTimers = {};
//    var EXPIRE_TIME = 3 * 1000;
//
//    Meteor.startup(function(){
//
//        var Session = new Meteor.Collection( 'UserSession' );
//
//        Meteor.methods({
//            sessionUpdate: function( sessionId ){
//
//                if( sessionId ){
//                    if( !Session.findOne({ sessionId: sessionId }) ){
//                        sessionId = Meteor.uuid();
//                        Session.insert({ sessionId: sessionId });
//                    }
//                }
//                else {
//                    sessionId = Meteor.uuid();
//                    Session.insert({ sessionId: sessionId });
//                }
//
//                // 若存在timer，清除它
//                if( sessionId in ExpireTimers ){
//                    console.log( 'clear timeout' );
//                    Meteor.clearTimeout( ExpireTimers[ sessionId ] );
//                }
//
//                console.log( 'settimeout', sessionId, EXPIRE_TIME );
//
//                console.log( 'hello!!!!!!!!');
//
//                // 设置新的timer
//                ExpireTimers[ sessionId ] = Meteor.setTimeout(function(){
//                    console.log( 'begin remove!!!', sessionId );
//                    // 删除记录，并删除timer
//                    Session.remove({ sessionId: sessionId });
//                    delete ExpireTimers[ sessionId ];
//                }, 3000 );
//
//                return { sessionId: sessionId };
//            }
//        });
//    });
//
//})();