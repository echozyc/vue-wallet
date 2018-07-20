// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import zh from './lang/zh'
import en from './lang/en'
import VueI18n from 'vue-i18n'
//Element UI css
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale:'en',
  messages: {
    'zh': zh,
    'en': en
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
