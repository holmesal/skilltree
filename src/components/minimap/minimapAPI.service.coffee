angular.module 'skilltree'
  .factory 'MinimapAPI', ($document, $interval) ->

    minimapElements = []
    # lock to prevent navigation updating with scroll, when an item is clicked
    lock = false
    # focus needs to be an object so angular can track it
    focus =
      index: 0

    class MinimapElement
      constructor: (options) ->
        @name = options.name
        @count = options.count
        @element = options.element
        @dots = [0...options.count]

      setFocus: ->
        # console.log "focus has been set to #{@name}"
        focus.index = minimapElements.indexOf @
        # console.log "focus index is now #{focus.index}"
        lock = true
        $document.scrollToElement @element, 50, 1000
        .then ->
          lock = false

      update: ->
        unless lock
          focus.index = minimapElements.indexOf @
          # console.log 'update called for ' + @name + " with set focus #{focus.index}"

    registerElement: (options) ->
      newElem = new MinimapElement options
      minimapElements.push newElem
      newElem

    minimapElements: minimapElements
    focus: focus
