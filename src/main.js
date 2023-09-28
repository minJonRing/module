import { VueCssDoodle } from '@luxdamore/vue-css-doodle';
import '@luxdamore/vue-css-doodle/dist/VueCssDoodle.css';
import 'css-doodle';
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.component(
    VueCssDoodle.name,
    VueCssDoodle
)

app.config.ignoredElements = ['css-doodle'];

app.mount('#app')
