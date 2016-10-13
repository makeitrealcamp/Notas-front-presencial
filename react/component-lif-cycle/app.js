////////////////////////////////////////////////
////////COMPONENT LYFE CYCLE
////////////////////////////////////////////////


// Los componentes en React, tienen un ciclo de vida como las personas, Que nacen , crecen , envejecen y en algun punto mueren.

// Como en la vida real podemos decir que ciertas cosas pasan en determinados tiempos del ciclo de vida. Por ejemplo cuando la persona es adolesente va al colegio, cuando es mayor se pensiona. Lo mismo con los compontes en react, en determinados momentos podemos ejecutar ciertas acciones.

const ParentComponent = React.createClass({
  getDefaultProps() {
    console.log("ParentComponent - getDefaultProps")
  },
  getInitialState() {
    console.log("ParentComponent - getInitialState")
    return { text: "" }
  },
  componentWillMount() {
    console.log("ParentComponent - componentWillMount")
  },
  componentDidMount() {
    console.log("ParentComponent - componentDidMount")
  },
  componentWillUnmount() {
    console.log("ParentComponent - componentWillUnmount")
  },
  onInputChange(e) {
    this.setState({ text: e.target.value })
  },
  render() {
    console.log("ParentComponent - render")
    return (
      <div className="container">
        <input
          value={this.state.text}
          onChange={this.onInputChange} />
        <ChildComponent text={this.state.text} />
      </div>
    )
  }
})

const ChildComponent = React.createClass({
  getDefaultProps() {
    console.log("ChildComponent - getDefaultProps")
  },
  getInitialState() {
    console.log("ChildComponent - getInitialState")
    return { dummy: "" }
  },
  componentWillMount() {
    console.log("ChildComponent - componentWillMount")
  },
  componentDidMount() {
    console.log("ChildComponent - componentDidMount")
  },
  componentWillUnmount() {
    console.log("ChildComponent - componentWillUnmount")
  },
  componentWillReceiveProps(nextProps) {
    console.log("ChildComponent - componentWillReceiveProps")
    console.log(nextProps)
  },
  shouldComponentUpdate(nextProps, nextState) {
    console.log("ChildComponent - shouldComponentUpdate")
    return true
  },
  componentWillUpdate(nextProps, nextState) {
    console.log("ChildComponent - componentWillUpdate")
    console.log("nextProps:")
    console.log(nextProps)
    console.log("nextState:")
    console.log(nextState)
  },
  componentDidUpdate(previousProps, previousState) {
    console.log("ChildComponent - componentDidUpdate")
    console.log("previousProps:")
    console.log(previousProps)
    console.log("previousState:")
    console.log(previousState)
  },
  render() {
    console.log("ChildComponent - render")
    return (
      <div>Props: {this.props.text}</div>
    )
  },
})

ReactDOM.render(
  <ParentComponent />,
  document.getElementById("react-container")
)
