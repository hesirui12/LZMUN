// 本地 Live2D 看板娘配置 - 在 load.js 之前加载
// 通过 Object.defineProperty 拦截 initConfig 的赋值

(function() {
    'use strict';
    
    // 保存原始的 window.onload
    const originalOnload = window.onload;
    
    // 拦截 initConfig 的定义
    Object.defineProperty(window, 'initConfig', {
        configurable: true,
        enumerable: true,
        get: function() {
            return this._initConfig;
        },
        set: function(value) {
            // 修改模型路径为相对路径
            if (value && value.model) {
                value.model = [
                    "./live2d/Diana/Diana.model3.json",
                    "./live2d/Ava/Ava.model3.json"
                ];
                console.log('[Live2D] 模型路径已更新为本地路径:', value.model);
            }
            this._initConfig = value;
        }
    });
    
    // 拦截 window.onload 的赋值
    Object.defineProperty(window, 'onload', {
        configurable: true,
        enumerable: true,
        get: function() {
            return this._onload;
        },
        set: function(value) {
            // 如果是 load.js 设置的 加载圣·嘉然，包装它
            if (value && value.name === '加载圣·嘉然') {
                this._onload = function() {
                    // 确保 initConfig 已经设置
                    if (typeof initConfig !== 'undefined' && initConfig.model) {
                        initConfig.model = [
                            "./live2d/Diana/Diana.model3.json",
                            "./live2d/Ava/Ava.model3.json"
                        ];
                    }
                    value();
                };
            } else {
                this._onload = value;
            }
        }
    });
})();
