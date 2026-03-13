// 本地 Live2D 看板娘配置覆盖
// 覆盖 load.js 中的模型路径为相对路径

// 在 load.js 执行后修改配置
(function() {
    // 等待 load.js 加载完成
    const checkAndFix = function() {
        if (typeof initConfig !== 'undefined') {
            // 修改模型路径为相对路径
            initConfig.model = [
                "./live2d/Diana/Diana.model3.json",
                "./live2d/Ava/Ava.model3.json"
            ];
            console.log('[Live2D] 模型路径已更新为本地路径');
        } else {
            // 如果 initConfig 还未定义，稍后重试
            setTimeout(checkAndFix, 100);
        }
    };
    
    // 立即检查
    checkAndFix();
})();
