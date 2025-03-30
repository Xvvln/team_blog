import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/variables.css'

const app = createApp(App)

app.use(router)
app.mount('#app')

// 添加Font Awesome CDN链接到head
const fontAwesomeCss = document.createElement('link')
fontAwesomeCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
fontAwesomeCss.rel = 'stylesheet'
fontAwesomeCss.integrity = 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=='
fontAwesomeCss.crossOrigin = 'anonymous'
fontAwesomeCss.referrerPolicy = 'no-referrer'
document.head.appendChild(fontAwesomeCss)
