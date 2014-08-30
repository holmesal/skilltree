'use strict'

describe 'Directive: line', ->

  # load the directive's module
  beforeEach module 'skilltreeApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<line></line>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the line directive'
