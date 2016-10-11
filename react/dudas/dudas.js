  // const Button = React.createClass({
  //   render() {
  //     return (
  //      <button className='btn btn-success'>
  //        {this.props.text}
  //      </button>
  //     )
  //   }
  // })

  // const ButtonList = React.createClass({ // Container
  //   render() {
  //     let textList = ['Galletas', 'cafe', 'audifonos']
  //     return (
  //       <ul>
  //         {textList.map(function{
  //           {console.log(this)}
  //           return <Button text={text} />
  //         })}
  //       </ul>
  //     )
  //   }
  // })

const Hello = React.createClass({
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>Hola</li>
          </ul>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<Hello />, document.getElementById('root'))










