import _ from 'lodash'
import $ from 'jquery'
function component(){
  var element = $("<div></div>")

  element.html( _.join(["hello","baiji"]," "))

  return element[0]
}

document.body.appendChild( component())
