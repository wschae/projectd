import React, { Component } from 'react';
import getWeb3 from './utils/getWeb3';
import getContractInstance from './utils/getContractInstance';
import TeamContract from './contracts/Team.json';
import './App.css';

class Team extends Component {
  state = { web3: null, contract: null, members: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3()

      // Get the contract instance by passing in web3 and the contract definition.
      const contract = await getContractInstance(web3, TeamContract)

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, contract }, this.run)
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(`Failed to load web3, accounts, or contract. Check console for details.`)
      console.log(error)
    }
  }

  run = async() => {
    const { contract } = this.state;

    // Get the value from the contract
    const response = await contract.methods.getMembers().call();

    // Update state with the result.
    this.setState({ members: response })
  }

  render() {
    if (!this.state.web3 || !this.state.members) {
      return <div style={{color:"white"}}>Loading Web3, accounts, and contract...</div>
    }

    const items = this.state.members.map((item) => {
      const url = `https://ipfs.io/ipfs/${item.cid}`;

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
                {item.name}
            </span>
          </div>
        </li>
      );
    });

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

          <ul style={{listStyle: 'none'}}>
            {items}
          </ul>
        </div>
      </div>
    );
  }
}

export default Team;
