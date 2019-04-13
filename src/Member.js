import React, { Component } from 'react';
import './App.css';

class Member extends Component {
  state = { keys: [] };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.Team;
    
    // let drizzle know we want to watch the 'members' method
    const keys = [];
    for(var i = 0; i < this.props.count; i++) {
      keys.push(contract.methods["members"].cacheCall(i));
    }

    // save the countkey to local component state for later reference
    this.setState({ keys });
  }

  render() {
    // get the contract state from drizzleState
    const { Team } = this.props.drizzleState.contracts;

    // use the saved keys to get the variable we're interested in
    var members = [];
    for(var i = 0; i < this.props.count; i++) {
      const member = Team.members[this.state.keys[i]];
      members.push(member);
    }

    for(var i = 0; i < this.props.count; i++) {
      if (members[i] == null)
        return null;
    }

    const items = members.map((item) => {
      const url = `https://ipfs.io/ipfs/${item.value.cid}`;

      const liststyle = {
        backgroundImage: `url(${url})`,
        backgroundSize: '100px',
        height: '100px',
        width: '100px',
        float: 'left',
        display: 'block',
        position: 'relative',
        opacity: '0.6'
      };

      const namestyle = {
        position: 'absolute',
        bottom: '2px',
        right: '10px',
        color: 'white',
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: '15px',
        textShadow: '2px 2px #000'
      };

      return (
        <li className='hover-image' key={url}>
          <div style={liststyle}> 
            <span  style={namestyle} className='hover-image--on'>
                {item.value.name}
            </span>
          </div>
        </li>
      );
    });

    return (
      <ul style={{listStyle: 'none'}}>
      {items}
    </ul>
    );
  }
}

export default Member;
