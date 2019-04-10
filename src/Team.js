import React, { Component } from 'react';
import './App.css';

class Team extends Component {
  state = {
    response: [
      {name: 'jwkhong', cid: 'QmegwUNQ1Fivdh88eS9e8eq4kHyvW51Q95ktBKWQLnQRs2'},
      {name: 'eyyoun', cid: 'QmYNNiVzm8uhnsg9WdXuXsJEvgZhm948n8nzMbTvvYpxRW'},
      {name: 'hwanjoyu', cid: 'QmYUyEaWSoy5fQq8LDrEVEKqWiVDFAbAf65ZzwSNoFLsTt'},
      {name: 'hyelee', cid: 'QmbEErCe1G75AudXuQLdXpDx943UrY4F7naSozAydw3Ree'},
      {name: 'wschae', cid: 'Qmdj1eKzwbR8d3BygjNYB22RP9ovVKMfPt4CR6cFrLYaLY'},
      {name: 'kyungchan', cid: 'QmVxxNFBjaGr2vyDWWvjn8wtfQB6X3jqYoVmrWxSFr5jpA'},
      {name: 'swkim', cid: 'QmNeNr5aSTiH6xDMJGEWeLVhMw967A3YQNDurNax1RPSAZ'},
      {name: 'jskim', cid: 'QmWeS7u5pDTkyBBKaw3ywJs2yXS4pftQEy2PiYfNWpGQnQ'},
      {name: 'cyoh', cid: 'QmT65VLCj2K5YW7k4Tomagg1VTz6fCtvSPJk1FCFpvT3wf'},
      {name: 'limseok', cid: 'QmSRejaN4iY4EJSxAzjD9XXw29o3AD5DhKbWe2SkGhQ3vu'},
      {name: 'johnson', cid: 'QmaF5m9g6jm7ZainvX3JxLp1c6WXoNH6Js4macN7F14b2q'}
    ]
  }

  render() {
    const items = this.state.response.map((item) => {
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
