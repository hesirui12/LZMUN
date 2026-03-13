// 本地 Live2D 看板娘配置覆盖
// 覆盖 load.js 中的模型路径为相对路径

// 保存原始的加载函数
const originalLoad = window.onload;

window.onload = function() {
    // 修改 initConfig 的模型路径
    if (typeof initConfig !== 'undefined') {
        initConfig.model = [
            "./live2d/Diana/Diana.model3.json",
            "./live2d/Ava/Ava.model3.json"
        ];
    }
    
    // 调用原始的加载函数
    if (typeof 加载圣·嘉然 === 'function') {
        加载圣·嘉然();
    }
};
