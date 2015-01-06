angular.module 'skilltree'
  .filter 'highlight', () ->
    (input) ->
      # todo - share this code between the directive and the template
      result = ''
      if input
        # is this a file?
        lastSegment = input.split('/').pop()
        if lastSegment.split('.').length > 1
          # return src.coffee
          result = lastSegment
        else
          # return services/
          result = "#{lastSegment}/"

      result