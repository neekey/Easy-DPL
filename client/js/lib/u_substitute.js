(function( App){

    var SUBSTITUTE_REG = /\\?\{{([^{{}}]+)\}}/g;
    var EMPTY = '';

    App.Utils.substitute = function (str, o, regexp) {

        var isObject = false;

        if ( typeof str == 'object' ){
            isObject = true;
            str = JSON.stringify( str );
        }
        if (typeof str != 'string' || !o) {
            return str;
        }

        var result = str.replace(regexp || SUBSTITUTE_REG, function (match, name) {
            if (match.charAt(0) === '\\') {
                return match.slice(1);
            }
            return (o[name] === undefined) ? EMPTY : o[name];
        });

        if( isObject ){
            return JSON.parse( result );
        }
        else {
            return result;
        }
    };
})(ED);