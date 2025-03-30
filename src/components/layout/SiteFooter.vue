<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <div class="footer-logo">
            <span class="logo-text">医信团队</span>
            <span class="footer-tagline">创新信息技术，服务医疗健康</span>
          </div>
          <p class="footer-desc">
            我们是一支来自温州医科大学信息管理与信息系统专业的团队，
            致力于将信息技术与医疗健康领域深度融合，打造创新解决方案。
          </p>
        </div>
        
        <div class="footer-links">
          <h3>快速链接</h3>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/members">团队成员</router-link></li>
            <li><router-link to="/blog">团队博客</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
            <li><router-link to="/contact">联系我们</router-link></li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h3>联系方式</h3>
          <ul>
            <li><i class="fas fa-map-marker-alt"></i> 温州医科大学</li>
            <li><i class="fas fa-envelope"></i> 3369759202@qq.com</li>
            <li><i class="fas fa-phone"></i> +86 18958938008</li>
          </ul>
          <div class="social-links">
            <a href="https://weibo.com/6260676927" target="_blank"><i class="fab fa-weibo"></i></a>
            <a href="#" target="_blank" @click.prevent="showWechatQR"><i class="fab fa-weixin"></i></a>
            <a href="https://github.com/Xvvln" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://space.bilibili.com/243692491" target="_blank"><i class="fab fa-bilibili"></i></a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="copyright">
          &copy; {{ new Date().getFullYear() }} 医信团队. 版权所有
        </div>
        <div class="footer-nav">
          <a href="#">隐私政策</a>
          <a href="#">使用条款</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  data() {
    return {
      showQrcode: false
    }
  },
  methods: {
    showWechatQR() {
      this.$root.$emit('show-wechat-qr');
    }
  }
}
</script>

<style scoped>
.site-footer {
  background: var(--primary-gradient);
  color: var(--white);
  padding: 60px 0 20px;
  margin-top: 60px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.footer-about {
  max-width: 350px;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.footer-logo .logo-text {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--white);
}

.footer-tagline {
  font-size: 0.9rem;
  margin-top: 5px;
  opacity: 0.8;
}

.footer-desc {
  opacity: 0.8;
  line-height: 1.7;
}

.footer-links h3,
.footer-contact h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-links h3:after,
.footer-contact h3:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--white);
  border-radius: 2px;
}

.footer-links ul,
.footer-contact ul {
  list-style: none;
}

.footer-links li,
.footer-contact li {
  margin-bottom: 12px;
}

.footer-links a {
  color: var(--white);
  text-decoration: none;
  opacity: 0.8;
  transition: var(--transition);
}

.footer-links a:hover {
  opacity: 1;
  padding-left: 5px;
}

.footer-contact li {
  display: flex;
  align-items: center;
  opacity: 0.8;
}

.footer-contact i {
  margin-right: 10px;
  min-width: 20px;
}

.social-links {
  display: flex;
  margin-top: 20px;
}

.social-links a {
  display: block;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  margin-right: 10px;
  color: var(--white);
  text-decoration: none;
  transition: var(--transition);
}

.social-links a i {
  font-size: 16px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.social-links a:hover {
  background-color: var(--white);
  color: var(--primary-color);
  transform: translateY(-3px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.copyright {
  opacity: 0.8;
}

.footer-nav a {
  color: var(--white);
  text-decoration: none;
  opacity: 0.8;
  margin-left: 20px;
  transition: var(--transition);
}

.footer-nav a:hover {
  opacity: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-nav {
    margin-top: 10px;
  }
  
  .footer-nav a {
    margin: 0 10px;
  }
}
</style> 