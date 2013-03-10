(function(){

    console.log( 'hello' );
    var formCollections = new Meteor.Collection();
    var meta_data = [
        {
            "title": "设置自动组合的样式基础类名",
            "groups": [
                {
                    "label": "类名",
                    "control": {
                        "type": "input",
                        "name": "."
                    }
                }
            ],
            "actions": [
                {
                    "text": "设置",
                    "hook": "",
                    "type": "main",
                    "name": "baseClass"
                }
            ]
        },
        {
            "title": "设置按钮默认样式",
            "groups": [
                {
                    "label": "设置样式",
                    "control": {
                        "type": "textarea",
                        "name": "scss"
                    }
                }
            ],
            "actions": [
                {
                    "text": "设置",
                    "hook": "",
                    "type": "main",
                    "name": "base"
                }
            ]
        },
        {
            "title": "添加新的按钮类型或者独立的按钮",
            "groups": [
                {
                    "label": "类型",
                    "control": {
                        "type": "select",
                        "class": "button-operate-type",
                        "value": "",
                        "hook": "",
                        "options": [
                            {
                                "value": "types[]",
                                "text": "新建按钮风格"
                            },
                            {
                                "value": "sizes[]",
                                "text": "新建按钮尺寸"
                            }
                        ]
                    }
                },
                {
                    "label": "名称",
                    "control": {
                        "type": "input",
                        "name": "name",
                        "hook": ""
                    }
                },
                {
                    "label": "设置样式",
                    "control": {
                        "type": "textarea",
                        "name": "content.scss",
                        "value": "",
                        "hook": ""
                    }
                }

            ],
            "actions": [
                {
                    "text": "添加",
                    "hook": "",
                    "type": "main",
                    "name": "types[]"
                }
            ]
        },
        {
            "title": "添加自定义按钮类",
            "groups": [
                {
                    "label": "类名",
                    "control": {
                        "type": "input",
                        "name": "selector"
                    }
                },
                {
                    "label": "应用按钮类型",
                    "control": {
                        "type": "input",
                        "name": "type"
                    }
                },
                {
                    "label": "应用按钮尺寸",
                    "control": {
                        "type": "input",
                        "name": "size"
                    }
                },
                {
                    "label": "设置样式",
                    "control": {
                        "type": "textarea",
                        "name": "content.scss"
                    }
                }
            ],
            "actions": [
                {
                    "text": "添加",
                    "hook": "",
                    "type": "main",
                    "name": "customs[]"
                }
            ]
        }
    ];

    meta_data.forEach(function( data, index ){
        data.index = index;
        formCollections.insert( data );
    });

    Template.buttonOperate.formData = function(){
        return formCollections.find({});
    };

    Template.buttonOperate.equal = function( a, b ){
        return a === b;
    };
})();