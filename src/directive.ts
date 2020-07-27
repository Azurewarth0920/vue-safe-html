import { DirectiveOptions } from 'vue'
import { parser } from './parser'
import { DirectiveBinding } from 'Vue/types/options'

function bindingParser(binding:DirectiveBinding) {
  return typeof binding.expression === 'string'
    ? parser(binding.expression)
    : parser(binding.expression.content, binding.expression.options)
}

export const directive: DirectiveOptions = {
  inserted(el, binding) {
    el.innerHTML = bindingParser(binding)
  },
  update(el, binding) {
    el.innerHTML = bindingParser(binding)
  },
  unbind(el) {
    // clear innerHTML when unbind
    el.innerHTML = ''
  }
}
