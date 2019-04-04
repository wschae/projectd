import React, { Component } from 'react';
import './App.css';

class Team extends Component {
  state = {
    response: [
      {name: 'jwkhong', url: 'assets/jwkhong.jpg'},
      {name: 'eyyoun', url: 'assets/eyyoun.gif'},
      {name: 'hwanjoyu', url: 'assets/hwanjoyu.gif'},
      {name: 'hyelee', url: 'assets/hyelee.jpg'},
      {name: 'wschae', url: 'assets/wschae.jpg'},
      {name: 'kyungchan', url: 'assets/kyungchan.jpg'},
      {name: 'swkim', url: 'assets/swkim.jpg'},
      {name: 'jskim', url: 'assets/jskim.jpg'},
      {name: 'cyoh', url: 'assets/cyoh.jpg'},
      {name: 'limseok', url: 'assets/limseok.jpg'},
      {name: 'johnson', url: 'assets/johnson.jpg'}
    ]
  }

  render() {
    const items = this.state.response.map((item) => {
      const liststyle = {
        backgroundImage: `url(${item.url})`,
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
        <li className='hover-image' key={item.url}>
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
