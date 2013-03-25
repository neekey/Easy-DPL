ED.Config.JSON.actionForm = {

    baseClass: {
        "title": "基础类名",
        "type": "baseClass",
        "unfold": true,
        "groups": [
            {
                "label": "类名",
                "control": {
                    "type": "input",
                    "data-key": "baseClass",
                    "value": "mb"
                }
            }
        ],
        "actions": [
            {
                "text": "保存",
                "class": "button-operate-save"
            }
        ]
    },
    base: {
        "title": "全局默认样式（将影响所有的Button）",
        "type": "base",
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
                "text": "保存",
                "class": "button-operate-save"
            }
        ]
    },
    types: {
        "title": "按钮类型:{{name}}",
        "type": "type",
        "groups": [
            {
                "label": "名称",
                "control": {
                    "type": "input",
                    "data-key": "types[index].name",
                    "value": "{{name}}"
                }
            }
        ],
        "stats": {
            "normal": {
                "groups": [
                    {
                        "label": "背景（纯色）",
                        "control": {
                            "type": "input",
                            "placeholder": "grey",
                            "class": "J_ColorTrigger",
                            "data-key": "types[index].content.rules.normal[]",
                            "data-value": "background-color: {value};"
                        }
                    },
                    {
                        "label": "背景（渐变）",
                        "control": {
                            "type": "input",
                            "placeholder": "#FB8E50,#F84006",
                            "class": "J_ColorTrigger",
                            "data-key": "types[index].content.rules.normal[]",
                            "data-value": "@include setButtonBg({value});"
                        }
                    },
                    {
                        "label": "边框",
                        "control": {
                            "type": "input",
                            "placeholder": "1px solid #ccc",
                            "data-key": "types[index].content.rules.normal[]",
                            "data-value": "border: {value};"
                        }
                    },
                    {
                        "label": "阴影",
                        "control": {
                            "type": "input",
                            "placeholder": "1px 1px 5px grey",
                            "data-key": "types[index].content.rules.normal[]",
                            "data-value": "@include box-shadow({value});"
                        }
                    },
                    {
                        "label": "字体颜色",
                        "control": {
                            "type": "input",
                            "placeholder": "#333",
                            "class": "J_ColorTrigger",
                            "data-key": "types[index].content.rules.normal[]",
                            "data-value": "color: {value};"
                        }
                    },
                    {
                        "label": "圆角(px)",
                        "control": {
                            "type": "input",
                            "placeholder": "5",
                            "inputType": "number",
                            "data-key": "types[index].content.rules.normal[]",
                            "data-value": "@include border-radius({value}px);"
                        }
                    }
                ]
            },
            "hover": {
                "groups": [
                    {
                        "label": "背景（纯色）",
                        "control": {
                            "type": "input",
                            "placeholder": "grey",
                            "class": "J_ColorTrigger",
                            "data-key": "types[index].content.rules.hover[]",
                            "data-value": "background-color: {value};"
                        }
                    },
                    {
                        "label": "背景（渐变）",
                        "control": {
                            "type": "input",
                            "placeholder": "#FB8E50,#F84006",
                            "class": "J_ColorTrigger",
                            "data-key": "types[index].content.rules.hover[]",
                            "data-value": "@include setButtonBg({value});"
                        }
                    },
                    {
                        "label": "边框",
                        "control": {
                            "type": "input",
                            "placeholder": "1px solid #ccc",
                            "data-key": "types[index].content.rules.hover[]",
                            "data-value": "border: {value};"
                        }
                    },
                    {
                        "label": "阴影",
                        "control": {
                            "type": "input",
                            "placeholder": "1px 1px 5px grey",
                            "data-key": "types[index].content.rules.hover[]",
                            "data-value": "@include box-shadow({value});"
                        }
                    },
                    {
                        "label": "字体颜色",
                        "control": {
                            "type": "input",
                            "placeholder": "#333",
                            "class": "J_ColorTrigger",
                            "data-key": "types[index].content.rules.hover[]",
                            "data-value": "color: {value};"
                        }
                    },
                    {
                        "label": "圆角(px)",
                        "control": {
                            "type": "input",
                            "placeholder": "5",
                            "inputType": "number",
                            "data-key": "types[index].content.rules.hover[]",
                            "data-value": "@include border-radius({value}px);"
                        }
                    }
                ]
            }
        },
        "actions": [
            {
                "text": "保存",
                "class": "button-operate-save"
            }
        ]
    },
    sizes: {
        "title": "按钮尺寸:{{name}}",
        "type": "size",
        "groups": [
            {
                "label": "名称",
                "control": {
                    "type": "input",
                    "data-key": "sizes[index].name",
                    "value": "{{name}}"
                }
            }
        ],
        "stats": {
            "normal": {
                "groups": [
                    {
                        "label": "背景（纯色）",
                        "control": {
                            "type": "input",
                            "placeholder": "grey",
                            "class": "J_ColorTrigger",
                            "data-key": "sizes[index].content.rules.normal[]",
                            "data-value": "background-color: {value};"
                        }
                    },
                    {
                        "label": "背景（渐变）",
                        "control": {
                            "type": "input",
                            "placeholder": "#FB8E50,#F84006",
                            "class": "J_ColorTrigger",
                            "data-key": "sizes[index].content.rules.normal[]",
                            "data-value": "@include setButtonBg({value});"
                        }
                    },
                    {
                        "label": "边框",
                        "control": {
                            "type": "input",
                            "placeholder": "1px solid #ccc",
                            "data-key": "sizes[index].content.rules.normal[]",
                            "data-value": "border: {value};"
                        }
                    },
                    {
                        "label": "阴影",
                        "control": {
                            "type": "input",
                            "placeholder": "1px 1px 5px grey",
                            "data-key": "sizes[index].content.rules.normal[]",
                            "data-value": "@include box-shadow({value});"
                        }
                    },
                    {
                        "label": "字体颜色",
                        "control": {
                            "type": "input",
                            "placeholder": "#333",
                            "class": "J_ColorTrigger",
                            "data-key": "sizes[index].content.rules.normal[]",
                            "data-value": "color: {value};"
                        }
                    },
                    {
                        "label": "圆角(px)",
                        "control": {
                            "type": "input",
                            "placeholder": "5",
                            "inputType": "number",
                            "data-key": "sizes[index].content.rules.normal[]",
                            "data-value": "@include border-radius({value}px);"
                        }
                    }
                ]
            },
            "hover": {
                "groups": [
                    {
                        "label": "背景（纯色）",
                        "control": {
                            "type": "input",
                            "placeholder": "grey",
                            "class": "J_ColorTrigger",
                            "data-key": "sizes[index].content.rules.hover[]",
                            "data-value": "background-color: {value};"
                        }
                    },
                    {
                        "label": "背景（渐变）",
                        "control": {
                            "type": "input",
                            "placeholder": "#FB8E50,#F84006",
                            "class": "J_ColorTrigger",
                            "data-key": "sizes[index].content.rules.hover[]",
                            "data-value": "@include setButtonBg({value});"
                        }
                    },
                    {
                        "label": "边框",
                        "control": {
                            "type": "input",
                            "placeholder": "1px solid #ccc",
                            "data-key": "sizes[index].content.rules.hover[]",
                            "data-value": "border: {value};"
                        }
                    },
                    {
                        "label": "阴影",
                        "control": {
                            "type": "input",
                            "placeholder": "1px 1px 5px grey",
                            "data-key": "sizes[index].content.rules.hover[]",
                            "data-value": "@include box-shadow({value});"
                        }
                    },
                    {
                        "label": "字体颜色",
                        "control": {
                            "type": "input",
                            "placeholder": "#333",
                            "class": "J_ColorTrigger",
                            "data-key": "sizes[index].content.rules.hover[]",
                            "data-value": "color: {value};"
                        }
                    },
                    {
                        "label": "圆角(px)",
                        "control": {
                            "type": "input",
                            "placeholder": "5",
                            "inputType": "number",
                            "data-key": "sizes[index].content.rules.hover[]",
                            "data-value": "@include border-radius({value}px);"
                        }
                    }
                ]
            }
        },
        "actions": [
            {
                "text": "保存",
                "class": "button-operate-save"
            }
        ]
    },
    customs: {
        "$index": null,
        "title": "自定义按钮类:{{selector}}",
        "type": "custom",
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
                "text": "保存",
                "class": "button-operate-save"
            }
        ]
    }
};