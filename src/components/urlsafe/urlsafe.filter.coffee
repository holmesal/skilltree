angular.module 'skilltree'
  .filter 'urlsafe', () ->
    (input) ->
      safe = input.replace ' ', '-'
      safe.toLowerCase().replace /[^a-zA-Z0-9-_]/g, ''