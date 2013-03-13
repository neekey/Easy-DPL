ED.Config.JSON.actionForm = {

    baseClass: {
        "title": "设置自动组合的样式基础类名",
        "groups": [
            {
                "label": "类名",
                "control": {
                    "type": "input",
                    "data-key": "baseClass"
                }
            }
        ],
        "actions": [
            {
                "text": "设置",
                "class": "button-operate-save"
            }
        ]
    },
    base: {
        "title": "设置按钮默认样式",
        "groups": [
            {
                "label": "设置样式",
                "control": {
                    "type": "textarea",
                    "data-key": "base.scss"
                }
            }
        ],
        "actions": [
            {
                "text": "设置",
                "class": "button-operate-save"
            }
        ]
    },
    types: {
        "$index": null,
        "title": "添加新的按钮类型",
        "groups": [
            {
                "label": "名称",
                "control": {
                    "type": "input",
                    "data-key": "types[index].name"
                }
            },
            {
                "label": "设置样式",
                "control": {
                    "type": "textarea",
                    "data-key": "types[index].content.scss"
                }
            }

        ],
        "actions": [
            {
                "text": "添加",
                "class": "button-operate-save"
            }
        ]
    },
    sizes: {
        "$index": null,
        "title": "添加新的按钮尺寸",
        "groups": [
            {
                "label": "名称",
                "control": {
                    "type": "input",
                    "data-key": "sizes[index].name"
                }
            },
            {
                "label": "设置样式",
                "control": {
                    "type": "textarea",
                    "data-key": "sizes[index].content.scss"
                }
            }

        ],
        "actions": [
            {
                "text": "添加",
                "class": "button-operate-save"
            }
        ]
    },
    customs: {
        "$index": null,
        "title": "添加自定义按钮类",
        "groups": [
            {
                "label": "类名",
                "control": {
                    "type": "input",
                    "data-key": "customs[index].selector"
                }
            },
            {
                "label": "应用按钮类型",
                "control": {
                    "type": "input",
                    "data-key": "customs[index].type"
                }
            },
            {
                "label": "应用按钮尺寸",
                "control": {
                    "type": "input",
                    "data-key": "customs[index].size"
                }
            },
            {
                "label": "设置样式",
                "control": {
                    "type": "textarea",
                    "data-key": "customs[index].content.scss"
                }
            }
        ],
        "actions": [
            {
                "text": "添加",
                "class": "button-operate-save"
            }
        ]
    }
};