<template>
  <div class="home-page">
    <!-- 首页横幅 -->
    <section class="hero-section">
      <div class="decoration circle-1"></div>
      <div class="decoration circle-2"></div>
      <div class="decoration dots-pattern"></div>
      <div class="decoration medical-icon medical-icon-1">
        <i class="fas fa-heartbeat"></i>
      </div>
      <div class="decoration medical-icon medical-icon-2">
        <i class="fas fa-stethoscope"></i>
      </div>
      <div class="decoration medical-icon medical-icon-3">
        <i class="fas fa-pills"></i>
      </div>
      <div class="decoration medical-icon medical-icon-4">
        <i class="fas fa-brain"></i>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">医信团队</h1>
            <p class="hero-subtitle">创新医疗信息技术，服务健康中国建设</p>
            <p class="hero-description">
              我们是一支来自温州医科大学信息管理与信息系统专业的创新团队，致力于探索信息技术与医疗健康的深度融合。
            </p>
            <div class="hero-buttons">
              <router-link to="/members" class="btn primary">
                查看团队成员 <i class="fas fa-users"></i>
              </router-link>
              <router-link to="/contact" class="btn secondary">
                联系我们 <i class="fas fa-envelope"></i>
              </router-link>
            </div>
          </div>
          <div class="hero-image">
            <div class="glow"></div>
            <div class="img-container">
              <img :src="require('@/assets/images/members/团队logo.png')" alt="团队Logo">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队特色 -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">我们的特色</h2>
        <div class="features-grid">
          <div class="feature-card" style="--feature-color: var(--teal); --feature-gradient: var(--teal-gradient);">
            <div class="feature-icon">
              <i class="fas fa-laptop-medical"></i>
            </div>
            <h3 class="feature-title">医学信息融合</h3>
            <p class="feature-desc">
              将信息技术与医学知识深度融合，打造专业的医疗信息解决方案。
            </p>
          </div>
          <div class="feature-card" style="--feature-color: var(--orange); --feature-gradient: var(--orange-gradient);">
            <div class="feature-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3 class="feature-title">数据驱动决策</h3>
            <p class="feature-desc">
              通过数据分析与可视化，为医疗健康决策提供可靠依据。
            </p>
          </div>
          <div class="feature-card" style="--feature-color: var(--purple); --feature-gradient: var(--purple-gradient);">
            <div class="feature-icon">
              <i class="fas fa-users-cog"></i>
            </div>
            <h3 class="feature-title">多元人才团队</h3>
            <p class="feature-desc">
              团队成员背景多元，覆盖数据分析、系统开发、项目管理等多个领域。
            </p>
          </div>
          <div class="feature-card" style="--feature-color: var(--green); --feature-gradient: var(--green-gradient);">
            <div class="feature-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="feature-title">安全可靠保障</h3>
            <p class="feature-desc">
              注重医疗数据安全，确保患者隐私与信息系统安全可靠。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队成员预览 -->
    <section class="team-preview">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">核心成员</h2>
          <router-link to="/members" class="view-all">查看全部 <i class="fas fa-arrow-right"></i></router-link>
        </div>
        <div class="team-slider-container">
          <div class="team-slider" 
               @mousedown="startDrag" 
               @mousemove="doDrag" 
               @mouseup="endDrag" 
               @mouseleave="endDrag"
               @touchstart="startDrag"
               @touchmove="doDrag"
               @touchend="endDrag">
            <div v-for="(member, index) in displayMembers" :key="`${member.id}-${index}`" class="member-card">
              <div class="member-avatar">
                <img :src="require(`@/assets/images/members/${member.image}`)" :alt="member.name">
              </div>
              <div class="member-info">
                <h3 class="member-name">{{ member.name }}</h3>
                <div class="member-position">{{ member.position }}</div>
                <router-link :to="`/member/${member.id}`" class="member-link">
                  查看详情 <i class="fas fa-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
          <div class="slider-controls">
            <button class="slider-btn" @click="scrollPrev">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="slider-btn" @click="scrollNext">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 与我们合作部分 (已删除) -->
    <!-- <section class="contact-cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">与我们合作</h2>
          <p class="cta-desc">我们为医疗机构和健康相关企业提供信息技术解决方案</p>
          <router-link to="/contact" class="cta-btn">
            联系我们 <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  metaInfo: {
    title: '医信团队 - 温州医科大学信管专业创新团队'
  },
  data() {
    return {
      currentIndex: 0,
      autoScrollInterval: null,
      members: [
        { id: 'xieweihao', name: '谢圩浩', position: '数据洞察工程师', image: '谢圩浩.jpg' },
        { id: 'yuxinwei', name: '余昕炜', position: '数据可视化艺术家', image: '余昕炜.jpg' },
        { id: 'shipinghui', name: '史蘋慧', position: '业务拓展先锋', image: '史蘋慧.jpg' },
        { id: 'shiqiyu', name: '石祁煜', position: '智能项目导航员', image: '石祁煜.jpg' },
        { id: 'yaoqi', name: '要琦', position: '架构创新设计师', image: '要琦.jpg' },
        { id: 'baxinyi', name: '巴欣怡', position: '安全守护专家', image: '巴欣怡.jpg' },
        { id: 'jiangyuanjian', name: '蒋远见', position: '用户体验优化师', image: '蒋远见.jpg' }
      ],
      visibleCards: 4,
      isDragging: false,
      startX: 0,
      scrollLeft: 0
    };
  },
  computed: {
    // 获取实际展示的成员列表（包含首尾重复项，用于实现无限滚动）
    displayMembers() {
      // 在原数组前后分别添加几个成员以实现无限滚动
      const lastMembers = this.members.slice(-this.visibleCards);
      const firstMembers = this.members.slice(0, this.visibleCards);
      return [...lastMembers, ...this.members, ...firstMembers];
    }
  },
  mounted() {
    // 延迟初始化，确保DOM已完全渲染
    this.$nextTick(() => {
      this.initSlider();
      this.startAutoScroll();
    });
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    this.stopAutoScroll();
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    initSlider() {
      // 计算可视区域内能显示多少卡片
      const slider = document.querySelector('.team-slider');
      if (!slider || slider.children.length === 0) return;
      
      const sliderContainer = slider.parentElement;
      const cardWidth = slider.children[0].offsetWidth;
      const gap = 20; // gap between cards
      
      this.visibleCards = Math.max(Math.floor(sliderContainer.offsetWidth / (cardWidth + gap)), 1);
      
      // 初始位置设置到原数组的起始位置
      this.currentIndex = this.visibleCards;
      this.updateSliderPosition(false);
    },
    
    startAutoScroll() {
      if (this.autoScrollInterval) {
        clearInterval(this.autoScrollInterval);
      }
      
      this.autoScrollInterval = setInterval(() => {
        if (!this.isDragging) {
          this.scrollNext();
        }
      }, 1500);
    },
    
    stopAutoScroll() {
      if (this.autoScrollInterval) {
        clearInterval(this.autoScrollInterval);
        this.autoScrollInterval = null;
      }
    },
    
    scrollPrev() {
      this.currentIndex--;
      this.updateSliderPosition(true);
    },
    
    scrollNext() {
      this.currentIndex++;
      this.updateSliderPosition(true);
    },
    
    updateSliderPosition(animate = true) {
      const slider = document.querySelector('.team-slider');
      if (!slider || slider.children.length === 0) return;
      
      const cardWidth = slider.children[0].offsetWidth;
      const gap = 20;
      const totalWidth = cardWidth + gap;
      const totalMembers = this.members.length;
      
      // 设置过渡动画
      slider.style.transition = animate ? 'transform 0.5s ease' : 'none';
      slider.style.transform = `translateX(-${this.currentIndex * totalWidth}px)`;
      
      // 检查是否需要无缝跳转
      if (animate) {
        clearTimeout(this._jumpTimeout);
        this._jumpTimeout = setTimeout(() => {
          if (this.currentIndex <= 0) {
            // 向左滚动越界
            this.currentIndex = totalMembers;
            slider.style.transition = 'none';
            slider.style.transform = `translateX(-${this.currentIndex * totalWidth}px)`;
          } else if (this.currentIndex >= totalMembers + this.visibleCards) {
            // 向右滚动越界
            this.currentIndex = this.visibleCards;
            slider.style.transition = 'none';
            slider.style.transform = `translateX(-${this.currentIndex * totalWidth}px)`;
          }
        }, 500); // 等待动画完成
      }
    },
    
    handleResize() {
      this.initSlider();
    },
    
    // 触摸和鼠标拖动支持
    startDrag(e) {
      this.isDragging = true;
      this.startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
      
      // 确保使用一致的宽度计算方式
      const slider = document.querySelector('.team-slider');
      const cardWidth = slider.children[0].offsetWidth;
      const gap = 20;
      this.scrollLeft = this.currentIndex * (cardWidth + gap);
      
      this.stopAutoScroll();
    },
    
    doDrag(e) {
      if (!this.isDragging) return;
      e.preventDefault();
      
      const slider = document.querySelector('.team-slider');
      const x = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      const distance = this.startX - x;
      
      slider.style.transition = 'none';
      slider.style.transform = `translateX(-${this.scrollLeft + distance}px)`;
    },
    
    endDrag(e) {
      if (!this.isDragging) return;
      this.isDragging = false;
      
      const slider = document.querySelector('.team-slider');
      const cardWidth = slider.children[0].offsetWidth;
      const gap = 20;
      const x = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
      const distance = this.startX - x;
      
      // 根据拖动距离判断是否切换到下一张/上一张
      if (Math.abs(distance) > (cardWidth + gap) / 3) {
        this.currentIndex += distance > 0 ? 1 : -1;
      }
      
      this.updateSliderPosition(true);
      this.startAutoScroll();
    }
  }
}
</script>

<style scoped>
/* 首页横幅样式 */
.hero-section {
  padding: 100px 0;
  background-color: var(--white);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(235, 245, 255, 0.9) 0%, rgba(245, 250, 255, 0.85) 50%, rgba(230, 240, 255, 0.8) 100%);
  z-index: 0;
}

.hero-section::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 70px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='white' opacity='0.3'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover;
  z-index: 1;
}

/* 添加装饰元素 */
.hero-section .decoration {
  position: absolute;
  z-index: 1;
}

.hero-section .circle-1 {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 123, 255, 0.05) 0%, rgba(0, 123, 255, 0) 70%);
  top: -150px;
  right: 10%;
}

.hero-section .circle-2 {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 183, 255, 0.05) 0%, rgba(0, 183, 255, 0) 70%);
  bottom: -100px;
  left: 5%;
}

.hero-section .dots-pattern {
  position: absolute;
  top: 50px;
  right: 15%;
  width: 180px;
  height: 180px;
  background-image: radial-gradient(circle, rgba(0, 123, 255, 0.1) 1px, transparent 1px);
  background-size: 15px 15px;
  opacity: 0.7;
}

.hero-section .medical-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  color: var(--primary-color);
  opacity: 0.65;
  backdrop-filter: blur(2px);
  transition: all 0.3s ease;
  z-index: 10;
}

.hero-section .medical-icon:hover {
  transform: translateY(-3px) scale(1.05);
  opacity: 0.8;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.hero-section .medical-icon i {
  font-size: 20px;
}

.hero-section .medical-icon-1 {
  top: 15%;
  left: 8%;
}

.hero-section .medical-icon-2 {
  top: 25%;
  right: 10%;
}

.hero-section .medical-icon-3 {
  top: 45%;
  left: 12%;
}

.hero-section .medical-icon-4 {
  top: 55%;
  right: 15%;
}

.hero-section .medical-icon-5 {
  top: 30%;
  right: 12%;
}

.hero-section .medical-icon-6 {
  top: 45%;
  left: 8%;
}

.hero-section .medical-icon-7 {
  top: 22%;
  left: 25%;
}

.hero-section .medical-icon-8 {
  top: 40%;
  right: 25%;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-text {
  max-width: 600px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 25px;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
  position: relative;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.hero-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 0;
  width: 80px;
  height: 4px;
  background: var(--primary-gradient);
  border-radius: 2px;
  box-shadow: 0 2px 10px rgba(0, 123, 255, 0.2);
}

.hero-subtitle {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 25px;
  color: var(--text-color);
  line-height: 1.4;
  position: relative;
  z-index: 2;
}

.hero-description {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 35px;
  position: relative;
  z-index: 2;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  position: relative;
  z-index: 2;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
}

.btn i {
  margin-left: 10px;
  font-size: 0.9em;
}

.btn.primary {
  background: var(--primary-gradient);
  color: var(--white);
  box-shadow: 0 10px 20px rgba(0, 123, 255, 0.15);
  border: none;
}

.btn.primary:hover {
  box-shadow: 0 15px 25px rgba(0, 123, 255, 0.25);
  transform: translateY(-3px);
}

.btn.secondary {
  background-color: rgba(255, 255, 255, 0.7);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  backdrop-filter: blur(5px);
}

.btn.secondary:hover {
  background-color: var(--primary-color);
  color: var(--white);
  transform: translateY(-3px);
}

.hero-image {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 20px;
  width: 100%;
  max-width: 480px;
  margin-left: auto;
}

.hero-image .img-container {
  position: relative;
  width: 100%;
  max-width: 420px;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0, 123, 255, 0.05) 0%, rgba(0, 183, 255, 0.03) 50%, transparent 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  z-index: -1;
  filter: blur(20px);
  opacity: 0.8;
}

.hero-image::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px dashed rgba(0, 123, 255, 0.1);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  animation: rotate 60s linear infinite;
}

.hero-image .glow {
  position: absolute;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0) 60%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.hero-image:hover .glow {
  opacity: 1;
}

.hero-image img {
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.12));
  transition: transform 0.5s ease, filter 0.5s ease;
}

.hero-image:hover img {
  transform: scale(1.05);
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.18));
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 特色部分样式 */
.features-section {
  padding: 80px 0;
  background-color: var(--secondary-color);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.feature-card {
  background-color: var(--white);
  border-radius: var(--border-radius);
  padding: 40px 30px;
  text-align: center;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  z-index: 1;
  --feature-color: var(--primary-color);
  --feature-gradient: var(--primary-gradient);
}

.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: var(--feature-gradient);
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
}

.feature-card:hover::before {
  width: 100%;
  opacity: 0.05;
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--feature-gradient);
  color: var(--white);
  font-size: 32px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--feature-color);
  position: relative;
  display: inline-block;
}

.feature-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: var(--feature-gradient);
  border-radius: 1.5px;
}

.feature-desc {
  color: var(--text-light);
  line-height: 1.7;
}

/* 团队成员预览样式 */
.team-preview {
  padding: 80px 0;
  background-color: var(--secondary-color);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.view-all {
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
}

.view-all i {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.view-all:hover {
  color: var(--primary-dark);
}

.view-all:hover i {
  transform: translateX(5px);
}

.team-slider-container {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  width: 100%;
  padding: 0;
}

.team-slider {
  display: flex;
  transition: transform 0.5s ease;
  gap: 20px;
  width: 100%;
}

.member-card {
  flex: 0 0 calc(25% - 15px);
  min-width: 220px;
  background-color: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  margin-bottom: 5px;
}

.member-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
}

.member-avatar {
  height: 250px;
  overflow: hidden;
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.member-card:hover .member-avatar img {
  transform: scale(1.05);
}

.member-info {
  padding: 20px;
  text-align: center;
}

.member-name {
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: var(--text-color);
}

.member-position {
  font-size: 0.9rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.member-link {
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.member-link i {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.member-link:hover {
  color: var(--primary-dark);
}

.member-link:hover i {
  transform: translateX(5px);
}

.slider-controls {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 15px;
}

.slider-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--white);
  color: var(--primary-color);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.slider-btn:hover {
  background: var(--primary-color);
  color: var(--white);
  transform: translateY(-3px);
  box-shadow: var(--hover-shadow);
}

/* 响应式设计 */
@media (max-width: 992px) {
  .hero-section {
    padding: 80px 0;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 10px;
  }
  
  .hero-text {
    margin: 0 auto;
    order: 1;
  }
  
  .hero-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-image {
    order: 0;
    margin: 0 auto 30px;
    padding: 15px;
    max-width: 380px;
  }
  
  .hero-image .img-container {
    max-width: 350px;
  }
  
  .hero-image::before {
    opacity: 0.6;
  }
  
  .hero-image::after {
    opacity: 0.5;
  }
  
  .hero-image .glow {
    width: 130%;
    height: 130%;
  }
  
  .member-card {
    flex: 0 0 calc(33.333% - 14px);
  }
  
  .hero-section .circle-1,
  .hero-section .circle-2,
  .hero-section .dots-pattern {
    opacity: 0.5;
    transform: scale(0.8);
  }
  
  .hero-section .medical-icon {
    transform: scale(0.9);
  }
  
  .hero-title {
    font-size: 3.5rem;
  }
}

.hero-image:hover img {
  transform: translateY(-5px);
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2));
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-header {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
  
  .member-card {
    flex: 0 0 calc(50% - 10px);
  }
  
  .hero-section .medical-icon {
    display: block;
    width: 40px;
    height: 40px;
    opacity: 0.6;
  }
  
  .hero-section .medical-icon i {
    font-size: 18px;
  }
  
  .hero-section .dots-pattern {
    opacity: 0.3;
  }
  
  .hero-section .medical-icon-1 {
    top: 10%;
    left: 10%;
  }
  
  .hero-section .medical-icon-2 {
    top: 20%;
    right: 12%;
  }
  
  .hero-section .medical-icon-3 {
    top: 50%;
    left: 8%;
  }
  
  .hero-section .medical-icon-4 {
    top: 60%;
    right: 15%;
  }
  
  .hero-image {
    padding: 15px;
    max-width: 340px;
  }
  
  .hero-image .img-container {
    max-width: 320px;
  }
  
  .hero-image .glow {
    width: 120%;
    height: 120%;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: 10px;
  }
  
  .member-card {
    flex: 0 0 calc(100% - 5px);
  }
  
  .hero-image {
    max-width: 280px;
    padding: 10px;
  }
  
  .hero-image .img-container {
    max-width: 260px;
  }
  
  .hero-section::after {
    height: 40px;
  }
  
  .hero-section .circle-1,
  .hero-section .circle-2 {
    opacity: 0.3;
  }
  
  .hero-image .glow {
    display: none;
  }
  
  .hero-section .medical-icon {
    width: 35px;
    height: 35px;
  }
  
  .hero-section .medical-icon i {
    font-size: 16px;
  }
  
  .hero-section .medical-icon-3,
  .hero-section .medical-icon-4 {
    display: none;
  }
  
  .hero-section .medical-icon-1 {
    top: 10%;
    left: 8%;
  }
  
  .hero-section .medical-icon-2 {
    top: 15%;
    right: 8%;
  }
}
</style> 