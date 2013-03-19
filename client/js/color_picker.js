Meteor.startup(function(){
    ColorPicker(
        $('.J_ColorPicker')[0],
        function(hex, hsv, rgb) {
            document.body.style.backgroundColor = hex;
            console.log( hex );
        });
});