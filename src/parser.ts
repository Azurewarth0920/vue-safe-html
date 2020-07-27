import htmlParset from 'htmlparser2'

export interface Config {
  mode: 'whiteList' | 'blackList'
  tags: []
  attributes: []
}

let defaults = {
  mode: 'whiteList'
}

export const setDefaults = (options: Config) => {
  defaults = Object.assign({}, defaults, options)
}

export function parser(content: string, options?: Config) {
  return content
}