<template>
  <div class="contact-page">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">联系我们</h1>
        <p class="page-subtitle">期待与您沟通合作</p>
      </div>
    </section>

    <!-- 联系方式 -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <h2>联系方式</h2>
            <p class="contact-desc">
              如果您对我们的团队或项目感兴趣，或有任何问题和建议，欢迎通过以下方式与我们联系。
            </p>
            
            <div class="info-items">
              <div class="info-item" style="--info-color: var(--teal); --info-gradient: var(--teal-gradient);">
                <div class="info-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="info-content">
                  <h3>地址</h3>
                  <p>温州医科大学</p>
                </div>
              </div>
              
              <div class="info-item" style="--info-color: var(--green); --info-gradient: var(--green-gradient);">
                <div class="info-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="info-content">
                  <h3>邮箱</h3>
                  <p>3369759202@qq.com</p>
                </div>
              </div>
              
              <div class="info-item" style="--info-color: var(--orange); --info-gradient: var(--orange-gradient);">
                <div class="info-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="info-content">
                  <h3>电话</h3>
                  <p>18958938008</p>
                </div>
              </div>
              
              <div class="info-item" style="--info-color: var(--purple); --info-gradient: var(--purple-gradient);">
                <div class="info-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="info-content">
                  <h3>工作时间</h3>
                  <p>周一至周五 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <h3>社交媒体</h3>
              <div class="social-icons">
                <a href="https://weibo.com/6260676927" target="_blank" title="微博">
                  <i class="fab fa-weibo"></i>
                </a>
                <a href="#" target="_blank" title="微信" @click.prevent="showWechatQR">
                  <i class="fab fa-weixin"></i>
                </a>
                <a href="https://github.com/Xvvln" target="_blank" title="GitHub">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://space.bilibili.com/243692491" target="_blank" title="B站">
                  <i class="fab fa-bilibili"></i>
                </a>
                <a href="https://www.douyin.com/user/MS4wLjABAAAArNSzHr5tjoIroIq7oxXhgptc5PtiNifzvcuYvldeXgw" target="_blank" title="抖音">
                  <i class="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <h2>发送消息</h2>
            <p class="form-desc">
              填写以下表单，我们将在1-2个工作日内回复您的留言。
            </p>
            
            <form @submit.prevent="submitForm" id="contactForm">
              <div class="form-group">
                <label for="name">您的姓名</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  v-model="form.name"
                  placeholder="请输入您的姓名"
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="email">您的邮箱</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  v-model="form.email"
                  placeholder="请输入您的邮箱"
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="subject">主题</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  v-model="form.subject"
                  placeholder="请输入消息主题"
                >
              </div>
              
              <div class="form-group">
                <label for="message">消息内容</label>
                <textarea 
                  id="message" 
                  name="message" 
                  v-model="form.message"
                  placeholder="请输入您的消息内容"
                  required
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">发送消息 <i class="fas fa-paper-plane"></i></span>
                <span v-else class="sending-animation">
                  <span class="sending-text">发送中</span>
                  <span class="dot-animation">
                    <i class="dot"></i>
                    <i class="dot"></i>
                    <i class="dot"></i>
                  </span>
                </span>
              </button>
              
              <div v-if="formMessage.show" class="form-message">
                <div class="message-content" :class="formMessage.type">
                  <i :class="formMessage.type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
                  {{ formMessage.text }}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 地图部分和常见问题部分 -->
    <section class="map-faq-section">
      <div class="container">
        <div class="map-faq-grid">
          <!-- 地图部分 -->
          <div class="map-column">
            <div class="title-container">
              <h2 class="section-title">我们的位置</h2>
            </div>
            <div class="map-container">
              <div class="map-placeholder">
                <div class="map-overlay">
                  <div class="map-icon">
                    <i class="fas fa-map-marked-alt"></i>
                  </div>
                  <h3>温州医科大学</h3>
                  <p>浙江省温州市茶山高教园区</p>
                  <a href="https://map.baidu.com/search/%E6%B8%A9%E5%B7%9E%E5%8C%BB%E7%A7%91%E5%A4%A7%E5%AD%A6/@13518902.48,3463323.54,17.38z" target="_blank" class="map-link">
                    在百度地图查看 <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 常见问题部分 -->
          <div class="faq-column">
            <div class="title-container">
              <h2 class="section-title">常见问题</h2>
            </div>
            <div class="faq-container">
              <div class="faq-item" v-for="(faq, index) in faqs" :key="index" @click="toggleFaq(index)">
                <div class="faq-question" :class="{ 'active': faq.isOpen }">
                  <h3>{{ faq.question }}</h3>
                  <i class="fas" :class="faq.isOpen ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                </div>
                <div class="faq-answer" :class="{ 'show': faq.isOpen }">
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 微信二维码弹窗 -->
    <div class="wechat-modal" v-if="showQrcode" @click="closeWechatQR">
      <div class="modal-content" @click.stop>
        <span class="close-btn" @click="closeWechatQR">&times;</span>
        <h3>扫描二维码添加微信</h3>
        <p class="wechat-id">微信号: Xvvlnx412</p>
        <div class="qrcode-placeholder">
          <i class="fab fa-weixin"></i>
          <p>请扫描二维码添加</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  metaInfo: {
    title: '联系我们 - 医信团队'
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      formMessage: {
        show: false,
        type: '',
        text: ''
      },
      showQrcode: false,
      faqs: [
        {
          question: '如何加入你们团队？',
          answer: '我们欢迎对医疗信息化有热情的同学加入，特别是有数据分析、系统开发、UI设计、项目管理等相关经验或兴趣的同学。请通过上方联系方式与我们取得联系，并简单介绍自己的情况。',
          isOpen: false
        },
        {
          question: '我可以与团队进行项目合作吗？',
          answer: '当然可以！我们欢迎各类与医疗信息化相关的项目合作机会。请通过邮件或电话与我们联系，详细描述您的项目需求和合作意向，我们会尽快回复。',
          isOpen: false
        },
        {
          question: '团队是否提供技术咨询服务？',
          answer: '是的，我们提供医疗信息系统、数据分析、可视化等方面的技术咨询服务。根据需求，我们可以提供一次性咨询或长期技术支持，具体请通过联系方式与我们商议。',
          isOpen: false
        },
        {
          question: '我们学校如何申请与你们团队的技术交流？',
          answer: '我们非常欢迎学校间的技术交流与合作。请学校相关部门负责人通过官方邮箱联系我们，说明交流意向和具体需求，我们将安排专人对接。',
          isOpen: false
        },
        {
          question: '团队成员是否接受远程实习？',
          answer: '是的，我们团队成员可以根据项目需要接受远程实习机会。如有合适的实习岗位，请将详细信息发送至我们的邮箱，我们会将信息转达给相关成员。',
          isOpen: false
        }
      ]
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.formMessage.show = false;
      
      try {
        // 准备表单数据
        const formData = new FormData();
        formData.append('name', this.form.name);
        formData.append('email', this.form.email);
        formData.append('subject', this.form.subject);
        formData.append('message', this.form.message);
        
        // 发送到Formspree
        const response = await fetch('https://formspree.io/f/movenaay', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        const result = await response.json();
        
        if (response.ok) {
          // 成功提交
          this.formMessage = {
            show: true,
            type: 'success',
            text: '消息已成功发送！我们将尽快与您联系。'
          };
          
          // 重置表单
          this.form = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
          
          // 滚动到表单顶部
          this.$nextTick(() => {
            const formElement = document.querySelector('.contact-form');
            if (formElement) {
              formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        } else {
          // 提交失败
          throw new Error(result.error || '提交表单时出错');
        }
      } catch (error) {
        console.error('表单提交错误:', error);
        this.formMessage = {
          show: true,
          type: 'error',
          text: '提交表单时出现错误，请稍后再试或直接通过邮件联系我们。'
        };
      } finally {
        this.isSubmitting = false;
        
        // 5秒后隐藏消息
        if (this.formMessage.show) {
          setTimeout(() => {
            this.formMessage.show = false;
          }, 5000);
        }
      }
    },
    toggleFaq(index) {
      this.faqs.forEach((faq, i) => {
        if (i === index) {
          this.faqs[i].isOpen = !this.faqs[i].isOpen;
        } else {
          this.faqs[i].isOpen = false;
        }
      });
    },
    showWechatQR() {
      this.showQrcode = true;
      document.body.style.overflow = 'hidden'; // 防止背景滚动
    },
    closeWechatQR() {
      this.showQrcode = false;
      document.body.style.overflow = ''; // 恢复背景滚动
    }
  },
  mounted() {
    // 为FAQ添加点击展开功能
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  }
}
</script>

<style scoped>
/* 页面标题样式 */
.page-header {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--orange) 100%);
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

/* 联系方式 */
.contact-section {
  padding: 80px 0;
  background-color: var(--white);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

.contact-info h2,
.contact-form h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: var(--text-color);
}

.contact-desc,
.form-desc {
  margin-bottom: 30px;
  color: var(--text-light);
  line-height: 1.6;
}

.info-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.info-item {
  background-color: var(--white);
  padding: 25px;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  --info-color: var(--primary-color);
  --info-gradient: var(--primary-gradient);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.info-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--info-gradient);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
}

.info-item:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
  color: var(--white);
}

.info-item:hover::after {
  opacity: 1;
}

.info-item:hover .info-content h3,
.info-item:hover .info-content p {
  color: var(--white);
}

.info-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--info-gradient);
  color: var(--white);
  font-size: 24px;
  border-radius: 12px;
  flex-shrink: 0;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
}

.info-item:hover .info-icon {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(10deg);
}

.info-content {
  flex: 1;
  min-width: 0; /* 防止flex子项超出父容器 */
}

.info-content h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: var(--info-color);
  transition: color 0.3s ease;
}

.info-content p {
  color: var(--text-light);
  line-height: 1.5;
  transition: color 0.3s ease;
  word-break: break-word; /* 长文本自动换行 */
  overflow-wrap: break-word; /* 确保长单词也能换行 */
}

.social-links h3 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: var(--text-color);
}

.social-icons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.social-icons a {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--white);
  color: var(--primary-color);
  font-size: 1.3rem;
  transition: var(--transition);
  box-shadow: var(--box-shadow);
}

.social-icons a:hover {
  transform: translateY(-8px) rotate(10deg);
  box-shadow: var(--hover-shadow);
}

.social-icons a:nth-child(1):hover {
  background: linear-gradient(135deg, #ff764d 0%, #ff4500 100%);
  color: var(--white);
}

.social-icons a:nth-child(2):hover {
  background: linear-gradient(135deg, #50c878 0%, #09bb07 100%);
  color: var(--white);
}

.social-icons a:nth-child(3):hover {
  background: linear-gradient(135deg, #333333 0%, #000000 100%);
  color: var(--white);
}

.social-icons a:nth-child(4):hover {
  background: linear-gradient(135deg, #ff6699 0%, #ff3399 100%);
  color: var(--white);
}

.social-icons a:nth-child(5):hover {
  background: linear-gradient(135deg, #ff0050 0%, #ff0050 100%);
  color: var(--white);
}

/* 联系表单 */
.contact-form {
  background-color: var(--secondary-color);
  padding: 40px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--text-color);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--gray-light);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background-color: var(--white);
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--primary-color);
  outline: none;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: var(--primary-gradient);
  border: none;
  border-radius: var(--border-radius);
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-btn:hover:not(:disabled) {
  box-shadow: var(--hover-shadow);
  transform: translateY(-3px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-btn i {
  margin-left: 8px;
}

.form-message {
  margin-top: 20px;
}

.message-content {
  padding: 15px;
  border-radius: var(--border-radius);
  text-align: center;
}

.message-content.success {
  background-color: rgba(72, 187, 120, 0.1);
  color: #38a169;
  border: 1px solid rgba(72, 187, 120, 0.2);
}

.message-content.error {
  background-color: rgba(245, 101, 101, 0.1);
  color: #e53e3e;
  border: 1px solid rgba(245, 101, 101, 0.2);
}

/* 地图和FAQ合并部分 */
.map-faq-section {
  padding: 80px 0;
  background-color: var(--secondary-color);
}

.map-faq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.map-column,
.faq-column {
  display: flex;
  flex-direction: column;
}

.title-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  height: 50px;
  align-items: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0;
  padding: 0;
  text-align: center;
}

/* 地图部分样式 */
.map-container {
  height: 100%;
  min-height: 400px;
  border-radius: 0;
  overflow: visible;
  position: relative;
  box-shadow: none;
  background-color: var(--secondary-color);
}

.map-placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: none;
}

.map-placeholder::before {
  display: none;
}

.map-overlay {
  text-align: center;
  padding: 40px;
  background-color: var(--white);
  border-radius: 20px;
  max-width: 400px;
  width: 90%;
  color: #2d3748;
  z-index: 1;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.map-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4ade80 0%, #10b981 100%);
  color: white;
  border-radius: 50%;
  font-size: 32px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

.map-overlay h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #2563eb;
}

.map-overlay p {
  margin-bottom: 20px;
  color: #4b5563;
}

.map-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  text-decoration: none;
  padding: 12px 25px;
  border-radius: 30px;
  transition: var(--transition);
  font-weight: 600;
}

.map-link:hover {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4);
}

/* FAQ部分样式 */
.faq-container {
  max-width: 100%;
  margin: 0;
}

.faq-item {
  background-color: var(--white);
  border-radius: var(--border-radius);
  margin-bottom: 10px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition);
}

.faq-item:hover {
  box-shadow: var(--hover-shadow);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  background-color: var(--white);
  transition: var(--transition);
}

.faq-question.active {
  background-color: var(--primary-color);
  color: var(--white);
}

.faq-question h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.faq-question i {
  transition: transform 0.3s ease;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.faq-answer.show {
  max-height: 150px;
  overflow-y: auto;
}

.faq-answer p {
  padding: 20px 25px;
  margin: 0;
  color: var(--text-light);
  line-height: 1.6;
}

/* 响应式布局 */
@media (max-width: 992px) {
  .map-faq-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  
  .map-container {
    min-height: 350px;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 60px 0;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-info h2,
  .contact-form h2 {
    font-size: 1.8rem;
  }
  
  .map-container {
    min-height: 300px;
  }
  
  .faq-question h3 {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .contact-form {
    padding: 30px 20px;
  }
  
  .social-icons {
    flex-wrap: wrap;
  }
  
  .map-container {
    min-height: 250px;
  }
  
  .map-overlay {
    padding: 20px;
  }
  
  .map-overlay i {
    font-size: 2.5rem;
  }
  
  .map-overlay p {
    font-size: 1.1rem;
  }
}

/* 表单提交动画和消息 */
.sending-animation {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sending-text {
  margin-right: 5px;
}

.dot-animation {
  display: inline-flex;
  align-items: center;
}

.dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--white);
  margin: 0 2px;
  opacity: 0;
  animation: dot-animation 1.4s infinite ease-in-out;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes dot-animation {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}

.form-message {
  margin-top: 20px;
  animation: slide-in 0.3s ease;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message-content {
  padding: 15px;
  border-radius: var(--border-radius);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.message-content i {
  margin-right: 10px;
  font-size: 1.2rem;
}

.message-content.success {
  background-color: rgba(72, 187, 120, 0.1);
  color: #38a169;
  border: 1px solid rgba(72, 187, 120, 0.2);
}

.message-content.error {
  background-color: rgba(245, 101, 101, 0.1);
  color: #e53e3e;
  border: 1px solid rgba(245, 101, 101, 0.2);
}

/* 微信二维码弹窗样式 */
.wechat-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: var(--white);
  border-radius: var(--border-radius);
  padding: 30px;
  width: 90%;
  max-width: 350px;
  box-shadow: var(--box-shadow);
  position: relative;
  text-align: center;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: var(--text-light);
  transition: var(--transition);
}

.close-btn:hover {
  color: var(--primary-color);
}

.wechat-id {
  margin: 15px 0;
  font-weight: 600;
  color: var(--primary-color);
}

.qrcode-placeholder {
  width: 200px;
  height: 200px;
  background-color: var(--secondary-color);
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
}

.qrcode-placeholder i {
  font-size: 60px;
  color: #07C160;
  margin-bottom: 15px;
}

.qrcode-placeholder p {
  color: var(--text-light);
  font-size: 14px;
}
</style> 