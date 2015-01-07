angular.module 'skilltree'
  .service 'MinimapAPI', () ->

    minimapElements = []

    class MinimapElement
      constructor: (elem) ->
        @name = elem.name
        @count = elem.count

      setFocus: ->
        @focus = true
        console.log "focus has been set to #{@name}"
      
    

    registerElement: (elem) ->
      newElem = new MinimapElement elem
      minimapElements.push newElem
      newElem
