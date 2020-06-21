import { DirectiveOptions } from 'vue'
import { parser } from './parser'

const parseExpression = (expression) => {
  return expression
}

export const directive: DirectiveOptions = {
  inserted(el, binding, vnode) {
    el.innerHTML = parser(binding.expression, binding.)
  }
}
