import React, { Component } from 'react';
import logoPicPay from './assets/svg/logoPicPay.svg'
import placeHolder from './assets/img/hero-feed.png'
import './App.css';
import First from './components/First'
import Header from './components/Header'
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            numberOfClicks: 0,
        }
    }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logoPicPay} className="PP-logo" alt="logo" />
        </header> */}
        <Header />
        <img src={placeHolder} className="placeHolder" />
         {/* <p className="First-edit">
             <button onClick={() => this.setState(prevState => ({
                    numberOfClicks: prevState.numberOfClicks+1
             }))} > Clique aqui </button>
         </p> */}
        <First number={this.state.numberOfClicks}/>
      </div>
    );
  }
}

export default App;
