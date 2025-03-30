<template>
  <div class="about-page">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">关于我们</h1>
        <p class="page-subtitle">了解医信团队的历程与使命</p>
      </div>
    </section>

    <!-- 团队介绍 -->
    <section class="about-intro">
      <div class="container">
        <div class="intro-content">
          <div class="intro-text">
            <h2>专注医疗信息化的创新团队</h2>
            <p>
              医信团队成立于2020年，由一群对医疗信息化充满热情的温州医科大学信息管理与信息系统专业学生组成。
              我们致力于将先进的信息技术与医疗健康领域深度融合，探索创新解决方案，为提升医疗服务质量和效率贡献力量。
            </p>
            <p>
              团队成员各有所长，覆盖数据分析、可视化设计、系统开发、项目管理、信息安全等多个专业领域。
              我们相信，多元的专业背景和紧密的团队协作是创新的源泉。
            </p>
          </div>
          <div class="intro-image">
            <img :src="require('@/assets/images/members/团队logo.png')" alt="团队合影">
          </div>
        </div>
      </div>
    </section>

    <!-- 历程里程碑 -->
    <section class="about-milestones">
      <div class="container">
        <h2 class="section-title">发展历程</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2020年</div>
            <div class="timeline-content">
              <h3>团队成立</h3>
              <p>在温州医科大学信息管理与信息系统专业教师的指导下，医信团队正式成立。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2021年</div>
            <div class="timeline-content">
              <h3>首个项目启动</h3>
              <p>开发医疗数据分析系统，用于分析患者数据并预测潜在风险，获得校级创新项目立项。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2022年</div>
            <div class="timeline-content">
              <h3>成果转化与拓展</h3>
              <p>医疗数据分析系统在本地医院试点应用，同时团队开始拓展健康管理平台项目。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2023年</div>
            <div class="timeline-content">
              <h3>多元化发展</h3>
              <p>团队规模扩大，项目覆盖范围从数据分析扩展到医疗资源分布可视化、临床决策支持等多个领域。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2024年</div>
            <div class="timeline-content">
              <h3>深化产学研合作</h3>
              <p>与医院、企业建立深度合作关系，推动医疗信息化项目落地，探索新的应用场景。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 价值观与使命 -->
    <section class="about-values">
      <div class="container">
        <div class="values-content">
          <div class="values-image">
            <img :src="require('@/assets/images/members/团队logo.png')" alt="团队价值观">
          </div>
          <div class="values-text">
            <h2>我们的使命与价值观</h2>
            <div class="value-item">
              <h3><i class="fas fa-star"></i> 使命</h3>
              <p>运用信息技术助力医疗健康事业发展，推动医疗服务的数字化转型，让每个人都能享受到更优质、更高效的医疗服务。</p>
            </div>
            <div class="value-item">
              <h3><i class="fas fa-compass"></i> 愿景</h3>
              <p>成为医疗信息化领域具有影响力的创新团队，为医疗健康信息化建设贡献专业力量。</p>
            </div>
            <div class="value-item">
              <h3><i class="fas fa-heart"></i> 核心价值观</h3>
              <ul class="values-list">
                <li><strong>创新驱动：</strong>保持对新技术、新模式的探索精神，用创新思维解决问题。</li>
                <li><strong>专业专注：</strong>专注医疗信息化领域，追求专业卓越，不断提升团队能力。</li>
                <li><strong>协作共赢：</strong>重视团队协作，尊重多元观点，实现共同成长。</li>
                <li><strong>责任担当：</strong>对团队负责，对项目负责，对医疗健康事业的发展负责。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作伙伴 -->
    <section class="about-partners">
      <div class="container">
        <h2 class="section-title">合作伙伴</h2>
        <p class="section-desc">感谢以下机构与我们携手共进，共同推动医疗信息化发展</p>
        <div class="partners-grid">
          <div class="partner-item" style="--partner-color: var(--teal); --partner-gradient: var(--teal-gradient);">
            <div class="partner-logo">
              <i class="fas fa-university"></i>
            </div>
            <div class="partner-name">温州医科大学</div>
          </div>
          <div class="partner-item" style="--partner-color: var(--purple); --partner-gradient: var(--purple-gradient);">
            <div class="partner-logo">
              <i class="fas fa-hospital"></i>
            </div>
            <div class="partner-name">温州市中心医院</div>
          </div>
          <div class="partner-item" style="--partner-color: var(--orange); --partner-gradient: var(--orange-gradient);">
            <div class="partner-logo">
              <i class="fas fa-lightbulb"></i>
            </div>
            <div class="partner-name">温州市技术创新中心</div>
          </div>
          <div class="partner-item" style="--partner-color: var(--green); --partner-gradient: var(--green-gradient);">
            <div class="partner-logo">
              <i class="fas fa-database"></i>
            </div>
            <div class="partner-name">健康数据科技有限公司</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  metaInfo: {
    title: '关于我们 - 医信团队'
  }
}
</script>

<style scoped>
/* 页面标题样式 */
.page-header {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--teal) 100%);
  text-align: center;
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  transform: rotate(10deg);
}

.page-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 25px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  position: relative;
  display: inline-block;
}

.page-title::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 4px;
  background: var(--white);
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}

.page-subtitle {
  font-size: 1.4rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.15);
}

/* 团队介绍样式 */
.about-intro {
  padding: 80px 0;
  background-color: var(--white);
}

.intro-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.intro-text h2 {
  font-size: 2.2rem;
  margin-bottom: 25px;
  color: var(--text-color);
}

.intro-text p {
  margin-bottom: 20px;
  line-height: 1.8;
  color: var(--text-light);
}

.intro-image img {
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

/* 历程里程碑样式 */
.about-milestones {
  padding: 80px 0;
  background-color: var(--secondary-color);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  color: var(--text-color);
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 4px;
  background-color: var(--primary-color);
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
}

.timeline-item:nth-child(odd) {
  left: 0;
  text-align: right;
}

.timeline-item:nth-child(even) {
  left: 50%;
  text-align: left;
}

.timeline-dot {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--primary-color);
  top: 30px;
  z-index: 1;
}

.timeline-item:nth-child(odd) .timeline-dot {
  right: -10px;
}

.timeline-item:nth-child(even) .timeline-dot {
  left: -10px;
}

.timeline-date {
  position: absolute;
  top: 30px;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 1.2rem;
}

.timeline-item:nth-child(odd) .timeline-date {
  right: -110px;
}

.timeline-item:nth-child(even) .timeline-date {
  left: -110px;
}

.timeline-content {
  background-color: var(--white);
  padding: 25px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.timeline-content h3 {
  margin-bottom: 10px;
  color: var(--text-color);
}

.timeline-content p {
  color: var(--text-light);
  line-height: 1.6;
}

/* 价值观与使命样式 */
.about-values {
  padding: 80px 0;
  background-color: var(--white);
}

.values-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.values-image img {
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.values-text h2 {
  font-size: 2.2rem;
  margin-bottom: 30px;
  color: var(--text-color);
}

.value-item {
  margin-bottom: 25px;
}

.value-item h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--primary-color);
  display: flex;
  align-items: center;
}

.value-item h3 i {
  margin-right: 10px;
}

.value-item p {
  color: var(--text-light);
  line-height: 1.8;
}

.values-list {
  list-style: none;
  padding-left: 0;
}

.values-list li {
  margin-bottom: 10px;
  color: var(--text-light);
  line-height: 1.6;
}

/* 合作伙伴样式 */
.about-partners {
  padding: 80px 0;
  background-color: var(--white);
}

.section-desc {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;
  color: var(--text-light);
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.partner-item {
  background-color: var(--white);
  border-radius: var(--border-radius);
  padding: 40px 30px;
  text-align: center;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  --partner-color: var(--primary-color);
  --partner-gradient: var(--primary-gradient);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--gray-light);
}

.partner-item:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
  border-color: transparent;
}

.partner-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: var(--partner-gradient);
  opacity: 0.05;
  transition: var(--transition);
}

.partner-item:hover::before {
  height: 100%;
}

.partner-logo {
  width: 90px;
  height: 90px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: var(--partner-gradient);
  color: var(--white);
  font-size: 40px;
  transform: rotate(0deg);
  transition: transform 0.5s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.partner-item:hover .partner-logo {
  transform: rotate(10deg);
}

.partner-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--partner-color);
  position: relative;
  display: inline-block;
}

.partner-name::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--partner-gradient);
  transition: width 0.3s ease;
}

.partner-item:hover .partner-name::after {
  width: 100%;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .intro-content,
  .values-content {
    grid-template-columns: 1fr;
  }
  
  .intro-image,
  .values-image {
    order: -1;
    margin-bottom: 30px;
  }
  
  .timeline-item {
    width: 100%;
    padding: 20px 0 20px 70px;
    left: 0;
    text-align: left;
  }
  
  .timeline::before {
    left: 40px;
  }
  
  .timeline-dot {
    left: 31px;
  }
  
  .timeline-date {
    position: relative;
    top: 0;
    left: 0 !important;
    right: auto !important;
    margin-bottom: 10px;
  }
  
  .timeline-item:nth-child(odd) .timeline-dot,
  .timeline-item:nth-child(even) .timeline-dot {
    left: 31px;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 60px 0;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .intro-text h2,
  .values-text h2,
  .section-title {
    font-size: 2rem;
  }
  
  .partners-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}

@media (max-width: 576px) {
  .partner-logo {
    width: 100px;
    height: 100px;
  }
  
  .contact-content h2 {
    font-size: 2rem;
  }
  
  .timeline-item {
    padding-left: 50px;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-dot {
    left: 11px;
  }
  
  .timeline-item:nth-child(odd) .timeline-dot,
  .timeline-item:nth-child(even) .timeline-dot {
    left: 11px;
  }
}
</style> 