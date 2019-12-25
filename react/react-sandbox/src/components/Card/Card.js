import React from 'react';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message || "NO MESSAGE",
    }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({message: "YOU CLICKED ME! FOOL!"});
  }


  render() {
    return (
      <div className="card" onClick={this.handleClick}>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Card;