import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    en: {
      message: {
        hello: 'world hello'
      }
    },
    zh: {
      message: {
        hello: '世界'
      }
    }
  }
})
export {i18n}
