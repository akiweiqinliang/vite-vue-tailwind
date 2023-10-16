import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const app = createApp(App)

app.component('QuillEditor', QuillEditor)
app.use(router)
app.use(ElementPlus)
app.mount('#app')


