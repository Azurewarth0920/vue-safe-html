import { VueConstructor } from 'Vue'
import { setDefaults, Config } from './parser'
import { directive } from './directive'
import { PluginObject } from 'Vue/types/umd'

const install = (Vue: VueConstructor, options: Config) => {
  if (options) setDefaults(options)
  Vue.directive('safe-html', directive)
}

const VueSafeHtml: PluginObject<any> = {
  install
}

export default VueSafeHtml
