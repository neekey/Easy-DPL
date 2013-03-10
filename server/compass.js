/**
 * Compass plugin for FrontBuild
 * @author <neekey ni184775761@gmail.com>
 */

var path = NodeModules.require('path');
var _ = NodeModules.require('underscore');
var Exec = NodeModules.require('child_process').exec;

var Compass = ED.compass = {};

var defaultConfig = {

    /**
     * @type {String} CSS输出类型: nested, expanded, compact, compressed
     */

    outputStyle: 'nested',

    /**
     * @type {String|String[]} 添加用于@import查找模块路径
     */

    importPath: [ './' ],

    /**
     * @type {Boolean} 是否输出对应的SASS/SCSS源文件行数
     */

    lineComments: true,

    /**
     * @type {String} Sprite 图片功能查找目录
     * todo 暂时sprite这块合并后的sprite图片的路径有点问题，之后看看有没有好的方法解决
     *      另外，如果合并后的图片是生成到sprite制定的目录下，由于现在的temp目录机制，图片可能会直接被删掉...这是个问题
     */

    images: './images',

    /**
     * @type {Boolean=false} 是否强制编译，即使文件没有变化
     */

    force: false
};

Compass.compile = function ( config, next ) {

    // Compass配置
    var compassConfig = _.defaults(
        config || {},
        defaultConfig
    );

    // 构造命令
    var command = "compass compile";
    command += ' --sass-dir="' + compassConfig.sassDir + '" --css-dir="' + compassConfig.cssDir + '"';

    if ( compassConfig.images !== undefined ) {
        command += ' --images-dir="' + compassConfig.images + '"';
    }

    if ( compassConfig.outputStyle !== undefined ) {
        command += ' --output-style ' + compassConfig.outputStyle;
    }

    if ( compassConfig.lineComments === false ) {
        command += ' --no-line-comments';
    }

    if ( compassConfig.force === true ) {
        command += ' --force';
    }

    if ( compassConfig.importPath !== undefined ) {

        if( _.isString( compassConfig.importPath ) ){
            compassConfig.importPath = [ compassConfig.importPath ];
        }

        compassConfig.importPath.forEach(function( importPath ){
            command += ' -I ' + importPath;
        });
    }

    function output( error, stdout, stderr ) {

        console.log( '\n\nCompass output:\n' );
        console.log( stdout );

        // Debug info 是从这边输出的
        console.log( stderr );

        if ( error !== null ) {
            console.error( error );
            next(error);
        }
        else {
            next(null);
        }
    }

    Exec( command, output );
};