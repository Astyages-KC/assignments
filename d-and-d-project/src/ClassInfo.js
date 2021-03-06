import React, { Component } from "react";
import axios from "axios";

class ClassInfo extends Component {
  constructor() {
    super();
    this.state = {
      dndClassList: [],
      selectedClass: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://api.open5e.com/classes/?format=json")
      .then(res => {
        this.setState({
          dndClassList: res.data.results,
          selectedClass: res.data.results[0].name
        });
      })
      .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({
      selectedClass: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.dndClassList);
    //   displayClasslist = React.createElement('p', {this.state.dndClassList})
  };

  render() {
    let mappedDndClasses;
    if (this.state.dndClassList) {
      mappedDndClasses = this.state.dndClassList.map(dndClass => {
        return (
          <option
            className="optionInfo"
            value={dndClass.name}
            key={dndClass.name}
          >
            {dndClass.name}
          </option>
        );
      });
    }
    const displayedClass = this.state.dndClassList.find(dndClass => {
      return dndClass.name === this.state.selectedClass;
    });

    return (
      <div className="classBox2">
          <div className="overlayHome">
        <p>Which class do you want to know about?</p>
        <select value={this.state.selectedClass} onChange={this.handleChange}>
          {mappedDndClasses}
        </select>
        <p className="classInfoNameDisp">{displayedClass && displayedClass.name}</p>
        <p>{displayedClass && displayedClass.desc}</p>
        </div>
      </div>
    );
  }
}

export default ClassInfo;
