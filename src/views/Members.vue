<template>
  <div class="members-page">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">我们的团队</h1>
        <p class="page-subtitle">团结协作，共创未来</p>
      </div>
    </section>

    <!-- 成员说明 -->
    <section class="team-overview">
      <div class="container">
        <div class="overview-content">
          <div class="overview-text">
            <h2>专业多元的创新团队</h2>
            <p>
              我们是一支来自温州医科大学信息管理与信息系统专业的创新团队。团队成员各有所长，
              涵盖数据分析、可视化设计、项目管理、系统架构、信息安全等多个专业领域。
              我们坚信，多元化的专业背景和紧密的团队协作是创新的源泉。
            </p>
            <p>
              每位成员都拥有扎实的专业技能和独特的个人特质，
              共同致力于将信息技术与医疗健康深度融合，探索创新解决方案。
            </p>
          </div>
          <div class="overview-stats">
            <div class="stat-item" style="--stat-color: var(--purple); --stat-gradient: var(--purple-gradient);">
              <div class="stat-icon">
                <i class="fas fa-users"></i>
              </div>
              <div class="stat-number">7</div>
              <div class="stat-label">核心成员</div>
            </div>
            <div class="stat-item" style="--stat-color: var(--teal); --stat-gradient: var(--teal-gradient);">
              <div class="stat-icon">
                <i class="fas fa-laptop-code"></i>
              </div>
              <div class="stat-number">10+</div>
              <div class="stat-label">技术栈</div>
            </div>
            <div class="stat-item" style="--stat-color: var(--orange); --stat-gradient: var(--orange-gradient);">
              <div class="stat-icon">
                <i class="fas fa-project-diagram"></i>
              </div>
              <div class="stat-number">15+</div>
              <div class="stat-label">完成项目</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 成员列表 -->
    <section class="members-list">
      <div class="container">
        <h2 class="section-title">团队成员</h2>
        <div class="members-grid">
          <div class="member-card" v-for="(member, index) in members" :key="index">
            <div class="member-avatar">
              <img :src="member.avatar" :alt="member.name">
              <div class="member-social">
                <a v-if="member.weibo" :href="member.weibo" target="_blank" title="微博">
                  <i class="fab fa-weibo"></i>
                </a>
                <a v-if="member.bilibili" :href="member.bilibili" target="_blank" title="B站">
                  <i class="fab fa-bilibili"></i>
                </a>
                <a v-if="member.github" :href="member.github" target="_blank" title="GitHub">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <div class="member-position">{{ member.position }}</div>
              <p class="member-intro">{{ member.shortIntro }}</p>
              <div class="member-skills">
                <span class="skill-tag" v-for="(skill, i) in member.skills.slice(0, 3)" :key="i">
                  {{ skill }}
                </span>
                <span class="skill-more" v-if="member.skills.length > 3">+{{ member.skills.length - 3 }}</span>
              </div>
              <router-link :to="`/member/${member.id}`" class="member-link">
                查看详情 <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 加入团队 -->
    <section class="join-team">
      <div class="container">
        <div class="join-wrapper">
          <div class="join-content">
            <h2>加入我们</h2>
            <p>
              我们始终欢迎充满热情、拥有创新精神的伙伴加入。
              如果你热爱技术、追求卓越，期待与志同道合的小伙伴一起成长，请联系我们。
            </p>
            <div class="join-icons">
              <div class="join-icon">
                <i class="fas fa-lightbulb"></i>
                <span>创新思维</span>
              </div>
              <div class="join-icon">
                <i class="fas fa-code"></i>
                <span>技术能力</span>
              </div>
              <div class="join-icon">
                <i class="fas fa-heart"></i>
                <span>团队协作</span>
              </div>
            </div>
            <router-link to="/contact" class="btn primary">
              <i class="fas fa-paper-plane"></i> 联系我们
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MembersPage',
  data() {
    return {
      members: [
        {
          id: 'xiexuwh',
          name: '谢圩浩',
          position: '数据洞察工程师',
          avatar: require('../assets/images/members/谢圩浩.jpg'),
          shortIntro: '团队中的数据洞察专家，擅长数据分析与处理，对前沿技术如人工智能、机器学习保持高度关注。',
          weibo: 'https://weibo.com/6260676927',
          bilibili: 'https://space.bilibili.com/243692491',
          github: 'https://github.com/Xvvln',
          skills: ['Python', 'C#', 'JavaScript', 'Data Mining', 'AI']
        },
        {
          id: 'yuxinwei',
          name: '余昕炜',
          position: '数据可视化艺术家',
          avatar: require('../assets/images/members/余昕炜.jpg'),
          shortIntro: '在数据分析与可视化方面有着独特的天赋，能够将复杂的数据通过直观的图表、图形展示出来。',
          bilibili: 'https://account.bilibili.com/big',
          skills: ['Tableau', 'Power BI', 'Data Analysis', 'Visualization', 'JavaScript']
        },
        {
          id: 'shipinghui',
          name: '史蘋慧',
          position: '业务拓展先锋',
          avatar: require('../assets/images/members/史蘋慧.jpg'),
          shortIntro: '具备敏锐的市场洞察力和出色的沟通能力，能够准确把握市场动态与客户需求。',
          weibo: 'https://weibo.com/u/5589792153',
          bilibili: 'https://space.bilibili.com/手捧花的q',
          skills: ['Market Research', 'Communication', 'Project Management', 'JavaScript', 'Vue.js']
        },
        {
          id: 'shiqiyu',
          name: '石祁煜',
          position: '智能项目导航员',
          avatar: require('../assets/images/members/石祁煜.jpg'),
          shortIntro: '具备出色的项目管理能力，熟悉项目生命周期的各个环节，善于协调团队成员之间的关系。',
          bilibili: 'https://space.bilibili.com/353825876',
          skills: ['Project Management', 'C/C++', 'Python', 'SQL Server', 'Agile Development']
        },
        {
          id: 'yaoqi',
          name: '要琦',
          position: '架构创新设计师',
          avatar: require('../assets/images/members/要琦.jpg'),
          shortIntro: '对计算机系统架构有着深入的理解，能够设计出高效、稳定、可扩展的信息系统架构。',
          skills: ['System Architecture', 'Database Design', 'JavaScript', 'Python', 'Java']
        },
        {
          id: 'baxinyi',
          name: '巴欣怡',
          position: '安全守护专家',
          avatar: require('../assets/images/members/巴欣怡.jpg'),
          shortIntro: '对信息安全有着浓厚的兴趣，能够识别信息系统中的安全漏洞，并制定有效的安全策略。',
          weibo: 'https://weibo.com/u/1009633542',
          bilibili: 'https://space.bilibili.com/3546690581695198',
          skills: ['Network Security', 'Encryption', 'Penetration Testing', 'Security Audit']
        },
        {
          id: 'jiangyuanjian',
          name: '蒋远见',
          position: '用户体验优化师',
          avatar: require('../assets/images/members/蒋远见.jpg'),
          shortIntro: '专注于用户体验优化领域，能够精准把握用户需求与行为模式，持续优化产品体验。',
          skills: ['UX Design', 'UI Design', 'Axure', 'Sketch', 'User Research']
        }
      ]
    }
  }
}
</script>

<style scoped>
/* 页面标题样式 */
.page-header {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--green) 100%);
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

/* 团队概述样式 */
.team-overview {
  padding: 80px 0;
  background-color: var(--white);
}

.overview-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.overview-text h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: var(--text-color);
}

.overview-text p {
  margin-bottom: 20px;
  line-height: 1.8;
  color: var(--text-light);
}

.overview-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.stat-item {
  background-color: var(--white);
  border-radius: var(--border-radius);
  padding: 30px 20px;
  text-align: center;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  --stat-color: var(--primary-color);
  --stat-gradient: var(--primary-gradient);
}

.stat-item::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--stat-gradient);
  transition: var(--transition);
}

.stat-item:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
}

.stat-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--stat-gradient);
  color: var(--white);
  font-size: 28px;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 5px;
  background: var(--stat-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 1rem;
  color: var(--text-light);
  font-weight: 500;
}

/* 成员列表样式 */
.members-list {
  padding: 80px 0;
  background-color: var(--secondary-color);
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.member-card {
  background-color: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.member-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
}

.member-avatar {
  height: 250px;
  position: relative;
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

.member-social {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  transform: translateY(20px);
  transition: var(--transition);
}

.member-card:hover .member-social {
  opacity: 1;
  transform: translateY(0);
}

.member-social a {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  transition: var(--transition);
}

.member-social a:hover {
  background-color: var(--white);
  color: var(--primary-color);
  transform: translateY(-3px);
}

.member-info {
  padding: 25px;
}

.member-name {
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: var(--text-color);
}

.member-position {
  font-size: 0.9rem;
  color: var(--primary-color);
  margin-bottom: 15px;
  font-weight: 500;
}

.member-intro {
  color: var(--text-light);
  margin-bottom: 20px;
  line-height: 1.6;
}

.member-skills {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.skill-tag {
  padding: 4px 12px;
  background-color: #f0f0f0;
  color: var(--text-color);
  border-radius: 20px;
  font-size: 0.8rem;
  margin-right: 8px;
  margin-bottom: 8px;
}

.skill-more {
  padding: 4px 12px;
  background-color: var(--gray-light);
  color: var(--text-light);
  border-radius: 20px;
  font-size: 0.8rem;
}

.member-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: var(--primary-color);
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

/* 加入团队样式 */
.join-team {
  padding: 100px 0;
  background-color: var(--secondary-color);
  position: relative;
  overflow: hidden;
}

.join-wrapper {
  background: white;
  border-radius: var(--border-radius);
  padding: 60px 40px;
  color: var(--text-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: 1px solid #e9ecef;
}

.join-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--primary-gradient);
}

.join-wrapper::after {
  content: none;
}

.join-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.join-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.join-content p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: var(--text-light);
  line-height: 1.7;
}

.join-icons {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
}

.join-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.join-icon i {
  font-size: 30px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(var(--primary-rgb), 0.1);
  color: var(--primary-color);
  border-radius: 50%;
  margin-bottom: 5px;
  transition: var(--transition);
}

.join-icon span {
  font-weight: 500;
  color: var(--text-color);
}

.join-icon:hover i {
  background-color: rgba(var(--primary-rgb), 0.2);
  transform: translateY(-5px);
}

.join-content .btn {
  background: var(--primary-gradient);
  color: var(--white);
  padding: 12px 30px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 10px rgba(var(--primary-rgb), 0.2);
}

.join-content .btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(var(--primary-rgb), 0.3);
}

/* 响应式设计 */
@media (max-width: 992px) {
  .overview-content {
    grid-template-columns: 1fr;
  }
  
  .overview-stats {
    margin-top: 30px;
  }
  
  .members-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 60px 0;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .overview-text h2 {
    font-size: 2rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .join-content h2 {
    font-size: 2rem;
  }
  
  .join-wrapper {
    padding: 40px 20px;
  }
}

@media (max-width: 576px) {
  .members-grid {
    grid-template-columns: 1fr;
  }
  
  .overview-stats {
    grid-template-columns: 1fr;
  }
  
  .join-content h2 {
    font-size: 1.8rem;
  }
}
</style> 