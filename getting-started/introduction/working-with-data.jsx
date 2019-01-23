const Card = (props) => {
	return (
  	<div style={{margin: '1em'}}>
    	<img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
      	<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  )
};

const CardList = (props) => {
	return (
		<div>
    	{props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  );
}

class Form extends React.Component {
	state = {
  	userName: ''
  };

	handleSubmit = (event) => {
  	event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    	.then((resp) => {
      	this.props.onSubmit(resp.data);
        this.setState({userName: ''});
      })
  };
  
  render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
      	<input 	type="text" 
        				placeholder="GitHub username..."
                value={this.state.userName}
                onChange={(event) => this.setState({userName: event.target.value})}
                required />
        <button type="submit">Add Card</button>
      </form>
    );
  }
}

class App extends React.Component {
	state = {
  	cards: [
      {
        name: "K. Scott Allen",
        avatar_url: "https://avatars1.githubusercontent.com/u/137119?v=4",
        company: "OdeToCode"
      },
      {
        name: "Ben Alpert",
        avatar_url: "https://avatars1.githubusercontent.com/u/6820?v=4",
        company: "Facebook"
      }
    ]
  };

	addNewCard = (cardInfo) => {
  	this.setState(prevState => ({
    	cards: prevState.cards.concat(cardInfo)
    }));
  }

	render() {
  	return (
    	<div>
      	<Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode); 