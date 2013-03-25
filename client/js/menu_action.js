(function( App){

    var ACTION_FORM_DATA = App.Config.JSON.actionForm;
    var SASS_DATA = App.Data.SASS;
    var Utils = App.Utils;

    Meteor.startup(function(){
        // 默认添加 类名设置和全局样式设置
        addActionForm( 'baseClass' );
        addActionForm( 'base' );
        compileAllFormData();
    });

    // 绑定按钮事件，添加表单
    Template.buttonActionMenu.events({

        'click .J_ButtonActionTrigger': function( e ){
            var trigger = $( e.currentTarget );
            var dataType = trigger.attr( 'data-type' );
            var inputs = trigger.siblings( 'input' );
            var haveRenderData = inputs.length > 0;
            var renderData = haveRenderData ? {} : null;

            inputs.each(function( index, input ){
                var ipt = $( input );
                var key = ipt.attr( 'data-var' );
                renderData[ key ] = ipt.val();
            });

            addActionForm( dataType, renderData );
            compileAllFormData();

            // 清空input
            inputs.val( '' );
        }
    });

    Template.buttonOperate.equal =
        Template.buttonOperateGroups.equal =
        function( a, b ){
        return a === b;
    };

    function compileAllFormData(){
        var buttonOperateList = $( '.J_ButtonOperateList' );
        var elements = buttonOperateList.find( '[data-key]' );

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

    function actionFormDataHandle( type, data ){
        // 检查对应的type是不是数组
        var sassData = JSON.parse( SASS_DATA.findOne({}).data );

        if(_.isArray( sassData[ type ] ) ){

            sassData[ type ].push({});
            SASS_DATA.update({}, { data: JSON.stringify( sassData )});

            // 若为数组，则设置唯一的索引值
            var index = sassData[ type ].length - 1;
            data = JSON.parse( JSON.stringify( data ).replace( new RegExp( type + '\\[index\\]', 'g' ), type + '[' + index + ']' ));
        }
        // 添加用于渲染的随机值
        data[ 'random' ] = (Math.random() + '_' + Date.now()).replace( /\./g, '_' );

        return data;
    }

    function addActionForm( type, renderData ){
        var data = ACTION_FORM_DATA[ type ];
        if( data ){

            if( renderData ){
                data = Utils.substitute( data, renderData );
            }
            data = actionFormDataHandle( type, data );
            $( '.J_ButtonOperateList').append( Template.buttonOperate( data ) )
        }
    }

})( ED );