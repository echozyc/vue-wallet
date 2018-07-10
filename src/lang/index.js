import vue from 'vue'
import VueI18n from 'vue-i18n'
// import Cookies from 'js-cookie'
import enLocal from './en'
import zhLocal from './zh'

vue.use(VueI18n)
const messages = {
  en:{
    ...enLocal
  },
  zh:{
    ...zhLocal
  }
}

const i18n = new VueI18n({
  local:'zh',
  messages
})

export default i18n
