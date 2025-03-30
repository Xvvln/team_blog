<template>
  <div class="member-detail-page">
    <!-- 成员信息 -->
    <section class="member-profile" v-if="member">
      <div class="container">
        <div class="profile-content">
          <!-- 基本信息 -->
          <div class="profile-basic">
            <div class="profile-image">
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
            <div class="profile-info">
              <h2 class="member-name">{{ member.name }}</h2>
              <div class="member-position">{{ member.position }}</div>
              <div class="member-skills">
                <span class="skill-tag" v-for="(skill, i) in member.skills" :key="i">
                  {{ skill }}
                </span>
              </div>
              <div class="member-brief">
                <h3>个人简介</h3>
                <p>{{ member.shortIntro }}</p>
                <p>{{ member.longIntro }}</p>
              </div>
              <div class="contact-share">
                <div class="member-contact" v-if="member.email || member.phone">
                  <h3>联系方式</h3>
                  <div class="contact-item" v-if="member.email">
                    <i class="fas fa-envelope"></i>
                    <span>{{ member.email }}</span>
                  </div>
                  <div class="contact-item" v-if="member.phone">
                    <i class="fas fa-phone"></i>
                    <span>{{ member.phone }}</span>
                  </div>
                </div>
                <div class="member-share">
                  <h3>分享</h3>
                  <div class="share-buttons">
                    <button class="share-btn weixin" @click="shareProfile('weixin')">
                      <i class="fab fa-weixin"></i>
                    </button>
                    <button class="share-btn weibo" @click="shareProfile('weibo')">
                      <i class="fab fa-weibo"></i>
                    </button>
                    <button class="share-btn link" @click="copyProfileLink">
                      <i class="fas fa-link"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 详细信息 -->
          <div class="profile-detail">
            <!-- 专业背景 -->
            <div class="detail-section">
              <h3 class="section-title">专业背景</h3>
              <div class="background-content">
                <div class="background-item" v-for="(item, index) in member.education" :key="'edu-'+index">
                  <div class="background-time">{{ item.year }}</div>
                  <div class="background-info">
                    <div class="background-title">{{ item.degree }}</div>
                    <div class="background-org">{{ item.school }}</div>
                    <div class="background-desc">{{ item.description }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 专业技能 -->
            <div class="detail-section">
              <h3 class="section-title">专业技能</h3>
              <div class="skills-content">
                <div class="skill-category" v-for="(category, catIndex) in member.skillCategories" :key="catIndex">
                  <h4>{{ category.name }}</h4>
                  <div class="skill-bars">
                    <div class="skill-bar" v-for="(skill, skillIndex) in category.skills" :key="skillIndex">
                      <div class="skill-label">{{ skill.name }}</div>
                      <div class="skill-level">
                        <div class="level-bar" :style="{ width: skill.level + '%' }"></div>
                      </div>
                      <div class="level-text">{{ skill.level }}%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 项目经历 -->
            <div class="detail-section">
              <h3 class="section-title">项目经历</h3>
              <div class="projects-content">
                <div class="project-item" v-for="(project, index) in member.projects" :key="index">
                  <div class="project-info">
                    <h4 class="project-title">{{ project.name }}</h4>
                    <div class="project-date">{{ project.date }}</div>
                    <p class="project-desc">{{ project.description }}</p>
                    <div class="project-tech">
                      <span v-for="(tech, i) in project.technologies" :key="i">{{ tech }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队其他成员 -->
    <section class="other-members">
      <div class="container">
        <h2 class="section-title">其他团队成员</h2>
        <div class="members-slider">
          <div 
            v-for="otherMember in otherMembers" 
            :key="otherMember.id"
            class="member-card"
            @click="viewMemberDetail(otherMember.id)"
          >
            <div class="member-avatar">
              <img :src="otherMember.avatar" :alt="otherMember.name">
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ otherMember.name }}</h3>
              <div class="member-position">{{ otherMember.position }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 返回成员列表 -->
    <section class="back-section">
      <div class="container">
        <router-link to="/members" class="back-link">
          <i class="fas fa-arrow-left"></i> 返回团队列表
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MemberDetailPage',
  data() {
    return {
      member: null,
      membersData: [
        {
          id: 'xiexuwh',
          name: '谢圩浩',
          position: '数据洞察工程师',
          avatar: require('../assets/images/members/谢圩浩.jpg'),
          shortIntro: '团队中的数据洞察专家，擅长数据分析与处理，对前沿技术如人工智能、机器学习保持高度关注。',
          longIntro: '拥有丰富的数据分析经验，善于从数据中提取有价值的信息，为团队提供数据支持和决策依据。热爱技术，经常参加各类技术分享会和开发者大会，保持对新技术的敏感度。',
          email: 'xwh9497@gmail.com',
          phone: '18958938008',
          weibo: 'https://weibo.com/6260676927',
          wechat: 'Xvvlnx412',
          bilibili: 'https://space.bilibili.com/243692491',
          github: 'https://github.com/Xvvln',
          skills: ['Python', 'C#', 'JavaScript', 'Data Mining', 'AI', 'Machine Learning', 'Data Visualization'],
          education: [
            {
              school: '温州医科大学',
              degree: '信息管理与信息系统学士',
              year: '2023-2027',
              description: '主修信息管理、数据库系统、数据挖掘、机器学习等课程。'
            }
          ],
          skillCategories: [
            {
              name: '编程语言',
              skills: [
                { name: 'Python', level: 90 },
                { name: 'C#', level: 80 },
                { name: 'JavaScript', level: 75 }
              ]
            },
            {
              name: '数据分析',
              skills: [
                { name: '数据挖掘', level: 85 },
                { name: '数据可视化', level: 80 },
                { name: '机器学习', level: 75 }
              ]
            }
          ],
          projects: [
            {
              name: '医疗数据分析系统',
              date: '2025',
              description: '基于Python和机器学习算法的医疗数据分析系统，用于分析患者数据并预测潜在风险。',
              technologies: ['Python', 'TensorFlow', 'Pandas', 'Matplotlib']
            },
            {
              name: '家校拼车服务小程序',
              date: '2025',
              description: '温州医科大学与温州交运公司合作开发的家校拼车服务小程序。',
              technologies: ['微信小程序', 'JavaScript', 'Node.js', 'MySQL']
            }
          ],
          futureGoals: '毕业后进入知名互联网企业担任数据分析师，积累项目经验，深入研究数据挖掘算法优化。三年内考取相关技术认证，提升专业竞争力。五年后晋升为数据科学团队负责人，带领团队攻克复杂数据难题，助力企业提升核心竞争力。'
        },
        {
          id: 'yuxinwei',
          name: '余昕炜',
          position: '数据可视化艺术家',
          avatar: require('../assets/images/members/余昕炜.jpg'),
          shortIntro: '在数据分析与可视化方面有着独特的天赋，能够将复杂的数据通过直观的图表、图形展示出来。',
          longIntro: '专注于数据可视化领域，擅长使用各种可视化工具和技术，将复杂的数据转化为直观易懂的图表和图形。注重用户体验，追求数据呈现的美观与实用并重。',
          email: 'yuxinwei@example.com',
          phone: '暂无',
          wechat: 'wxid_6amcnk807mfg22',
          bilibili: 'https://account.bilibili.com/big',
          personalTags: ['主世界农场主', '基建狂魔', '嗜睡症患者', '疯狂的冒险者', '装备的狂热爱好者', '黑心商人', '生电玩家'],
          skills: ['Tableau', 'Power BI', 'Data Analysis', 'Visualization', 'JavaScript', 'D3.js', 'ECharts'],
          education: [
            {
              school: '温州医科大学',
              degree: '信息管理与信息系统学士',
              year: '2023-2027',
              description: '主修数据可视化、用户体验设计、信息架构等课程。'
            }
          ],
          skillCategories: [
            {
              name: '可视化工具',
              skills: [
                { name: 'Tableau', level: 95 },
                { name: 'Power BI', level: 90 },
                { name: 'ECharts', level: 85 }
              ]
            },
            {
              name: '编程技能',
              skills: [
                { name: 'JavaScript', level: 80 },
                { name: 'D3.js', level: 85 },
                { name: 'HTML/CSS', level: 75 }
              ]
            }
          ],
          projects: [
            {
              name: '健康数据可视化平台',
              date: '2027',
              description: '使用D3.js和React开发的健康数据可视化平台，帮助用户更直观地了解自己的健康状况。',
              technologies: ['React', 'D3.js', 'Node.js', 'MongoDB']
            },
            {
              name: '医疗资源分布图',
              date: '2027',
              description: '基于Tableau开发的医疗资源分布图，展示全国各地医疗资源的分布情况。',
              technologies: ['Tableau', 'SQL', 'Geographic Information System']
            }
          ],
          futureGoals: '毕业后加入数据分析公司，专注于数据可视化项目。一年内考取数据可视化相关认证，提升专业技能。三年后成为数据可视化团队核心成员，负责重要项目的可视化设计与开发。五年内晋升为数据可视化专家，为企业提供高端数据可视化解决方案。',
          funFacts: [
            {
              title: '我的世界',
              description: '坐拥牛、羊、马、猪、坤等各大农场，自给自足，日出而作，日落而息。为各地貌村庄搭建"高铁"，促进各村庄互通有无，加快文化交融。几十处房产，地处各种地貌，在沼泽、悬崖、沙滩上安然入睡。'
            },
            {
              title: '王者荣耀',
              description: '牢九门战神，全能不补位，鸡爪流内门大弟子。一血大帝，43秒稳定送出一血。精通各路T5英雄，高达50%胜率的场次战神。'
            }
          ]
        },
        {
          id: 'shipinghui',
          name: '史蘋慧',
          position: '业务拓展先锋',
          avatar: require('../assets/images/members/史蘋慧.jpg'),
          shortIntro: '具备敏锐的市场洞察力和出色的沟通能力，能够准确把握市场动态与客户需求。',
          longIntro: '作为团队的业务拓展专家，擅长市场调研、客户沟通和项目推广。具有良好的人际交往能力，能够快速建立和维护客户关系，促进业务合作。',
          email: '19900999900@163.com',
          phone: '19900999900',
          weibo: 'https://weibo.com/u/5589792153',
          wechat: '手捧花的q',
          bilibili: '手捧花的q',
          personalBlog: 'https://weibo.com/u/5589792153',
          skills: ['Market Research', 'Communication', 'Project Management', 'JavaScript', 'Vue.js', 'Business Analysis'],
          education: [
            {
              school: '温州医科大学',
              degree: '信息管理与信息系统学士',
              year: '2023-2027',
              description: '主修市场营销、项目管理、商务沟通等课程。'
            }
          ],
          skillCategories: [
            {
              name: '业务能力',
              skills: [
                { name: '市场调研', level: 90 },
                { name: '商务沟通', level: 95 },
                { name: '项目管理', level: 85 }
              ]
            },
            {
              name: '技术能力',
              skills: [
                { name: 'JavaScript', level: 80 },
                { name: 'React', level: 75 },
                { name: 'Vue.js', level: 85 }
              ]
            }
          ],
          projects: [
            {
              name: '医疗产品市场推广',
              date: '2027',
              description: '负责团队医疗信息产品的市场推广策略制定与实施，成功拓展三家合作医院。',
              technologies: ['市场营销', '商务谈判', '项目管理']
            },
            {
              name: '用户需求分析系统',
              date: '2027',
              description: '开发基于用户反馈的需求分析系统，帮助团队更精准把握用户需求变化。',
              technologies: ['Vue.js', 'Node.js', 'MySQL']
            }
          ],
          languages: ['中文（母语）', '英文（熟练）', '马来文（熟练）'],
          certificates: ['英语四级证书', '英语六级证书', '计算机二级证书', '普通话甲等'],
          futureGoals: '毕业后进入互联网企业市场部，负责市场调研与业务拓展。一年内熟悉市场拓展流程，积累客户资源。三年后晋升为市场拓展经理，带领团队开拓新市场。五年内成为市场与业务拓展专家，为企业制定市场战略，提升企业市场份额。'
        },
        {
          id: 'shiqiyu',
          name: '石祁煜',
          position: '智能项目导航员',
          avatar: require('../assets/images/members/石祁煜.jpg'),
          shortIntro: '作为一名信管专业学生，兼具医学背景与信息技术素养，在团队中担任智能项目导航员。',
          longIntro: '具备出色的项目管理能力，熟悉项目生命周期的各个环节，从项目启动、规划、执行到监控与收尾，都能精准把控进度与质量。善于协调团队成员之间的关系，合理分配任务，确保项目高效推进。',
          email: '3158996038@qq.com',
          phone: '13567296596',
          bilibili: 'https://space.bilibili.com/353825876',
          skills: ['Project Management', 'C', 'C++', 'Python', 'SQL Server', '敏捷开发'],
          education: [
            {
              school: '温州医科大学',
              degree: '信息管理与信息系统学士',
              year: '2023-至今',
              description: '第一临床医学院信息与工程学院，主修C++语言、C语言、数据库原理、Python程序设计、统计学、管理学等课程。'
            }
          ],
          skillCategories: [
            {
              name: '项目管理',
              skills: [
                { name: '项目规划', level: 85 },
                { name: '资源协调', level: 90 },
                { name: '进度控制', level: 85 }
              ]
            },
            {
              name: '编程技能',
              skills: [
                { name: 'C/C++', level: 80 },
                { name: 'Python', level: 75 },
                { name: 'SQL Server', level: 70 }
              ]
            }
          ],
          projects: [
            {
              name: '医院信息系统调研',
              date: '2027',
              description: '前往医院信息科开展为期两周的见习工作，了解医院信息系统实际运行流程，撰写见习收获与体验。',
              technologies: ['需求分析', '系统调研', '流程优化']
            },
            {
              name: '团队项目管理系统',
              date: '2027',
              description: '开发团队内部使用的项目管理系统，提高团队项目协作效率。',
              technologies: ['Python', 'SQL Server', 'Flask']
            }
          ],
          certificates: ['英语四六级证书'],
          honors: ['校级二等奖学金', '校级数学建模三等奖'],
          futureGoals: '毕业后加入大型企业项目管理部，参与各类信息化项目管理。一年内考取PMP认证，提升项目管理专业水平。三年后独立负责重要项目，积累项目管理经验。五年内晋升为项目经理，带领团队完成大型复杂项目，提升企业信息化水平。'
        },
        {
          id: 'yaoqi',
          name: '要琦',
          position: '架构创新设计师',
          avatar: require('../assets/images/members/要琦.jpg'),
          shortIntro: '对计算机系统架构有着深入的理解，能够设计出高效、稳定、可扩展的信息系统架构。',
          longIntro: '在团队中，我是一个温州医科大学信息管理与信息系统专业的大二学生，一个在医学和IT的交叉路口快乐奔跑的"斜杠青年"。为人友善，乐观开朗，近乎有些豁达，只要地球不爆炸，照样能活，天生乐天派，但绝不是没心没肺；而且我的好奇心非常强，无论是什么新奇的事我都想要了解了解参与参与，积极性强，有着很强的行动力和执行力。',
          email: '3049719200@qq.com',
          phone: '19817592597',
          douyin: 'https://www.douyin.com/user/self?from_tab_name=main',
          xiaohongshu: 'https://www.xiaohongshu.com/explore',
          skills: ['System Architecture', 'Database Design', 'JavaScript', 'Python', 'Java', 'React', 'Vue.js'],
          education: [
            {
              school: '温州医科大学',
              degree: '信息管理与信息系统学士',
              year: '2023-2027',
              description: '主修系统架构设计、数据库系统、分布式系统等课程。'
            }
          ],
          skillCategories: [
            {
              name: '架构设计',
              skills: [
                { name: '系统架构', level: 85 },
                { name: '数据库设计', level: 80 },
                { name: '网络架构', level: 75 }
              ]
            },
            {
              name: '编程技能',
              skills: [
                { name: 'JavaScript', level: 90 },
                { name: 'Python', level: 85 },
                { name: 'Java', level: 80 }
              ]
            }
          ],
          projects: [
            {
              name: '医疗系统架构优化',
              date: '2027',
              description: '为某医院的信息系统进行架构优化，提高系统性能和扩展性。',
              technologies: ['系统架构', 'Java', 'MySQL', 'Redis']
            },
            {
              name: '健康数据分析平台',
              date: '2027',
              description: '开发基于云架构的健康数据分析平台，支持大规模数据处理。',
              technologies: ['Python', 'AWS', 'Hadoop', 'Spark']
            }
          ],
          interests: ['篮球', '羽毛球', '乒乓球', '排球', '游戏'],
          classRole: '文体委员',
          certificates: ['英语四级证书'],
          futureGoals: '毕业后进入软件开发企业担任系统架构助理，参与大型系统架构设计。两年内深入学习云计算架构技术，提升架构设计能力。三年后晋升为系统架构师，负责企业核心系统架构设计与优化，保障系统稳定运行。'
        },
        {
          id: 'baxinyi',
          name: '巴欣怡',
          position: '安全守护专家',
          avatar: require('../assets/images/members/巴欣怡.jpg'),
          shortIntro: '对信息安全有着浓厚的兴趣，深入学习了网络安全、数据加密、系统安全防护等知识。',
          longIntro: '能够识别信息系统中的安全漏洞，并制定有效的安全策略加以防范。在团队中，负责保障团队开发的信息系统的安全性，确保数据不被泄露、系统不被攻击。性格上友善随和，愿意倾听大家的想法和故事，对平衡与和谐有着执着追求，不仅体现在生活里追求舒适的状态，在团队中也擅长协调各方关系。',
          email: '2106365057@qq.com',
          phone: '19858818535',
          weibo: 'https://weibo.com/u/1009633542',
          bilibili: 'https://space.bilibili.com/3546690581695198?spm_id_from=333.337.0.0',
          douyin: 'https://www.douyin.com/user/MS4wLjABAAAArNSzHr5tjoIroIq7oxXhgptc5PtiNifzvcuYvldeXgw?from_tab_name=main',
          skills: ['Information Security', 'Network Security', 'Data Encryption', 'JavaScript', 'Python', 'Java'],
          education: [
            {
              school: '温州医科大学',
              degree: '信息管理与信息系统学士',
              year: '2023-2027',
              description: '主修信息安全、网络安全、密码学等课程。'
            }
          ],
          skillCategories: [
            {
              name: '安全技能',
              skills: [
                { name: '网络安全', level: 90 },
                { name: '数据加密', level: 85 },
                { name: '安全审计', level: 80 }
              ]
            },
            {
              name: '编程技能',
              skills: [
                { name: 'JavaScript', level: 75 },
                { name: 'Python', level: 80 },
                { name: 'Java', level: 75 }
              ]
            }
          ],
          projects: [
            {
              name: '医疗数据安全系统',
              date: '2027',
              description: '开发医疗数据安全保护系统，确保患者隐私数据不被泄露。',
              technologies: ['数据加密', 'JavaScript', 'Node.js', 'MongoDB']
            },
            {
              name: '网络安全审计工具',
              date: '2027',
              description: '开发网络安全审计工具，帮助企业发现系统安全漏洞。',
              technologies: ['Python', 'Penetration Testing', 'Network Analysis']
            }
          ],
          hobbies: ['看书', '跑步', '排球'],
          certificates: ['英语四级证书'],
          languages: ['中文（母语）', '英语（熟练）'],
          futureGoals: '成为一名信息安全领域的权威专家，为企业筑牢信息安全防线。毕业后进入信息安全公司担任安全工程师，参与网络安全防护项目。一年内考取信息安全认证，提升专业水平。三年后晋升为信息安全专家，负责企业信息安全架构设计与安全事件应急响应。五年内成为信息安全领域的知名专家，为企业提供全面的信息安全解决方案。'
        },
        {
          id: 'jiangyuanjian',
          name: '蒋远见',
          position: '用户体验优化师',
          avatar: require('../assets/images/members/蒋远见.jpg'),
          shortIntro: '专注于用户体验优化领域，深入钻研用户研究方法，能够精准把握用户需求与行为模式。',
          longIntro: '以此为依据不断优化产品和服务的用户体验。在设计工具使用上，Axure、Sketch等得心应手，能高效完成交互设计与界面设计工作。重视与开发团队的紧密协作，确保设计方案能够顺利落地实施。同时，也在持续探索行业前沿知识，致力于为用户打造更优质的体验。',
          email: 'jiangyuanjian@email.com',
          phone: '13900139000',
          skills: ['User Experience', 'UI Design', 'Axure', 'Sketch', 'Adobe XD', 'User Research'],
          education: [
            {
              school: 'XX大学',
              degree: '工业设计专业本科（用户体验设计方向）',
              year: '2018-2022',
              description: '主修用户体验设计、交互设计、界面设计等课程。'
            }
          ],
          skillCategories: [
            {
              name: '设计技能',
              skills: [
                { name: '用户研究', level: 90 },
                { name: '交互设计', level: 95 },
                { name: '界面设计', level: 85 }
              ]
            },
            {
              name: '工具使用',
              skills: [
                { name: 'Axure', level: 95 },
                { name: 'Sketch', level: 90 },
                { name: 'Adobe XD', level: 85 }
              ]
            }
          ],
          projects: [
            {
              name: 'ABC企业产品用户体验优化',
              date: '2027',
              description: '运用Axure进行高保真原型设计，通过用户调研收集反馈，对ABC企业产品的界面布局和交互流程进行优化。优化后的产品界面操作流程简化20%，用户完成核心任务的平均时间缩短15%。',
              technologies: ['Axure', 'User Research', 'UI Design']
            },
            {
              name: 'DEF移动应用用户体验提升',
              date: '2027',
              description: '使用Sketch进行界面设计，结合数据分析结果，对DEF移动应用的视觉设计和交互逻辑进行调整。优化后应用的用户留存率提高10%，新用户注册转化率提升8%。',
              technologies: ['Sketch', 'UI Design', 'User Testing']
            }
          ],
          workExperience: [
            {
              company: 'XYZ科技有限公司',
              position: '用户体验优化师',
              period: '2022-至今',
              description: '负责公司核心产品的用户体验优化工作，制定并执行用户研究计划，运用Axure、Sketch等工具进行交互和界面设计优化，与开发、产品团队密切沟通协作，推动设计方案的落地，定期收集用户反馈并持续优化产品体验。'
            }
          ],
          certificates: ['初级用户体验设计师认证证书', '计算机辅助设计绘图员（中级）证书'],
          languages: ['中文（母语）', '英语（良好，具备阅读英文专业文献和交流能力）'],
          futureGoals: '毕业后加入互联网企业用户体验团队，从事用户研究和交互设计工作。一年内积累项目经验，熟悉用户体验设计流程。三年内考取用户体验相关认证，提升专业技能水平。五年后晋升为用户体验团队负责人，带领团队开展用户体验优化项目，为企业产品和服务的持续改进提供有力支持。'
        }
      ]
    }
  },
  computed: {
    otherMembers() {
      // 过滤出除了当前成员以外的其他成员，最多显示3个
      return this.membersData
        .filter(m => m.id !== this.$route.params.id)
        .slice(0, 3);
    }
  },
  created() {
    // 初始化加载成员数据
    this.findMember();
  },
  watch: {
    // 监听路由参数变化，当路由变化时重新加载成员数据
    '$route.params.id': function(newId) {
      if (newId) {
        this.findMember();
      }
    }
  },
  methods: {
    findMember() {
      const memberId = this.$route.params.id;
      this.member = this.membersData.find(m => m.id === memberId) || null;
      
      // 如果找不到成员，重定向到成员列表页
      if (!this.member && memberId) {
        this.$router.push('/members');
      }
      
      // 设置页面标题
      document.title = this.member ? `${this.member.name} - 团队成员` : '成员详情';
    },
    viewMemberDetail(memberId) {
      if (this.$route.params.id !== memberId) {
        this.$router.push(`/member/${memberId}`);
      }
    },
    shareProfile(platform) {
      const url = window.location.href;
      const title = `${this.member.name} - ${this.member.position} | 医信团队`;
      
      if (platform === 'weibo') {
        const weiboUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        window.open(weiboUrl, '_blank');
      } else if (platform === 'weixin') {
        alert('请打开微信，使用"扫一扫"扫描页面中的二维码进行分享。');
        // 实际项目中应该生成二维码
      }
    },
    copyProfileLink() {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        alert('链接已复制到剪贴板!');
      }).catch(err => {
        console.error('复制失败:', err);
      });
    }
  }
}
</script>

<style scoped>
/* 页面标题样式 */
.page-header {
  padding: 80px 0;
  background: var(--primary-gradient);
  text-align: center;
  color: var(--white);
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
}

/* 成员档案样式 */
.member-profile {
  padding: 80px 0;
  background-color: var(--white);
}

.profile-content {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

/* 基本信息样式 */
.profile-basic {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  padding: 30px;
  background-color: var(--secondary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.profile-image {
  position: relative;
}

.profile-image img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: var(--border-radius);
}

.member-social {
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.member-social a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  transition: var(--transition);
}

.member-social a:hover {
  transform: translateY(-5px);
  background-color: var(--primary-dark);
}

.profile-info {
  display: flex;
  flex-direction: column;
}

.member-name {
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 10px;
}

.member-position {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 20px;
  font-weight: 500;
}

.member-skills {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.skill-tag {
  padding: 6px 15px;
  background-color: #f0f0f0;
  color: var(--text-color);
  border-radius: 20px;
  font-size: 0.9rem;
  margin-right: 10px;
  margin-bottom: 10px;
}

.member-brief {
  margin-top: 20px;
}

.member-brief h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--text-color);
}

.member-brief p {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 15px;
}

/* 联系方式和分享 */
.contact-share {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.member-contact, .member-share {
  flex: 1;
}

.member-contact h3, .member-share h3 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: var(--text-color);
  border-bottom: 2px solid var(--gray-light);
  padding-bottom: 8px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.contact-item i {
  width: 35px;
  height: 35px;
  background-color: var(--primary-light);
  color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;
}

.share-buttons {
  display: flex;
  gap: 10px;
}

.share-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  cursor: pointer;
  transition: var(--transition);
  font-size: 1.2rem;
}

.share-btn:hover {
  transform: translateY(-3px);
}

.share-btn.weixin {
  background-color: #07C160;
}

.share-btn.weibo {
  background-color: #E6162D;
}

.share-btn.link {
  background-color: #333;
}

/* 详细信息样式 */
.profile-detail {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.detail-section {
  padding: 30px;
  background-color: var(--secondary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: var(--text-color);
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background-color: var(--primary-color);
}

/* 背景经历样式 */
.background-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.background-item {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 20px;
}

.background-time {
  font-weight: 600;
  color: var(--primary-color);
}

.background-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text-color);
}

.background-org {
  font-size: 1rem;
  color: var(--text-light);
  margin-bottom: 10px;
}

.background-desc {
  color: var(--text-light);
  line-height: 1.6;
}

/* 技能分类样式 */
.skills-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.skill-category h4 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--text-color);
}

.skill-bars {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-bar {
  display: flex;
  align-items: center;
}

.skill-label {
  width: 120px;
  font-weight: 500;
  color: var(--text-color);
}

.skill-level {
  flex: 1;
  height: 10px;
  background-color: var(--gray-light);
  border-radius: 5px;
  overflow: hidden;
}

.level-bar {
  height: 100%;
  background-color: var(--primary-color);
}

.level-text {
  width: 50px;
  text-align: right;
  font-size: 0.9rem;
  color: var(--text-light);
  margin-left: 10px;
}

/* 项目经历样式 */
.projects-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.project-item {
  border-left: 3px solid var(--primary-color);
  padding-left: 20px;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text-color);
}

.project-date {
  font-size: 0.9rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.project-desc {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 15px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.project-tech span {
  padding: 4px 12px;
  background-color: var(--gray-light);
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--text-light);
}

/* 返回按钮样式 */
.back-section {
  padding: 40px 0 80px;
  background-color: var(--white);
}

.back-link {
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.back-link i {
  margin-right: 5px;
}

.back-link:hover {
  color: var(--primary-dark);
}

/* 响应式设计 */
@media (max-width: 992px) {
  .profile-basic {
    grid-template-columns: 1fr;
  }
  
  .profile-image {
    max-width: 300px;
    margin: 0 auto;
  }
  
  .member-name {
    text-align: center;
  }
  
  .member-position {
    text-align: center;
  }
  
  .member-skills {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 60px 0;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .member-profile {
    padding: 50px 0;
  }
  
  .detail-section {
    padding: 20px;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .background-item {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 2rem;
  }
  
  .member-name {
    font-size: 2rem;
  }
  
  .skill-bar {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .skill-label {
    width: 100%;
    margin-bottom: 5px;
  }
  
  .level-text {
    margin-top: 5px;
    margin-left: 0;
    text-align: left;
  }
}

/* 其他团队成员 */
.other-members {
  padding: 80px 0;
  background-color: var(--secondary-color);
}

.members-slider {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
}

.member-card {
  background-color: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  cursor: pointer;
}

.member-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
}

.member-avatar {
  height: 220px;
  overflow: hidden;
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.member-card:hover .member-avatar img {
  transform: scale(1.1);
}

.member-info {
  padding: 20px;
  text-align: center;
}

.member-name {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: var(--text-color);
}

.member-position {
  font-size: 0.9rem;
  color: var(--primary-color);
}

/* 响应式设计 */
@media (max-width: 992px) {
  .contact-share {
    flex-direction: column;
    gap: 20px;
  }
  
  .members-slider {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .member-avatar {
    height: 180px;
  }
}
</style> 