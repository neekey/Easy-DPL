;(function(){

    var S = KISSY;
    
    function HTMLEscape( html ){
        return String(html)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    var SnapHook = '.J_Snap';
    var SnapPrependHook = '.J_SnapPrepend';

    S.all( SnapHook).each(function( snap ){
        snap = S.one( snap );
        var snapEscapedHTML = '<code>' + HTMLEscape( snap.html() ) + '</code>';

        snap.html( snapEscapedHTML );
    });

//    S.all( SnapPrependHook ).each(function( snap ){
//        snap = S.one( snap );
//        var snapNew = S.DOM.create( '<pre id="pre"><code>' + HTMLEscape( snap.html() ) + '</code></pre>' );
//
//        snap.before( snapNew );
//    });
})();

