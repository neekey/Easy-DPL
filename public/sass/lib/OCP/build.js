var Exec = require('child_process').exec;

/**
 * 用于log的颜色
 * @type {{lightGreen: string, red: string, reset: string}}
 */

var COLOR = {
    lightGreen  : "\033[1;32m",
    red         : "\033[0;31m",
    reset       : "\033[0m"
};

/**
 * 源文件和Release的compass 编译配置
 */

var TASK_CONFIGS = {

    VERSION: '1.0.0',

    SOURCE: {
        '--css-dir': 'css',
        '--sass-dir': 'sass',
        '--output-style': 'nested'
    },

    RELEASE: {
        '--css-dir': '../../release/dpl/',
        '--sass-dir': 'sass',
        '--output-style': 'compressed'
    }
};

// Build Source
ExecuteCommand( BuildCommand( TASK_CONFIGS.SOURCE ), function( err ){
    if( err ){
        console.log( tint( 'red', 'Source' ) + ' 编译失败!' );
    }
    else {
        console.log( tint( 'lightGreen', 'Source' ) + ' 编译成功!' );
    }
});

// Build Release
// 添加version
TASK_CONFIGS.RELEASE['--css-dir'] += TASK_CONFIGS.VERSION;
ExecuteCommand( BuildCommand( TASK_CONFIGS.RELEASE ), function( err ){
    if( err ){
        console.log( tint( 'red', 'Release - ' + TASK_CONFIGS.VERSION ) + ' 编译失败!' );
    }
    else {
        console.log( tint( 'lightGreen', 'Release - ' + TASK_CONFIGS.VERSION ) + '  编译成功!' );
    }
});


/**
 * 根据配置信息生成命令字符串
 * @param {Object} config
 * @return {string}
 */

function BuildCommand( config ){
    var command = 'compass compile';
    var key;

    for( key in config ){
        command += ( ' ' + key + ' ' + config[ key ] );
    }

    return command;
}

/**
 * 执行命令
 * @param {String} command
 * @param next
 */

function ExecuteCommand( command, next ){

    function output( error, stdout, stderr ) {

        console.log( '\nCompass output:\n' );
        console.log( stdout );

        // Debug info 是从这边输出的
        console.log( stderr );

        if ( error !== null ) {
            console.error( error );
            next( error );
        }
        else {
            next( null );
        }
    }

    Exec( command, output );
}

/**
 * 为字符串染色
 * @param color
 * @param text
 * @return {String}
 */

function tint( color, text ){
    return COLOR[ color ] + text + COLOR[ 'reset' ];
}

