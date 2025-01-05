import { Html5 } from './html5'

export class Element {
  tag: string
  props: Record<string, any>
  children: any[]
}

export let Doctype: () => Element

export let Fragment: () => Element

export let createElement: (
  tag: string,
  props: Record<string, any>,
  children: any[]
) => Element

export let unsafe: (value: any) => any

export let render: (element: Element) => string

export let renderAsync: (element: Element) => Promise<string>

export namespace createElement.JSX {
  export interface IntrinsicElements extends Html5 {}
}
