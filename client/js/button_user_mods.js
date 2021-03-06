(function( App ){

    var Utils = App.Utils;
    var SASS_DATA = App.Data.SASS;

    Template.buttonOperateList.events({

        'click .button-operate-save': function( e ){
            e.preventDefault();
            var trigger = $(e.currentTarget);
            var form = trigger.parents( 'form' );
            var elements = form.find('[data-key]');

            var data = JSON.parse(SASS_DATA.findOne({}).data);

            $(elements).each(function( index, elem ){
                elem = $( elem );
                var path = elem.attr( 'data-key' );
                if( path ){
                    var value = elem.val() || elem.text();

                    if( value ){
                        var valueAttr = elem.attr( 'data-value');
                        if( valueAttr ){
                            value = Utils.substitute( valueAttr.replace( /\{/g, '{{').replace( /\}/g, '}}' ), { value: value } );
                        }
                        Utils.namespace( data, path, value );
                    }
                }
            });

            SASS_DATA.update({}, { data: JSON.stringify( data ) } );
        }
    });

})( ED );