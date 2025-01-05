import { Fragment, createElement } from './jsx.js'

let jsx = (tag, { children, ...attributes }) =>
  createElement(tag, attributes, children)

export { Fragment, jsx, jsx as jsxDEV, jsx as jsxs }
