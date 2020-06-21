import vue from 'Vue'
import safeHtml from './directive'
import { directive } from './parser'

const install = (Vue: vue, options) => {
  if (options) setDefaults(options)
  Vue.directive('safe-html', directive)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.safeHtml = safeHtml
  window.safeHtml.setDefaults = setDefaults
  window.Vue.use(install)
}

safeHtml.install = install
export default safeHtml
