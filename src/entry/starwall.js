import { createApp } from 'vue'
import App from '../view/starwall.vue'
import ElementPlus from 'element-plus'

const app = createApp(App)
app.use(ElementPlus, {size: 'default', zIndex: 3000})
app.mount('#swapp')
