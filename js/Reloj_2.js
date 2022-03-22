var clock = document.querySelector('#utility-clock')
utilityClock(clock)
autoResize(clock, 295 + 32)

choose(clock, [
  ['hour', ['text', 'text-quarters', 'pill']],
  ['hour-text', ['large', 'small']],
  ['hour-display', ['all', 'quarters', 'none']],
  ['minute', ['line', 'dot']],
  ['minute-display', ['fine', 'fine-2', 'coarse', 'major', 'none']],
  ['minute-text', ['inside', 'outside', 'none']],
  ['hand', ['normal', 'hollow']]
])

function utilityClock(container) {
  
  var dynamic = container.querySelector('.dynamic')
  var hourElement = container.querySelector('.hour')
  var minuteElement = container.querySelector('.minute')
  var secondElement = container.querySelector('.second')
  
  var div = function(className, innerHTML) {
    var element = document.createElement('div')
    element.className = className
    element.innerHTML = innerHTML || ''
    return element
  }

  var append = function(element) {
    return {
      to: function(parent) {
        parent.appendChild(element)
        return append(parent)
      }
    }
  }

  var anchor = function(element, rotation) {
    var anchor = div('anchor')
    rotate(anchor, rotation)
    append(element).to(anchor).to(dynamic)
  }
  
  var minute = function(n) {
    var klass = n % 5 == 0 ? 'major' : n % 1 == 0 ? 'whole' : 'part'
    var line = div('element minute-line ' + klass)
    anchor(line, n)
    if (n % 5 == 0) {
      var text = div('anchor minute-text ' + klass)
      var content = div('expand content', (n < 10 ? '0' : '') + n)
      append(content).to(text)
      rotate(text, -n)
      anchor(text, n)
    }
  }

  var hour = function(n) {
    var klass = 'hour-item hour-' + n
    var line = div('element hour-pill ' + klass)
    anchor(line, n * 5)
    var text = div('anchor hour-text ' + klass)
    var content = div('expand content', n)
    append(content).to(text)
    rotate(text, -n * 5)
    anchor(text, n * 5)
    return
  }

  var position = function(element, phase, r) {
    var theta = phase * 2 * Math.PI
    element.style.top = (-r * Math.cos(theta)).toFixed(1) + 'px'
    element.style.left = (r * Math.sin(theta)).toFixed(1) + 'px'
  }

  var rotate = function(element, second) {
    element.style.transform = element.style.webkitTransform = 'rotate(' + (second * 6) + 'deg)'
  }

  var animate = function() {
    var now = new Date()
    var time = now.getHours() * 3600 +
                now.getMinutes() * 60 +
                now.getSeconds() * 1 +
                now.getMilliseconds() / 1000
    rotate(secondElement, time)
    rotate(minuteElement, time / 60)
    rotate(hourElement, time / 60 / 12)
    requestAnimationFrame(animate)
  }

  for (var i = 1 / 4; i <= 60; i += 1 / 4) minute(i)
  for (var i = 1; i <= 12; i ++) hour(i)

  animate()

}

function autoResize(element, nativeSize) {
  var update = function() {
    var parent = element.offsetParent
    var scale = Math.min(parent.offsetWidth, parent.offsetHeight) / nativeSize
    element.style.transform = element.style.webkitTransform = 'scale(' + scale.toFixed(3) + ')'
  }
  update()
  window.addEventListener('resize', update)
}

function choose(clock, items) {
  var chooser = document.querySelector('#chooser')
  items.forEach(function(item) {
    var name = item[0]
    var styles = item[1]
    var element = document.createElement('div')
    element.addEventListener('click', click, false)
    update()
    chooser.appendChild(element)
    function update() {
      element.innerHTML = name + '-style-<b>' + getValue() + '</b>'
    }
    function klass(c) {
      return name + '-style-' + c
    }
    function getValue() {
      for (var i = 0; i < styles.length; i ++) {
        if (clock.classList.contains(klass(styles[i]))) return styles[i]
      }
    }
    function click(e) {
      for (var i = 0; i < styles.length; i ++) {
        if (clock.classList.contains(klass(styles[i]))) {
          clock.classList.remove(klass(styles[i]))
          clock.classList.add(klass(styles[(i + 1) % styles.length]))
          break
        }
      }
      update()
      e.preventDefault()
    }
  })
}