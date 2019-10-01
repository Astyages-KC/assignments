import React, { Component } from "react";
import axios from "axios";

class Charbuild extends Component {
  constructor() {
    super();
    this.state = {
      choosenclass: {},
      choosenrace: {},
      race: "",
      class: "",
      classList: [],
      raceList: []
    };
  }

  componentDidMount() {
    axios
      .get("http://www.dnd5eapi.co/api/classes/")
      .then(res => {
        this.setState({
          classList: res.data.results
        });
      })
      .catch(err => console.log(err));

      axios
      .get("http://www.dnd5eapi.co/api/races/")
      .then(res => {
        this.setState({
          raceList: res.data.results
        });
      })
      .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    console.log(this.state)
  }

  render() {
    const mappedClasses = this.state.classList.map(classItem => {
      console.log(this.state.classList);
      return (
        <div>
          {classItem.name}
          {/* {classItem.url} */}
          <input type="radio" name="class" onChange={this.handleChange} value={classItem.url} className='radioButtons'/>
        </div>
      );
    });
    const mappedRaces = this.state.raceList.map(raceItem => {
      console.log(this.state.raceList);
      return (
        <div>
          {raceItem.name}
          {/* {classItem.url} */}
          <input type="radio" name="race" onChange={this.handleChange} value={raceItem.url} className='radioButtons'/>
        </div>
      );
    });
    return (
      <div className="charBuildPage">
        <div className="overlay">
        <p className="classBox">Choose your class:</p>
        <p className="classChoices">{mappedClasses}</p>
        <p className="raceBox">Choose your race:</p>
        <p className="raceChoices">{mappedRaces}</p>
        <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Charbuild;

/* <Container>
<Row>
  <Col>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Build your character:</Form.Label>
        <Form.Control  value={this.state.classChoice} onChange={this.handleChange} type="text" placeholder="ClassChoice" />
        <Form.Control value={this.state.race} onChange={this.handleChange} type="input" placeholder="Race" />
        <Form.Control value={props.state} onChange={props.handleChange} as="select">
          <option value={this.state.classList}>Available Classes</option>
      </Form.Group>
      <Button onClick={this.handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Col>
  <Col></Col>
</Row>
</Container> */
