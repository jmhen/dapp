import React from 'react'
import Web3 from 'web3'
import { contractAddress, contractABI } from '../assets/abi'


class App extends React.Component {
  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.currentProvider || "http://localhost:7545");
    ethereum.enable();
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const myContract = new web3.eth.Contract(contractABI, contractAddress)
    console.log(myContract)
  }

  constructor(props) {
    super(props);
    this.state = { account: '' };
  }

  render() {
    return (
      <div className="container">
        <h1>Hello, World!</h1>
        <p>Your account: {this.state.account}</p>
      </div>
    );
  }
}

export default App;