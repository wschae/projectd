import React, { Component } from 'react';
import List from './List';
import './App.css';

class Team extends Component {
  state = { loading: true, drizzleState: null, };

  componentDidMount() {
    const { drizzle } = this.props;

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // everytime the store updates, grap the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it is ready
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.loading)
      return (
        <div style={{color:"white"}}>"Loading Drizzle..."</div>
      );

    return (
      <div className="App">
        <header className="App-header">
        </header>

        <div className="App-intro">
          <h1>
              <font style={{color:"white"}}>P(roject)</font> 
              <font style={{color:"#996cf6", fontWeight: "bold"}}> D </font>
              <font style={{color:"white"}}>is built and maintained by these people</font> 
          </h1>

          <br />

          <List 
            drizzle={this.props.drizzle}
            drizzleState={this.state.drizzleState}
          />
        </div>
      </div>
    );
  }
}

export default Team;
