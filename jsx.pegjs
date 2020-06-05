{
  const getName = name => 
    /[A-Z]/.test(name.charAt(0)) ? name : "'" + name + "'"
  
  const quote = string =>
    string.replace(/[\\'\t\r\n]/g, c => {
      switch (c) {
        case '\\': return '\\\\'
        case '\'': return '\\\''
        case '\t': return '\\t'
        case '\r': return '\\r'
        case '\n': return '\\n'
      }
    })
}

Any
  = x:( Element / . )* { return x.reduce((y, z) => y + (typeof z === 'object' ? z.code : z), "") }

Element
  = '<' name:$[A-Za-z]+ props:Properties _ '/>' { return { code: 'React.createElement(' + getName(name) + ',' + props + ')' } }
  / '<' name:$[A-Za-z]+ props:Properties _ '>' _ children:Children '</' [A-Za-z]+ '>' { return { code: 'React.createElement(' + getName(name) + ',' + props + children + ')' } }
  / '<>' _ children:Children '</>' { return { code: 'React.createElement(React.Fragment,null' + children + ')' } }

Children
  = x:( Element / !'</' x:. { return x } )* { return x.reduce((y, z) => y + (typeof z === 'object' ? "'," + z.code + ",'" : quote(z)), ",'") + "'" }

Properties
  = x:( _ x:Property { return x } )+ { return '{' + x.join(',') + '}' }
  / '' { return null }

Property
  = name:$[A-Za-z]+ '=' value:( String / Expression ) { return name + ':' + value }
  / name:$[A-Za-z]+ { return name + ':true' }
  / $( '...' [A-Za-z]+ )

String
  = $( '"' ( !'"' . )* '"' )
  / $( "'" ( !"'" . )* "'" )

Expression
  = '{' x:$( !'}' . )+ '}' { return x }

_
  = [ \t\r\n]*
