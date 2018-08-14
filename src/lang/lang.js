import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ru from './ru.json'
import en from './en.json'
import kg from './kg.json'
import uz from './uz.json'

Vue.use(VueI18n)

const locale = localStorage.getItem('lang')

const messages = {
  ru, en, kg, uz
}

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n