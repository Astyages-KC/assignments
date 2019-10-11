import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor (){
    super()
    this.state = {
      bountyList: []
    };
  }

  componentDidMount() {
    axios.get("/bounties")
    .then(res => {
      this.setState({
        bountyList: res.data
      })
    })
    .catch(err => console.log(err));
  }

render() {
  const mappedBounty = this.state.bountyList.map(bounty => <div>{
    bounty.firstName
  }</div>)
  return(
    <div>
      {mappedBounty}
    </div>
  )
}

}

export default App;
