function transformJSX (input, factory) {
    factory = factory || 'h'
    var match = input.match(/@jsx\s+(\S+)/)
    if (match) {
        factory = match[1]
    }
    var pattern = /\/>|\/(\\.|[^\/])+\/|\/\/[^\r\n]+|\/\*.*?\*\/|"(\\.|[^"])*"|'(\\.|[^'])+'|<\/|[<>{}=]|\w+/g
    var tokens = []
    var lastIndex = RegExp.lastIndex = 0
    while (true) {
        var match = pattern.exec(input)
        if (!match) {
            break
        }
        var token = input.substring(lastIndex, match.index)
        if (token !== '') {
            tokens.push(token)
        }
        tokens.push(match[0])
        lastIndex = RegExp.lastIndex = match.index + match[0].length
    }
    var token = input.substring(lastIndex)
    if (token !== '') {
        tokens.push(token)
    }
    var output = []
    var offset = 0
    while (true) {
        var token = tokens[offset++]
        if (token === undefined) {
            break
        } else if (token === '<') {
            pushElement()
        } else {
            output.push(token)
        }
    }
    function pushElement () {
        var token = tokens[offset++]
        if (token >= 'A' && token <= 'Z') {
            output.push(factory, '(', token, ',{')
            pushProps()
        } else if (token >= 'a' && token <= 'z') {
            output.push(factory, '("', token, '",{')
            pushProps()
        } else {
            output.push('<', token)
        }
    }
    function pushProps () {
        var next = false
        while (true) {
            var token = tokens[offset++]
            if (token === undefined) {
                throw new Error()
            } else if (token === '/>') {
                output.push('})')
                break
            } else if (token === '>') {
                output.push('},["')
                while (true) {
                    var token = tokens[offset++]
                    if (token === undefined) {
                        throw new Error()
                    } else if (token === '<') {
                        output.push('",')
                        pushElement()
                        output.push(',"')
                    } else if (token === '{') {
                        output.push('",')
                        pushExpr(false)
                        output.push(',"')
                    } else if (token === '</') {
                        output.push('"])')
                        while (true) {
                            var token = tokens[offset++]
                            if (token === '>') {
                                break
                            }
                        }
                        break
                    } else {
                        for (var i = 0; i < token.length; i++) {
                            var char = token.charAt(i)
                            switch (char) {
                                case '\\':
                                    output.push('\\\\')
                                    break
                                case '"':
                                    output.push('\\"')
                                    break
                                case '\r':
                                    output.push('\\r')
                                    break
                                case '\n':
                                    output.push('\\n')
                                    break
                                default:
                                    output.push(char)
                            }
                        }
                    }
                }
                break
            } else if (token >= 'a' && token <= 'z') {
                if (next) {
                    output.push(',')
                } else {
                    next = true
                }
                output.push(token, ':')
                if (tokens[offset] === '=') {
                    var token = tokens[++offset]
                    if (token === '{') {
                        offset++
                        pushExpr(false)
                    } else {
                        output.push(token)
                    }
                } else {
                    output.push('true')
                }
            }
        }
    }
    function pushExpr (next) {
        while (true) {
            var token = tokens[offset++]
            if (token === undefined) {
                throw new Error()
            } else if (token === '<') {
                pushElement()
            } else if (token === '{') {
                output.push(token)
                pushExpr(true)
            } else if (token === '}') {
                if (next) {
                    output.push(token)
                }
                break
            } else {
                output.push(token)
            }
        }
    }
    return output.join('')
}
