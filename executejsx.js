(function(){
    function read (file, done) {
        var xhr = window.ActiveXObject
            ? new ActiveXObject('Microsoft.XMLHTTP')
            : new XMLHttpRequest()
        xhr.open('GET', file, true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                done(xhr.responseText)
            }
        }
        xhr.send(null)
    }
    function createJsxScript (script) {
        var jsx
        return {
            load: function (done) {
                var src = script.getAttribute('src')
                if (src) {
                    read(src, function (text) {
                        jsx = text + '//# sourceURL=' + src
                        done()
                    })
                } else {
                    jsx = script.innerHTML
                    done()
                }
            },
            execute: function () {
                var script = document.createElement('script')
                script.text = transformJSX(jsx)
                document.body.appendChild(script)
            }
        }
    }
    function initialize () {
        var scripts = document.getElementsByTagName('script')
        var jsxScripts = []
        var loaded = 0
        for (var i = 0; i < scripts.length; i++) {
            var script = scripts[i]
            if (script.type === 'text/jsx') {
                jsxScripts.push(createJsxScript(script))
            }
        }
        for (var i = 0; i < jsxScripts.length; i++) {
            jsxScripts[i].load(done)
        }
        function done () {
            if (++loaded === jsxScripts.length) {
                for (var i = 0; i < jsxScripts.length; i++) {
                    jsxScripts[i].execute()
                }
            }
        }
    }
    if (document.body) {
        initialize()
    } else if (window.addEventListener) {
        addEventListener('DOMContentLoaded', initialize, false)
    } else {
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState === 'complete') {
                initialize()
            }
        })
    }
})()
