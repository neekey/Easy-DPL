(function(){

    var Collections = new Meteor.Collection();
    var meta_data = {};

    Collections.insert( { data: JSON.stringify( meta_data ) } );

    Template.buttonUserMods.data = function(){
        var data = JSON.parse(Collections.findOne({}).data);
        data.sizes && data.sizes.forEach(function( s, index ){
            s.index = index;
        });
        data.types && data.types.forEach(function( s, index ){
            s.index = index;
        });
        data.customs && data.customs.forEach(function( s, index ){
            s.index = index;
        });
        console.log( 'handled data: ', data );
        return data;
    };

    Template.buttonOperate.events({
        'change .button-operate-type': function( e ){
            e.preventDefault();
            var select = $(e.currentTarget);
            var type = select.val();
            var form = select.parents( 'form' );
            form.find( '.button-operate-action').attr( 'name', type );
        },

        'click .button-operate-action': function( e ){
            e.preventDefault();
            var trigger = $(e.currentTarget);
            var form = trigger.parents( 'form' );
            var elements = form.get(0).elements;
            var triggerName = trigger.attr( 'name' );
            var rootAttr;
            var isArray = triggerName.indexOf( '[]' ) >= 0;

            debugger;

            var data = JSON.parse(Collections.findOne({}).data);
            var targetObj;

            if( isArray ){
                rootAttr = triggerName.substring( 0, triggerName.indexOf( '[' ) );
                if( !( rootAttr in data ) ){
                    data[ rootAttr ] = [];
                }
                data[ rootAttr ].push(( targetObj = {}));
            }
            else {
                rootAttr =  triggerName;
                if( rootAttr in data ){
                    targetObj = data[ rootAttr ];
                }
                else {
                    targetObj = data[ rootAttr ] = {};
                }
            }

            $(elements).each(function( index, elem ){
                elem = $( elem );
                var name = elem.attr( 'name' );
                var value = elem.val();

                if( name ){
                    if( name == '.' ){
                        data[ rootAttr ] = value;
                    }
                    else {
                        var segs = name.split( '.' );
                        var preObj = targetObj;
                        segs.forEach(function( seg, index ){

                            if( seg ){

                                if( index == ( segs.length - 1 ) ){
                                    preObj[ seg ] = value;
                                }
                                else {
                                    if( !( seg in preObj ) ){
                                        preObj[ seg ] = {};
                                    }
                                    preObj = preObj[ seg ];
                                }
                            }
                        });
                    }
                }
            });

            Collections.update({}, { data: JSON.stringify( data ) } );
        }
    });
})();