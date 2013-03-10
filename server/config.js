var Path = NodeModules.require( 'path' );

ED.config = {
    SASS_BASE: Path.resolve( '.', 'public/sass' ),
    TEMPLATE_PATH: Path.resolve( '.', 'server/template' )
};