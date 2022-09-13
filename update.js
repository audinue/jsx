var prev

window.h = h
window.update = update

function update () {
    var next = window.main()
    if (prev) {
        patch(prev, next)
    } else {
        realize(next)
        document.body.appendChild(next.real)
    }
    prev = next
}

function patch (prev, next) {
    if (prev.tag !== next.tag) {
        prev.real.parentNode.replaceChild(realize(next), prev.real)
    } else if (prev.tag === '#text') {
        if (prev.value !== next.value) {
            prev.real.nodeValue = next.value
        }
        next.real = prev.real
    } else {
        for (var name in next.props) {
            var value = next.props[name]
            if (prev.props[name] !== value) {
                if (name.substr(0, 2) === 'on') {
                    prev.real[name] = wrap(value)
                    continue
                }
                if (name === 'value') {
                    if (prev.real.value !== value) {
                        prev.real.value = value
                    }
                    continue
                }
                prev.real[name] = value
            }
        }
        var a = prev.children.length
        var b = next.children.length
        if (a < b) {
            for (var i = a; i < b; i++) {
                prev.real.appendChild(realize(next.children[i]))
            }
        } else if (b < a) {
            for (var i = b; i < a; i++) {
                prev.real.removeChild(prev.children[i].real)
            }
        }
        var c = Math.min(a, b)
        for (var i = 0; i < c; i++) {
            patch(prev.children[i], next.children[i])
        }
        next.real = prev.real
    }
}

function realize (node) {
    if (node.tag === '#text') {
        var real = document.createTextNode(node.value)
        node.real = real
        return real
    }
    var real = document.createElement(node.tag)
    for (var name in node.props) {
        var value = node.props[name]
        if (name.substr(0, 2) === 'on') {
            real[name] = wrap(value)
            continue
        }
        real[name] = value
    }
    for (var i = 0, length = node.children.length; i < length; i++) {
        real.appendChild(realize(node.children[i]))
    }
    node.real = real
    return real
}

function wrap (fn) {
    return function () {
        fn.call(this, arguments)
        update()
    }
}

function h (tag, props, children) {
    if (typeof tag === 'function') {
        props.children = children
        return tag(props)
    }
    return {
        tag: tag,
        props: props,
        children: flatten(children)
    }
}

function flatten (array) {
    var result =[]
    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        if (element === null || element === undefined) {
        } else if (element instanceof Array) {
            result.push.apply(result, flatten(element))
        } else if (element instanceof Object) {
            result.push(element)
        } else {
            result.push({
                tag: '#text',
                value: element
            })
        }
    }
    return result
}
