import React, { Component } from "react";
import axios from "axios";

class Charbuild extends Component {
  constructor() {
    super();
    this.state = {
      chosenClass: {},
      chosenRace: {},
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

  handleSubmit = async () => {
    try {
      const raceData = await axios.get(this.state.race);
      const classData = await axios.get(this.state.class);
      this.setState({
        chosenRace: raceData.data,
        chosenClass: classData.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    console.log(this.state);
    const mappedClasses = this.state.classList.map(classItem => {
      console.log(this.state.classList);
      return (
        <div>
          <input
            type="radio"
            name="class"
            onChange={this.handleChange}
            value={classItem.url}
            className="radioButtons"
            />
            {classItem.name}
        </div>
      );
    });
    const mappedRaces = this.state.raceList.map(raceItem => {
      console.log(this.state.raceList);
      return (
        <div>
          <input
            type="radio"
            name="race"
            onChange={this.handleChange}
            value={raceItem.url}
            className="radioButtons"
            />
            {raceItem.name}
        </div>
      );
    });
    let mappedproficiencies;
    if (this.state.chosenClass.proficiencies) {
      mappedproficiencies = this.state.chosenClass.proficiencies.map(
        proficiency => {
          return <p className="profInfo"> {proficiency.name}, </p>;
        }
      );
    }
    let mappedsubclasses;
    if (this.state.chosenClass.subclasses) {
      mappedsubclasses = this.state.chosenClass.subclasses.map(subclass => {
        return <p className="profInfo"> {subclass.name} </p>;
      });
    }
    return (
      <div className="charBuildPage">
        <div className="overlay">
          <div className="topMenustuff">
            <p className="classBox">Choose your class:</p>
            <div className="classChoices">{mappedClasses}</div>
            <p className="raceBox">Choose your race:</p>
            <div className="raceChoices">{mappedRaces}</div>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
          <div className="showInfo">
            <h2>Class: {this.state.chosenClass.name}</h2>
            <div className="profInfo2">
              Proficiencies: {mappedproficiencies}
            </div>
            <div className="profInfo2">Subclasses: {mappedsubclasses}</div>
            <br />
            <h2>Race: {this.state.chosenRace.name}</h2>
            <p className="profInfo">
              Alignment: {this.state.chosenRace.alignment}
            </p>
            <p className="profInfo">Age: {this.state.chosenRace.age}</p>
            <p className="profInfo">
              Size: {this.state.chosenRace.size_description}
            </p>
          </div>

          {/* <ClassInfo {...this.state.chosenClass}/> */}
        </div>
      </div>
    );
  }
}

export default Charbuild;
