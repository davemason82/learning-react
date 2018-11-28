class Button extends React.Component {
	constructor (props) {
  	super(props);
    this.state = { counter: 0 };
  }

	handleClick = () => {
  	this.setState((prevState) => (
    	{
    		counter: prevState.counter + 10
    	}
    ));
  };

	render() {
  	return (
    	<button onClick={this.handleClick}>
      	{this.state.counter}
      </button>
    );
  }
}

ReactDOM.render(<Button />, mountNode);