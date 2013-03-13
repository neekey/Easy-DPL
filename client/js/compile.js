(function( App ){

    var SASS_DATA = App.Data.SASS;
    var PreviewData = App.Data.Preview;
    var data = SASS_DATA.find({});
    var HTMLData = App.Data.Preview;

    window.hand = data.observeChanges({
        'changed': function( id, newObj ){
            if( newObj.data ){
                Meteor.call( 'compile', 'button', JSON.parse(newObj.data), function( e, css ){
                    if( e ){
                        alert( JSON.stringify( e ) );
                    }
                    else {
                        PreviewData.update({}, { $set: { css: css } });
                        HTMLData.update({}, { $set: { html: generateAllSelector( JSON.parse(newObj.data) )}})

                    }
                });
            }
        }
    });

    function generateAllSelector( data ){
        // 先找到base
        var baseClass = data.baseClass;
        var types = [ 'default' ];
        var sizes = [ 'default' ];
        var customs = [];
        var selectors = [];
        var HTML = '';

        data.types.forEach(function( type ){
            types.push( type.name );
        });
        data.sizes.forEach(function( size ){
            sizes.push( size.name );
        });
        data.customs.forEach(function( custom){
            customs.push( custom.selector );
        });

        types = _.uniq( types );
        sizes = _.uniq( sizes );
        customs = _.uniq( customs );

        sizes.forEach(function( size ){
            types.forEach(function( type ){

                if( size && type ){
                    var selector = '.' + baseClass;
                    if( size != 'default' ){
                        selector += '-' + size;
                    }
                    if( type != 'default' ){
                        selector += '-' + type;
                    }
                    selectors.push( selector );
                }
            });
        });

        selectors = selectors.concat( customs );
        selectors.forEach(function( selector ){

            var value = selector.substring( 1 );
            var type;
            if( selector[0] == '.' ){
                type = 'class';
            }
            else if( selector[ 0 ] == '#' ){
                type = 'id';
            }

            if( value && type ){

                HTML += '<a href="#"' + type + '="' + value + '">' + selector + '</a>';
            }
        });

        return HTML;
    }

})( ED );