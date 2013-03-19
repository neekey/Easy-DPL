(function( App ){

    var Data = App.Data.SASS = new Meteor.Collection();

    var DefaultData = {
        "base": {
            "mixins": [],
            "scss": "",
            "rules": []
        },
        "baseClass": "btn",
        "types": [],
        "sizes": [],
        "customs": []
    };

    // 初始数据为空对象
    Data.insert({ data: JSON.stringify( DefaultData )});

})( ED );