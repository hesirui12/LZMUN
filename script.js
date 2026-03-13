/**
 * 柳州模拟联合国 - Live2D 看板娘与交互脚本
 * Liuzhou Model United Nations - Live2D Widget & Interaction Script
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化 Live2D 看板娘
    initLive2D();
    
    // 初始化导航栏滚动效果
    initNavbarScroll();
    
    // 初始化平滑滚动
    initSmoothScroll();
    
    // 初始化表单提交
    initContactForm();
    
    // 初始化滚动动画
    initScrollAnimations();
});

/**
 * 初始化 Live2D 看板娘
 * 使用 live2d-widget 库加载看板娘模型
 */
function initLive2D() {
    // 看板娘问候语
    const messages = [
        '欢迎来到柳州模拟联合国！',
        '你好呀，我是LZMUN的看板娘~',
        '想要了解更多关于模拟联合国的信息吗？',
        '以青年之声，议世界之事！',
        '有任何问题都可以联系我们哦~',
        '期待在大会上见到你！'
    ];
    
    // 检查 L2Dwidget 是否加载成功
    if (typeof L2Dwidget !== 'undefined') {
        L2Dwidget.init({
            // 使用 CDN 上的模型
            model: {
                jsonPath: 'https://cdn.jsdelivr.net/npm/live2d-widget-model-rem/assets/rem.model.json',
                scale: 1
            },
            display: {
                position: 'right',
                width: 280,
                height: 280,
                hOffset: 0,
                vOffset: -20
            },
            mobile: {
                show: true,
                scale: 0.8,
                motion: true
            },
            react: {
                opacityDefault: 0.9,
                opacityOnHover: 1
            },
            dialog: {
                enable: true,
                script: {
                    'tap body': messages[Math.floor(Math.random() * messages.length)],
                    'tap face': '哎呀，不要戳我的脸啦~'
                }
            }
        });
        
        // 添加自定义交互
        setTimeout(() => {
            addLive2DInteractions(messages);
        }, 2000);
    } else {
        console.warn('Live2D widget library not loaded');
    }
}

/**
 * 添加 Live2D 看板娘的额外交互
 */
function addLive2DInteractions(messages) {
    const container = document.getElementById('live2d-container');
    const tooltip = document.getElementById('live2d-tooltip');
    
    if (!container || !tooltip) return;
    
    // 鼠标进入时显示问候
    container.addEventListener('mouseenter', () => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        showTooltip(randomMessage);
    });
    
    // 鼠标离开时隐藏提示
    container.addEventListener('mouseleave', () => {
        hideTooltip();
    });
    
    // 点击看板娘时的反应
    container.addEventListener('click', () => {
        const clickMessages = [
            '嘻嘻，你好活跃呀！',
            '点击联系我们可以获取更多信息哦~',
            '柳州模拟联合国欢迎你的加入！',
            '要不要来参加会议呢？'
        ];
        const message = clickMessages[Math.floor(Math.random() * clickMessages.length)];
        showTooltip(message);
        
        // 3秒后隐藏
        setTimeout(hideTooltip, 3000);
    });
    
    // 定时随机显示消息
    setInterval(() => {
        if (Math.random() > 0.7) {
            const message = messages[Math.floor(Math.random() * messages.length)];
            showTooltip(message);
            setTimeout(hideTooltip, 4000);
        }
    }, 30000); // 每30秒尝试显示一次
}

/**
 * 显示看板娘提示框
 */
function showTooltip(message) {
    const tooltip = document.getElementById('live2d-tooltip');
    if (tooltip) {
        tooltip.textContent = message;
        tooltip.classList.add('show');
    }
}

/**
 * 隐藏看板娘提示框
 */
function hideTooltip() {
    const tooltip = document.getElementById('live2d-tooltip');
    if (tooltip) {
        tooltip.classList.remove('show');
    }
}

/**
 * 初始化导航栏滚动效果
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // 滚动超过100px时添加阴影效果
        if (currentScrollY > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(26, 95, 180, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(26, 95, 180, 0.1)';
        }
        
        lastScrollY = currentScrollY;
    });
}

/**
 * 初始化平滑滚动
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // 减去导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * 初始化联系表单
 */
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(form);
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;
            
            // 模拟提交成功
            showNotification('感谢您的留言！我们会尽快与您联系。', 'success');
            
            // 重置表单
            form.reset();
            
            // 看板娘回应
            setTimeout(() => {
                showTooltip('收到你的留言啦，谢谢你的关注！');
                setTimeout(hideTooltip, 3000);
            }, 500);
        });
    }
}

/**
 * 显示通知消息
 */
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(26, 95, 180, 0.3);
        padding: 16px 24px;
        box-shadow: 0 8px 32px rgba(26, 95, 180, 0.15);
        z-index: 10000;
        transform: translateX(120%);
        transition: transform 0.3s ease;
        max-width: 350px;
    `;
    
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(120%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

/**
 * 初始化滚动动画
 * 使用 Intersection Observer API 实现元素进入视口时的动画
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.glass-card, .section-title');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * 页面加载完成后的欢迎提示
 */
window.addEventListener('load', () => {
    setTimeout(() => {
        showTooltip('欢迎来到柳州模拟联合国官网！');
        setTimeout(hideTooltip, 4000);
    }, 1500);
});

/**
 * 添加键盘快捷键支持
 */
document.addEventListener('keydown', (e) => {
    // ESC 键隐藏看板娘提示
    if (e.key === 'Escape') {
        hideTooltip();
    }
});
