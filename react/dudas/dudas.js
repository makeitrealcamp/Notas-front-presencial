const Button = React.createClass({
  render() {
    return (
     <button className='btn btn-success'>
       {this.props.text}
     </button>
    )
  }
})

const ButtonList = React.createClass({ // Contianer
  render() {
    let textList = ['Galletas', 'cafe', 'audifonos']
    return (
      <ul>
        {textList.map((text) => {
          return <Button text={text} />
        })}
      </ul>
    )
  }
})

ReactDOM.render(<ButtonList />, document.getElementById('root'))
