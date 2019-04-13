import React, { Component } from 'react';
import Member from './Member';
import './App.css';

class List extends Component {
  state = { methodKey: null };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.Team;

    // let drizzle know we want to watch the 'countMembers' method
    const countKey = contract.methods["countMembers"].cacheCall();

    // save the countKey to local component state for later reference
    this.setState({ countKey });
  }

   render() {
    // get the contract state from drizzleState
    const { Team } = this.props.drizzleState.contracts;

    // use the saved 'countKey' to get the variable we're interested in
    const count = Team.countMembers[this.state.countKey];
    
    if (count == null) {
        return null;
    }

    return (
        <Member
            drizzle={this.props.drizzle}
            drizzleState={this.props.drizzleState}
            count={count.value} />
    );
  }
}

export default List;
