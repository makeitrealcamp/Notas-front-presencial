// const Hola = React.createClass({
//   render() {
//     return (
//       React.createElement('div', null,
//         React.createElement('h1', null, `Hola como ${this.props.name}`),
//         React.createElement('h2', null, 'Soy el segundo h2'),
//         React.createElement('div', null,
//           React.createElement('p', null, 'Soy el p interior'),
//           React.createElement('p', null, 'Soy el Segundo p interior')
//         )
//       )
//     )
//   }
// })
///////

/////// Usando JSX
// const Hola = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>Hola como estas {this.props.name}</h1>
//         <h2>Soy el segundo h2</h2>
//         <div>
//           <p>Soy el p interior</p>
//           <p>Soy el segundo p interior</p>
//         </div>
//       </div>
//     )
//   }
// })
///////


// const Todo = React.createClass({
//   render() {
//     return(
//       React.createElement('div', null,
//         React.createElement('p', null, this.props.text)
//       )
//     )
//   }
// })

const TodosList = React.createClass({
  // getInitialState() {
  //   todos: ['tender la cama', 'sacar el perro']
  // },
  render() {
    return (
      React.createElement('ul', null,
        this.state.todos.map((todo) => {
          return React.createElement('li', null, 'hola')
        })
      )
    )
  }
})










ReactDOM.render(React.createElement('p', null, 'hola'), document.getElementById('react-container'))
