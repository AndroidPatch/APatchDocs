import { defineConfig } from 'vitepress'
import en from './en'
import ru from './ru'
import pt_BR from './pt_BR'
import zh_CN from './zh_CN'

export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: en.lang,
      themeConfig: en.themeConfig,
      description: en.description,
    },
    ru: {
      label: 'Русский',
      lang: ru.lang,
      themeConfig: ru.themeConfig,
      description: ru.description,
    },
    pt_BR: {
      label: 'Português (Brasil)',
      lang: pt_BR.lang,
      themeConfig: pt_BR.themeConfig,
      description: pt_BR.description,
    },
    zh_CN: {
      label: '简体中文',
      lang: zh_CN.lang,
      themeConfig: zh_CN.themeConfig,
      description: zh_CN.description,
    },
  },
})
