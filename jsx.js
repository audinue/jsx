class Element {
  constructor (tag, props, ...children) {
    this.tag = tag
    this.props = props ?? {}
    this.children = children.flat(Infinity)
  }
}

class Fragment {}

class Doctype {}

class Unsafe extends String {}

let unsafe = value => new Unsafe(value)

let voidTags = {
  area: 0,
  base: 0,
  br: 0,
  col: 0,
  embed: 0,
  hr: 0,
  img: 0,
  input: 0,
  link: 0,
  meta: 0,
  source: 0,
  track: 0,
  wbr: 0
}

let createElement = (...args) => new Element(...args)

let replacement = char =>
  char === '"' ? '&quot;' : char === '&' ? '&amp;' : '&lt;'

let quote = value => {
  if (value === null || value === undefined || value === false) {
    return ''
  } else if (value instanceof Unsafe) {
    return value
  } else {
    return String(value).replace(/["&<]/g, replacement)
  }
}

let renderProps = props => {
  let html = ''
  for (let name in props) {
    let value = props[name]
    if (typeof value === 'boolean') {
      if (value) {
        html += ' ' + name
      }
    } else {
      html += ' ' + name + '="' + quote(value) + '"'
    }
  }
  return html
}

let renderChild = child =>
  child instanceof Element ? render(child) : quote(child)

let join = array => array.join('')

let renderChildren = children => join(children.map(renderChild))

let render = ({ tag, props, children }) => {
  if (tag === Doctype) {
    return '<!DOCTYPE html>'
  } else if (tag === Fragment) {
    return renderChildren(children)
  } else if (typeof tag === 'function') {
    return render(tag({ ...props, children }))
  } else {
    return (
      '<' +
      tag +
      renderProps(props) +
      '>' +
      (tag in voidTags ? '' : renderChildren(children) + '</' + tag + '>')
    )
  }
}

let renderChildAsync = child =>
  child instanceof Element ? renderAsync(child) : quote(child)

let renderChildrenAsync = children =>
  Promise.all(children.map(renderChildAsync)).then(join)

let renderAsync = async ({ tag, props, children }) => {
  if (tag === Doctype) {
    return '<!DOCTYPE html>'
  } else if (tag === Fragment) {
    return renderChildrenAsync(children)
  } else if (tag === Context) {
    return renderChildrenAsync(
      children,
      { ...context, ...props.value },
      context
    )
  } else if (typeof tag === 'function') {
    return renderAsync(await tag({ ...props, children }))
  } else {
    return (
      '<' +
      tag +
      renderProps(props) +
      '>' +
      (tag in voidTags
        ? ''
        : (await renderChildrenAsync(children)) + '</' + tag + '>')
    )
  }
}

export { createElement, Doctype, Fragment, render, renderAsync, unsafe }
