(function( App ){

    var Data = App.Data.Preview = new Meteor.Collection();

    var DefaultData = {
        "html": "",
        "css": ""
    };

    // 初始数据为空对象
    Data.insert( DefaultData );

})( ED );