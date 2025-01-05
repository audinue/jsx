import { Html5 } from './html5'
import { Element, Fragment } from './jsx'

export let jsx: (
  tag: string,
  props: { children: any[]; [key: string]: any },
  key?: any
) => Element

export namespace JSX {
  export interface IntrinsicElements extends Html5 {}
}

export { Fragment, jsx as jsxDEV, jsx as jsxs }
