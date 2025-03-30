<template>
  <div id="app">
    <header-nav />
    <main class="main-content">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <site-footer />
  </div>
</template>

<script>
import HeaderNav from './components/layout/HeaderNav.vue'
import SiteFooter from './components/layout/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    SiteFooter
  }
}
</script>

<style>
/* 全局变量和基础样式 */
:root {
  /* 主要色系 - 更丰富的配色方案 */
  --primary-color: #4361ee;
  --primary-light: #7289da;
  --primary-dark: #3a0ca3;
  --secondary-color: #f8f9fa;
  --text-color: #2b2d42;
  --text-light: #6c757d;
  --white: #ffffff;
  --black: #000000;
  --gray-light: #e9ecef;
  --gray: #adb5bd;
  
  /* 扩展色彩库与梯度 */
  --primary-gradient: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
  --secondary-gradient: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  --accent-color: #f72585;
  --dark-accent: #7209b7;
  --accent-gradient: linear-gradient(135deg, #f72585 0%, #7209b7 100%);
  
  /* 新增丰富色彩 */
  --teal: #4cc9f0;
  --teal-light: #90e0ef;
  --teal-dark: #3a86ff;
  --teal-gradient: linear-gradient(135deg, #4cc9f0 0%, #3a86ff 100%);
  
  --orange: #fb8500;
  --orange-light: #ffb703;
  --orange-dark: #f77f00;
  --orange-gradient: linear-gradient(135deg, #ffb703 0%, #fb8500 100%);
  
  --green: #06d6a0;
  --green-light: #80ed99;
  --green-dark: #2ec4b6;
  --green-gradient: linear-gradient(135deg, #80ed99 0%, #06d6a0 100%);
  
  --purple: #9b5de5;
  --purple-light: #c77dff;
  --purple-dark: #7b2cbf;
  --purple-gradient: linear-gradient(135deg, #c77dff 0%, #7b2cbf 100%);
  
  --pink: #f72585;
  --pink-light: #ff5c8a;
  --pink-dark: #b5179e;
  --pink-gradient: linear-gradient(135deg, #ff5c8a 0%, #b5179e 100%);
  
  /* 功能色彩 */
  --success: #06d6a0;
  --warning: #ffb703;
  --error: #ef476f;
  --info: #4cc9f0;
  
  /* 设计参数 */
  --border-radius: 8px;
  --box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  --hover-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  --transition: all 0.3s ease;
  --max-width: 1200px;
}

/* 重置样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 基础样式 */
body {
  font-family: 'Noto Sans SC', 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--white);
  overflow-x: hidden;
}

/* 应用容器 */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
}

/* 按钮样式 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border-radius: 30px;
  transition: var(--transition);
  cursor: pointer;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  gap: 8px;
  z-index: 1;
}

.btn i {
  font-size: 18px;
}

.btn:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease;
  z-index: -1;
}

.btn:hover:after {
  transform: scaleX(1);
  transform-origin: left;
}

.btn.primary {
  background: var(--primary-gradient);
  color: var(--white);
  box-shadow: 0 4px 15px rgba(67, 97, 238, 0.3);
}

.btn.primary:hover {
  box-shadow: 0 8px 25px rgba(67, 97, 238, 0.5);
  transform: translateY(-3px);
}

.btn.secondary {
  background-color: var(--white);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn.secondary:hover {
  background-color: var(--primary-light);
  color: var(--white);
  border-color: var(--primary-light);
  transform: translateY(-3px);
}

/* 卡片样式 */
.card {
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: var(--transition);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--hover-shadow);
}

/* 标题样式 */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  position: relative;
  text-align: center;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 60px;
  height: 4px;
  background: var(--primary-gradient);
  transform: translateX(-50%);
  border-radius: 2px;
}

/* 页面过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* 滚动动画类 */
.fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 标签样式 */
.tag {
  display: inline-block;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 20px;
  margin-right: 8px;
  margin-bottom: 8px;
  background-color: var(--primary-light);
  color: var(--white);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.6rem;
  }
  
  .container {
    padding: 0 15px;
  }
}
</style>
