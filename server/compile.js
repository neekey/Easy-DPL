var Compass = ED.compass;
var Mustache = NodeModules.require( 'mustache' );
var FS = NodeModules.require( 'fs' );
var Path = NodeModules.require( 'path' );

var Future = NodeModules.require('fibers/future'), wait = Future.wait;

(function(){

    Meteor.methods({
        compile: function( type, jsonData ){
            this.unblock();
            var Config = ED.config;
            var template = FS.readFileSync( Path.resolve( Config.TEMPLATE_PATH, type + '.scss.mustache' )).toString();
            jsonData.sassBase = Config.SASS_BASE

            var output = Mustache.render( template, jsonData );
            var randomDirname = String( Date.now() )+ String( Math.random()).replace( '.', '_' ) + '_tmp~';
            var randomSASSFile = randomDirname + '/' + type + '.scss';
            var randomOutputSASSFile = randomDirname + '/' + type + '.css';

            FS.mkdirSync( randomDirname );
            FS.writeFileSync( randomSASSFile, output );

            return ED.syncRun( SASSCompile );

            function SASSCompile( done, obj ){
                Compass.compile({
                    sassDir: randomDirname,
                    cssDir: randomDirname,
                    lineComments: false
                }, function( e ){

                    if( e ){
                        done( e );
                    }
                    else {
                        var compileOutput = FS.readFileSync( randomOutputSASSFile).toString();
//                        FS.unlinkSync( randomSASSFile );
//                        FS.unlinkSync( randomOutputSASSFile );
//                        FS.rmdirSync( randomDirname );
                        done( e, compileOutput );
                    }
                });
            }

        }
    });
})();