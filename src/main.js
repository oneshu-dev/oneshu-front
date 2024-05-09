import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import AppView from './views/AppView.vue'
import LoginView from './views/LoginView.vue'
import DashboardContent from './components/DashboardContent.vue'
import MessageContent from './components/MessageContent.vue'

const routes = [
  { path: '/', component: AppView },
  { path: '/dashboard', component: DashboardContent },
  { path: '/message', component: MessageContent },
  { path: '/login', component: LoginView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')
