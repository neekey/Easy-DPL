(function( App ){

    App.Utils.namespace = function( obj, namespace, value ){

        var origin = obj;

        namespace.split( '.').forEach(function( chunk, index, arr ){

            var ifLast = index == ( arr.length - 1 );

            // 若为数组成员
            if(_.last(chunk) == ']' ){
                var name = chunk.substring( 0, chunk.indexOf( '[' ) );
                if( !(name in obj)){
                    obj[ name ] = [];
                }

                // 新成员还是旧成员
                if(chunk.indexOf('[]') >= 0){
                    if( ifLast ){
                        obj[ name ].push( value );
                    }
                    else {
                        var newObj = {};
                        obj[ name ].push( newObj );
                        obj = newObj;
                    }

                }
                else {
                    if( ifLast ){
                        obj[ name ][ index ] = value;
                    }
                    else {
                        var index = parseInt(chunk.substring(chunk.indexOf('[') + 1, chunk.indexOf(']')));
                        var newObj = obj[ name ][ index ] || {};
                        obj[ name ][ index ] = newObj;
                        obj = newObj;
                    }
                }
            }
            else {

                if( ifLast ){
                    obj[ chunk ] = value;
                }
                else {
                    if( !(chunk in obj ) ){
                        obj[ chunk ] = {};
                    }
                    obj = obj[ chunk ];
                }
            }
        });

        return origin;
    };

})( ED );