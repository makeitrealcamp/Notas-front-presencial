import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
require('./style.css')



// const Hello = ({name}) => {
//   console.log(`Hola ${name}`)
// }
const Hello = React.createClass({
  render() {
    return (
      <p>Terminamos</p>
    )
  }
})
// Hello({name: 'Juan'})

ReactDOM.render(<Hello name='Juan'/>, document.getElementById('root'))





// $('#root').html('Hola mundo Jquery normal')
