import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
//Bootstrap
import "bootstrap/dist/css/bootstrap.css"
// 1. Define route components.
import Home from '../src/components/Home.vue'
import HelloWorld from '../src/components/HelloWorld.vue'
import Contact from '../src/components/Contact.vue'

// 2. Define some routes
// Each route should map to a component.
const routes = [
    { path: '/', component: Home },
    { path: '/helloWorld', component: HelloWorld },
    { path: '/contact', component: Contact },
  ]

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

// 5. Create and mount the root instance.
const app = createApp(App)
// use the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

//bootstrap
import "bootstrap/dist/js/bootstrap.js"
