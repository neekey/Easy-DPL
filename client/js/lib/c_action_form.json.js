ED.Config.JSON.actionForm = {

    baseClass: {
        "title": "基础类名",
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
        "title": "默认样式",
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
        "title": "按钮类型:{{name}}",
        "groups": [
            {
                "label": "名称",
                "control": {
                    "type": "input",
                    "data-key": "types[index].name",
                    "value": "{{name}}"
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
        "title": "按钮尺寸:{{name}}",
        "groups": [
            {
                "label": "名称",
                "control": {
                    "type": "input",
                    "data-key": "sizes[index].name",
                    "value": "{{name}}"
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
        "title": "自定义按钮类:{{selector}}",
        "groups": [
            {
                "label": "类名",
                "control": {
                    "type": "input",
                    "data-key": "customs[index].selector",
                    "value": "{{selector}}"
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