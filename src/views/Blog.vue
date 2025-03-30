<template>
  <div class="blog-page">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">团队博客</h1>
        <p class="page-subtitle">分享医疗信息领域的最新思考与研究</p>
      </div>
    </section>

    <!-- 博客主体 -->
    <section class="blog-content">
      <div class="container">
        <div class="blog-layout">
          <!-- 文章列表 -->
          <div class="articles-grid">
            <!-- 文章项目 -->
            <div class="article-card" v-for="(article, index) in displayArticles" :key="index">
              <div class="article-image">
                <img :src="article.image" :alt="article.title">
                <div class="article-category">
                  <span>{{ article.category }}</span>
                </div>
              </div>
              <div class="article-info">
                <div class="article-meta">
                  <span class="article-date"><i class="far fa-calendar-alt"></i> {{ article.date }}</span>
                  <span class="article-author"><i class="far fa-user"></i> {{ article.author }}</span>
                </div>
                <h3 class="article-title">{{ article.title }}</h3>
                <p class="article-excerpt">{{ article.excerpt }}</p>
                <router-link :to="`/blog/${article.id}`" class="read-more">
                  阅读全文 <i class="fas fa-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>

          <!-- 侧边栏 -->
          <div class="blog-sidebar">
            <!-- 搜索框 -->
            <div class="sidebar-search">
              <h3 class="sidebar-title"><i class="fas fa-search"></i> 搜索文章</h3>
              <div class="search-box">
                <input type="text" placeholder="搜索关键词..." v-model="searchQuery">
                <button @click="searchArticles"><i class="fas fa-search"></i></button>
              </div>
            </div>

            <!-- 分类 -->
            <div class="sidebar-categories">
              <h3 class="sidebar-title"><i class="fas fa-folder"></i> 文章分类</h3>
              <ul class="categories-list">
                <li v-for="(count, category) in categories" :key="category">
                  <a href="#" @click.prevent="filterByCategory(category)">
                    {{ category }} <span>({{ count }})</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- 最新文章 -->
            <div class="sidebar-recent">
              <h3 class="sidebar-title"><i class="fas fa-clock"></i> 最新文章</h3>
              <ul class="recent-list">
                <li v-for="(article, index) in recentArticles" :key="index">
                  <router-link :to="`/blog/${article.id}`">
                    <div class="recent-image">
                      <img :src="article.image" :alt="article.title">
                    </div>
                    <div class="recent-info">
                      <h4>{{ article.title }}</h4>
                      <span class="recent-date">{{ article.date }}</span>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- 标签 -->
            <div class="sidebar-tags">
              <h3 class="sidebar-title"><i class="fas fa-tags"></i> 标签云</h3>
              <div class="tags-cloud">
                <a href="#" v-for="tag in tags" :key="tag.name" 
                  @click.prevent="filterByTag(tag.name)"
                  :style="{ fontSize: tag.size + 'px', color: tag.color, borderColor: tag.color }"
                  :data-color="tag.color">
                  {{ tag.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  metaInfo: {
    title: '团队博客 - 医信团队'
  },
  data() {
    return {
      searchQuery: '',
      filteredArticles: [],
      articles: [
        {
          id: 'medical-data-visualization',
          title: '医疗数据可视化的创新应用',
          excerpt: '探索如何利用现代可视化技术，让复杂的医疗数据变得直观易懂，为医疗决策提供有力支持。',
          content: '',
          author: '余昕炜',
          date: '2023-12-15',
          category: '数据可视化',
          tags: ['数据可视化', '医疗决策', '信息图表'],
          image: require('@/assets/images/blogs/1.png')
        },
        {
          id: 'ai-assisted-diagnosis',
          title: '人工智能辅助诊断技术研究进展',
          excerpt: '介绍人工智能在医疗诊断领域的最新应用，以及我们团队在该领域的研究成果和实践经验。',
          content: '',
          author: '谢圩浩',
          date: '2023-11-28',
          category: '人工智能',
          tags: ['人工智能', '辅助诊断', '医学影像'],
          image: require('@/assets/images/blogs/2.jpg')
        },
        {
          id: 'healthcare-information-security',
          title: '医疗信息系统安全防护策略',
          excerpt: '分析医疗信息系统面临的安全挑战，提出有效的防护策略，保障患者数据安全和隐私。',
          content: '',
          author: '巴欣怡',
          date: '2023-10-20',
          category: '信息安全',
          tags: ['信息安全', '数据隐私', '安全策略'],
          image: require('@/assets/images/blogs/3.jpg')
        },
        {
          id: 'electronic-health-records',
          title: '电子健康记录系统的未来发展',
          excerpt: '探讨电子健康记录系统的发展趋势，分析其在提高医疗质量和效率方面的重要作用。',
          content: '',
          author: '石祁煜',
          date: '2023-09-12',
          category: '健康信息学',
          tags: ['电子健康记录', '医疗信息化', '数据标准'],
          image: require('@/assets/images/blogs/4.jpg')
        },
        {
          id: 'telemedicine-trends',
          title: '远程医疗：疫情后的发展与挑战',
          excerpt: '分析新冠疫情对远程医疗的推动作用，以及未来远程医疗面临的机遇与挑战。',
          content: '',
          author: '蒋远见',
          date: '2023-08-05',
          category: '远程医疗',
          tags: ['远程医疗', '互联网医疗', '医患交流'],
          image: require('@/assets/images/blogs/5.png')
        },
        {
          id: 'health-informatics-education',
          title: '医学信息学教育：培养未来医疗数字化人才',
          excerpt: '探讨医学信息学教育的重要性，以及如何培养适应数字化医疗环境的复合型人才。',
          content: '',
          author: '要琦',
          date: '2023-07-18',
          category: '医学教育',
          tags: ['医学信息学', '人才培养', '课程设计'],
          image: require('@/assets/images/blogs/6.jpg')
        }
      ],
      tagColors: [
        '#4361ee', // 主色调
        '#3a0ca3', // 深紫色
        '#7209b7', // 紫色
        '#f72585', // 玫红色
        '#4cc9f0', // 浅蓝色
        '#48bfe3', // 蓝色
        '#56cfe1', // 天蓝色
        '#64dfdf', // 青色
        '#72efdd', // 薄荷色
        '#80ffdb'  // 浅绿色
      ]
    }
  },
  computed: {
    // 计算文章分类统计
    categories() {
      const cats = {};
      this.articles.forEach(article => {
        if (cats[article.category]) {
          cats[article.category]++;
        } else {
          cats[article.category] = 1;
        }
      });
      return cats;
    },
    // 获取最近3篇文章
    recentArticles() {
      return [...this.articles]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
    },
    // 生成标签云数据
    tags() {
      const tagCount = {};
      this.articles.forEach(article => {
        article.tags.forEach(tag => {
          if (tagCount[tag]) {
            tagCount[tag]++;
          } else {
            tagCount[tag] = 1;
          }
        });
      });
      
      // 标签尺寸：取值范围12-18px
      return Object.keys(tagCount).map((tag, index) => {
        return {
          name: tag,
          size: 12 + Math.min(tagCount[tag] * 2, 6),
          color: this.tagColors[index % this.tagColors.length]
        };
      });
    },
    // 用于显示的文章列表，根据搜索状态显示过滤后的文章或全部文章
    displayArticles() {
      return this.searchQuery ? this.filteredArticles : this.articles;
    }
  },
  methods: {
    searchArticles() {
      // 如果搜索关键词为空，显示全部文章
      if (!this.searchQuery.trim()) {
        this.filteredArticles = this.articles;
        return;
      }
      
      // 在文章标题中检索搜索词
      const query = this.searchQuery.trim().toLowerCase();
      this.filteredArticles = this.articles.filter(article => 
        article.title.toLowerCase().includes(query)
      );
    },
    filterByCategory(category) {
      console.log('筛选分类:', category);
      // 实际项目中这里应该实现分类筛选逻辑
    },
    filterByTag(tag) {
      console.log('筛选标签:', tag);
      // 实际项目中这里应该实现标签筛选逻辑
    }
  },
  created() {
    // 初始化显示所有文章
    this.filteredArticles = this.articles;
  },
  mounted() {
    // 为标签云添加悬停效果
    const tagElements = document.querySelectorAll('.tags-cloud a');
    tagElements.forEach(tag => {
      const color = tag.getAttribute('data-color');
      tag.addEventListener('mouseenter', () => {
        tag.style.backgroundColor = color;
      });
      tag.addEventListener('mouseleave', () => {
        tag.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      });
    });
  }
}
</script>

<style scoped>
/* 页面标题样式 */
.page-header {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--purple) 100%);
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

/* 博客内容布局 */
.blog-content {
  padding: 80px 0;
  background-color: var(--secondary-color);
}

.blog-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

/* 文章卡片样式 */
.articles-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  align-content: start;
}

.article-card {
  background-color: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  max-height: 600px;
  display: flex;
  flex-direction: column;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--hover-shadow);
}

.article-image {
  height: 250px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.article-card:hover .article-image img {
  transform: scale(1.05);
}

.article-category {
  position: absolute;
  top: 15px;
  left: 15px;
  background: var(--primary-gradient);
  padding: 5px 15px;
  border-radius: 20px;
  color: var(--white);
  font-size: 0.8rem;
  font-weight: 600;
}

.article-info {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.article-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  color: var(--text-light);
  font-size: 0.9rem;
}

.article-meta i {
  margin-right: 5px;
}

.article-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  line-height: 1.4;
  color: var(--text-color);
}

.article-excerpt {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.read-more {
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
}

.read-more i {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.read-more:hover {
  color: var(--primary-dark);
}

.read-more:hover i {
  transform: translateX(5px);
}

/* 侧边栏样式 */
.blog-sidebar > div {
  background-color: var(--white);
  border-radius: var(--border-radius);
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: var(--box-shadow);
}

.sidebar-title {
  font-size: 1.2rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--gray-light);
  color: var(--text-color);
  display: flex;
  align-items: center;
}

.sidebar-title i {
  margin-right: 10px;
  color: var(--primary-color);
}

/* 搜索框样式 */
.search-box {
  display: flex;
  border: 1px solid var(--gray-light);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.search-box input {
  flex: 1;
  padding: 12px 15px;
  border: none;
  outline: none;
  font-size: 1rem;
}

.search-box button {
  width: 50px;
  background: var(--primary-gradient);
  border: none;
  color: var(--white);
  cursor: pointer;
  transition: var(--transition);
}

.search-box button:hover {
  opacity: 0.9;
}

/* 分类列表样式 */
.categories-list {
  list-style: none;
}

.categories-list li {
  margin-bottom: 10px;
  border-bottom: 1px solid var(--gray-light);
  padding-bottom: 10px;
}

.categories-list li:last-child {
  margin-bottom: 0;
  border-bottom: none;
  padding-bottom: 0;
}

.categories-list a {
  display: flex;
  justify-content: space-between;
  color: var(--text-color);
  text-decoration: none;
  transition: var(--transition);
}

.categories-list a:hover {
  color: var(--primary-color);
  padding-left: 5px;
}

.categories-list span {
  color: var(--text-light);
}

/* 最新文章列表样式 */
.recent-list {
  list-style: none;
}

.recent-list li {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--gray-light);
}

.recent-list li:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.recent-list a {
  display: flex;
  gap: 15px;
  text-decoration: none;
}

.recent-image {
  width: 80px;
  height: 60px;
  border-radius: 5px;
  overflow: hidden;
  flex-shrink: 0;
}

.recent-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recent-info {
  flex: 1;
}

.recent-info h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text-color);
  transition: var(--transition);
  line-height: 1.4;
}

.recent-date {
  font-size: 0.8rem;
  color: var(--text-light);
}

.recent-list a:hover h4 {
  color: var(--primary-color);
}

/* 标签云样式 */
.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tags-cloud a {
  display: inline-block;
  padding: 5px 12px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  text-decoration: none;
  transition: var(--transition);
  color: inherit;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
}

.tags-cloud a:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  color: white !important;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .blog-layout {
    grid-template-columns: 1fr;
  }
  
  .blog-sidebar {
    order: -1;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 60px 0;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .article-title {
    font-size: 1.3rem;
  }
  
  .blog-content {
    padding: 50px 0;
  }
}

@media (max-width: 576px) {
  .article-image {
    height: 200px;
  }
  
  .article-meta {
    flex-direction: column;
    gap: 5px;
  }
}
</style> 