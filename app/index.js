import _ from 'lodash'
import $ from 'jquery'
import foo from './foo'

function component(){
  var element = $("<div></div>")

  element.html( _.join(["hello","baiji"]," "))
  console.log(foo)
  console.log(foo())
  return element[0]
}

document.body.appendChild( component())
