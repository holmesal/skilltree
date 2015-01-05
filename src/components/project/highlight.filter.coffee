angular.module 'skilltree'
  .filter 'highlight', () ->
    (input) ->
      if input
        # is this a file?
        lastSegment = input.split('/').pop()
        if lastSegment.split('.').length > 1
          # return src.coffee
          return lastSegment
        else
          # return services/
          return "#{lastSegment}/"