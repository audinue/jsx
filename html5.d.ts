export interface Tag {
  accesskey?: string | undefined
  autocapitalize?:
    | 'characters'
    | 'none'
    | 'off'
    | 'on'
    | 'sentences'
    | 'words'
    | undefined
  autocorrect?: 'off' | 'on' | undefined
  autofocus?: boolean | undefined
  class?: string | undefined
  contenteditable?: 'false' | 'plaintext-only' | 'true' | undefined
  dir?: 'auto' | 'ltr' | 'rtl' | undefined
  draggable?: 'false' | 'true' | undefined
  enterkeyhint?:
    | 'done'
    | 'enter'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send'
    | undefined
  hidden?: boolean | '' | 'hidden' | 'until-found' | undefined
  id?: string | undefined
  inert?: boolean | undefined
  inputmode?:
    | 'decimal'
    | 'email'
    | 'none'
    | 'numeric'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | undefined
  is?: string | undefined
  itemid?: string | undefined
  itemprop?: string | undefined
  itemref?: string | undefined
  itemscope?: boolean | undefined
  itemtype?: string | undefined
  lang?: string | undefined
  nonce?: string | undefined
  popover?: 'auto' | 'manual' | undefined
  slot?: string | undefined
  spellcheck?: 'false' | 'true' | undefined
  style?: string | undefined
  tabindex?: number | string | undefined
  title?: string | undefined
  translate?: 'no' | 'yes' | undefined
  writingsuggestions?: 'false' | 'true' | undefined
  [name: string]: boolean | number | string | undefined
}

export interface A extends Tag {
  download?: string | undefined
  href?: string | undefined
  hreflang?: string | undefined
  ping?: string | undefined
  referrerpolicy?: string | undefined
  rel?: string | undefined
  target?: string | undefined
  type?: string | undefined
}

export interface Abbr extends Tag {
  title?: string | undefined
}

export interface Area extends Tag {
  alt?: string | undefined
  coords?: number | string | undefined
  download?: string | undefined
  href?: string | undefined
  ping?: string | undefined
  referrerpolicy?: string | undefined
  rel?: string | undefined
  shape?: 'circle' | 'default' | 'poly' | 'rect' | undefined
  target?: string | undefined
}

export interface Audio extends Tag {
  autoplay?: boolean | undefined
  controls?: boolean | undefined
  crossorigin?: 'anonymous' | 'use-credentials' | undefined
  loop?: boolean | undefined
  muted?: boolean | undefined
  preload?: 'auto' | 'metadata' | 'none' | undefined
  src?: string | undefined
}

export interface Base extends Tag {
  href?: string | undefined
  target?: string | undefined
}

export interface Bdo extends Tag {
  dir?: 'ltr' | 'rtl' | undefined
}

export interface Blockquote extends Tag {
  cite?: string | undefined
}

export interface Button extends Tag {
  disabled?: boolean | undefined
  form?: string | undefined
  formaction?: string | undefined
  formenctype?:
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain'
    | undefined
  formmethod?: 'dialog' | 'get' | 'post' | undefined
  formnovalidate?: boolean | undefined
  formtarget?: string | undefined
  name?: string | undefined
  popovertarget?: string | undefined
  popovertargetaction?: 'hide' | 'show' | 'toggle' | undefined
  type?: 'button' | 'reset' | 'submit' | undefined
  value?: string | undefined
}

export interface Canvas extends Tag {
  height?: number | string | undefined
  width?: number | string | undefined
}

export interface Col extends Tag {
  span?: number | string | undefined
}

export interface Colgroup extends Tag {
  span?: number | string | undefined
}

export interface Data extends Tag {
  value?: string | undefined
}

export interface Del extends Tag {
  cite?: string | undefined
  datetime?: string | undefined
}

export interface Details extends Tag {
  name?: string | undefined
  open?: boolean | undefined
}

export interface Dfn extends Tag {
  title?: string | undefined
}

export interface Dialog extends Tag {
  open?: boolean | undefined
}

export interface Embed extends Tag {
  height?: number | string | undefined
  src?: string | undefined
  type?: string | undefined
  width?: number | string | undefined
}

export interface Fieldset extends Tag {
  disabled?: boolean | undefined
  form?: string | undefined
  name?: string | undefined
}

export interface Form extends Tag {
  'accept-charset'?: string | undefined
  action?: string | undefined
  autocomplete?: 'off' | 'on' | undefined
  enctype?:
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain'
    | undefined
  method?: 'dialog' | 'get' | 'post' | undefined
  name?: string | undefined
  novalidate?: boolean | undefined
  target?: string | undefined
}

export interface Iframe extends Tag {
  allow?: string | undefined
  allowfullscreen?: boolean | undefined
  height?: number | string | undefined
  loading?: 'eager' | 'lazy' | undefined
  name?: string | undefined
  referrerpolicy?: string | undefined
  sandbox?: string | undefined
  src?: string | undefined
  srcdoc?: string | undefined
  width?: number | string | undefined
}

export interface Img extends Tag {
  alt?: string | undefined
  crossorigin?: 'anonymous' | 'use-credentials' | undefined
  decoding?: 'async' | 'auto' | 'sync' | undefined
  fetchpriority?: 'auto' | 'high' | 'low' | undefined
  height?: number | string | undefined
  ismap?: boolean | undefined
  loading?: 'eager' | 'lazy' | undefined
  referrerpolicy?: string | undefined
  sizes?: string | undefined
  src?: string | undefined
  srcset?: string | undefined
  usemap?: string | undefined
  width?: number | string | undefined
}

export interface Input extends Tag {
  accept?: string | undefined
  alpha?: boolean | undefined
  alt?: string | undefined
  autocomplete?: string | undefined
  checked?: boolean | undefined
  colorspace?: 'display-p3' | 'limited-srgb' | undefined
  dirname?: string | undefined
  disabled?: boolean | undefined
  form?: string | undefined
  formaction?: string | undefined
  formenctype?:
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain'
    | undefined
  formmethod?: 'dialog' | 'get' | 'post' | undefined
  formnovalidate?: boolean | undefined
  formtarget?: string | undefined
  height?: number | string | undefined
  list?: string | undefined
  max?: string | undefined
  maxlength?: number | string | undefined
  min?: string | undefined
  minlength?: number | string | undefined
  multiple?: boolean | undefined
  name?: string | undefined
  pattern?: string | undefined
  placeholder?: string | undefined
  popovertarget?: string | undefined
  popovertargetaction?: 'hide' | 'show' | 'toggle' | undefined
  readonly?: boolean | undefined
  required?: boolean | undefined
  size?: number | string | undefined
  src?: string | undefined
  step?: number | string | undefined
  title?: string | undefined
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | undefined
  value?: string | undefined
  width?: number | string | undefined
}

export interface Ins extends Tag {
  cite?: string | undefined
  datetime?: string | undefined
}

export interface Label extends Tag {
  for?: string | undefined
}

export interface Li extends Tag {
  value?: number | string | undefined
}

export interface Link extends Tag {
  as?: string | undefined
  blocking?: string | undefined
  color?: string | undefined
  crossorigin?: 'anonymous' | 'use-credentials' | undefined
  disabled?: boolean | undefined
  fetchpriority?: 'auto' | 'high' | 'low' | undefined
  href?: string | undefined
  hreflang?: string | undefined
  imagesizes?: string | undefined
  imagesrcset?: string | undefined
  integrity?: string | undefined
  media?: string | undefined
  referrerpolicy?: string | undefined
  rel?: string | undefined
  sizes?: string | undefined
  title?: string | undefined
  type?: string | undefined
}

export interface Map extends Tag {
  name?: string | undefined
}

export interface Meta extends Tag {
  charset?: 'utf-8' | undefined
  content?: string | undefined
  'http-equiv'?:
    | 'content-security-policy'
    | 'content-type'
    | 'default-style'
    | 'refresh'
    | 'x-ua-compatible'
    | undefined
  media?: string | undefined
  name?: string | undefined
}

export interface Meter extends Tag {
  high?: number | string | undefined
  low?: number | string | undefined
  max?: number | string | undefined
  min?: number | string | undefined
  optimum?: number | string | undefined
  value?: number | string | undefined
}

export interface Object extends Tag {
  data?: string | undefined
  form?: string | undefined
  height?: number | string | undefined
  name?: string | undefined
  type?: string | undefined
  width?: number | string | undefined
}

export interface Ol extends Tag {
  reversed?: boolean | undefined
  start?: number | string | undefined
  type?: '1' | 'a' | 'a' | 'i' | 'i' | undefined
}

export interface Optgroup extends Tag {
  disabled?: boolean | undefined
  label?: string | undefined
}

export interface Option extends Tag {
  disabled?: boolean | undefined
  label?: string | undefined
  selected?: boolean | undefined
  value?: string | undefined
}

export interface Output extends Tag {
  for?: string | undefined
  form?: string | undefined
  name?: string | undefined
}

export interface Progress extends Tag {
  max?: number | string | undefined
  value?: number | string | undefined
}

export interface Q extends Tag {
  cite?: string | undefined
}

export interface Script extends Tag {
  async?: boolean | undefined
  blocking?: string | undefined
  crossorigin?: 'anonymous' | 'use-credentials' | undefined
  defer?: boolean | undefined
  fetchpriority?: 'auto' | 'high' | 'low' | undefined
  integrity?: string | undefined
  nomodule?: boolean | undefined
  referrerpolicy?: string | undefined
  src?: string | undefined
  type?: 'module' | undefined
}

export interface Select extends Tag {
  autocomplete?: string | undefined
  disabled?: boolean | undefined
  form?: string | undefined
  multiple?: boolean | undefined
  name?: string | undefined
  required?: boolean | undefined
  size?: number | string | undefined
}

export interface Slot extends Tag {
  name?: string | undefined
}

export interface Source extends Tag {
  height?: number | string | undefined
  media?: string | undefined
  sizes?: string | undefined
  src?: string | undefined
  srcset?: string | undefined
  type?: string | undefined
  width?: number | string | undefined
}

export interface Style extends Tag {
  blocking?: string | undefined
  media?: string | undefined
  title?: string | undefined
}

export interface Td extends Tag {
  colspan?: number | string | undefined
  headers?: string | undefined
  rowspan?: number | string | undefined
}

export interface Template extends Tag {
  shadowrootclonable?: boolean | undefined
  shadowrootdelegatesfocus?: boolean | undefined
  shadowrootmode?: 'closed' | 'open' | undefined
  shadowrootserializable?: boolean | undefined
}

export interface Textarea extends Tag {
  autocomplete?: string | undefined
  cols?: number | string | undefined
  dirname?: string | undefined
  disabled?: boolean | undefined
  form?: string | undefined
  maxlength?: number | string | undefined
  minlength?: number | string | undefined
  name?: string | undefined
  placeholder?: string | undefined
  readonly?: boolean | undefined
  required?: boolean | undefined
  rows?: number | string | undefined
  wrap?: 'hard' | 'soft' | undefined
}

export interface Th extends Tag {
  abbr?: string | undefined
  colspan?: number | string | undefined
  headers?: string | undefined
  rowspan?: number | string | undefined
  scope?: 'col' | 'colgroup' | 'row' | 'rowgroup' | undefined
}

export interface Time extends Tag {
  datetime?: number | string | undefined
}

export interface Track extends Tag {
  default?: boolean | undefined
  kind?:
    | 'captions'
    | 'chapters'
    | 'descriptions'
    | 'metadata'
    | 'subtitles'
    | undefined
  label?: string | undefined
  src?: string | undefined
  srclang?: string | undefined
}

export interface Video extends Tag {
  autoplay?: boolean | undefined
  controls?: boolean | undefined
  crossorigin?: 'anonymous' | 'use-credentials' | undefined
  height?: number | string | undefined
  loop?: boolean | undefined
  muted?: boolean | undefined
  playsinline?: boolean | undefined
  poster?: string | undefined
  preload?: 'auto' | 'metadata' | 'none' | undefined
  src?: string | undefined
  width?: number | string | undefined
}

export interface Html5 {
  a: A
  abbr: Abbr
  area: Area
  audio: Audio
  base: Base
  bdo: Bdo
  blockquote: Blockquote
  button: Button
  canvas: Canvas
  col: Col
  colgroup: Colgroup
  data: Data
  del: Del
  details: Details
  dfn: Dfn
  dialog: Dialog
  embed: Embed
  fieldset: Fieldset
  form: Form
  iframe: Iframe
  img: Img
  input: Input
  ins: Ins
  label: Label
  li: Li
  link: Link
  map: Map
  meta: Meta
  meter: Meter
  object: Object
  ol: Ol
  optgroup: Optgroup
  option: Option
  output: Output
  progress: Progress
  q: Q
  script: Script
  select: Select
  slot: Slot
  source: Source
  style: Style
  td: Td
  template: Template
  textarea: Textarea
  th: Th
  time: Time
  track: Track
  video: Video
  address: Tag
  article: Tag
  aside: Tag
  b: Tag
  bdi: Tag
  body: Tag
  br: Tag
  caption: Tag
  cite: Tag
  code: Tag
  datalist: Tag
  dd: Tag
  div: Tag
  dl: Tag
  dt: Tag
  em: Tag
  figcaption: Tag
  figure: Tag
  footer: Tag
  h1: Tag
  h2: Tag
  h3: Tag
  h4: Tag
  h5: Tag
  h6: Tag
  head: Tag
  header: Tag
  hgroup: Tag
  hr: Tag
  html: Tag
  i: Tag
  kbd: Tag
  legend: Tag
  main: Tag
  mark: Tag
  math: Tag
  menu: Tag
  nav: Tag
  noscript: Tag
  p: Tag
  picture: Tag
  pre: Tag
  rp: Tag
  rt: Tag
  ruby: Tag
  s: Tag
  samp: Tag
  search: Tag
  section: Tag
  small: Tag
  span: Tag
  strong: Tag
  sub: Tag
  summary: Tag
  sup: Tag
  svg: Tag
  table: Tag
  tbody: Tag
  tfoot: Tag
  thead: Tag
  title: Tag
  tr: Tag
  u: Tag
  ul: Tag
  var: Tag
  wbr: Tag
  [name: string]: Tag
}
