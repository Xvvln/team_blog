<template>
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <div class="logo">
          <router-link to="/">
            <img class="logo-img" :src="require('@/assets/images/members/学校logo.jpeg')" alt="医信团队logo">
            <span class="logo-subtitle">温医大信管</span>
          </router-link>
        </div>
        
        <nav class="main-nav" :class="{ 'active': isMobileMenuOpen }">
          <ul class="nav-links">
            <li><router-link to="/" @click="closeMobileMenu">首页</router-link></li>
            <li><router-link to="/members" @click="closeMobileMenu">团队成员</router-link></li>
            <li><router-link to="/blog" @click="closeMobileMenu">团队博客</router-link></li>
            <li><router-link to="/about" @click="closeMobileMenu">关于我们</router-link></li>
            <li><router-link to="/contact" @click="closeMobileMenu">联系我们</router-link></li>
          </ul>
        </nav>
        
        <div class="mobile-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      document.body.classList.toggle('no-scroll', this.isMobileMenuOpen);
    },
    closeMobileMenu() {
      if (this.isMobileMenuOpen) {
        this.isMobileMenuOpen = false;
        document.body.classList.remove('no-scroll');
      }
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
    });
  }
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--white);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  z-index: 100;
  padding: 12px 0;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo a {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--primary-color);
  align-items: center;
}

.logo-img {
  height: 60px;
  width: auto;
  border-radius: 8px;
  margin-bottom: 5px;
}

.logo-subtitle {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-top: -5px;
}

.main-nav {
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin: 0 15px;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  padding: 5px 3px;
  position: relative;
  transition: all 0.3s ease;
}

.nav-links a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--primary-gradient);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-links a:hover, 
.nav-links a.router-link-active {
  color: var(--primary-color);
}

.nav-links a:hover:after,
.nav-links a.router-link-active:after {
  transform: scaleX(1);
  transform-origin: left;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 101;
}

.mobile-toggle span {
  display: block;
  width: 28px;
  height: 3px;
  background-color: var(--primary-color);
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

/* 响应式样式 */
@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }
  
  .main-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--white);
    padding: 80px 30px 30px;
    flex-direction: column;
    align-items: flex-start;
    transform: translateX(100%);
    transition: transform 0.4s ease;
    z-index: 100;
  }
  
  .main-nav.active {
    transform: translateX(0);
  }
  
  .nav-links {
    flex-direction: column;
    width: 100%;
  }
  
  .nav-links li {
    margin: 10px 0;
    width: 100%;
    text-align: center;
  }
  
  .nav-links a {
    display: block;
    padding: 12px;
    font-size: 1.2rem;
  }
  
  .mobile-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 6px);
  }
  
  .mobile-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -6px);
  }
}

.no-scroll {
  overflow: hidden;
}
</style> 