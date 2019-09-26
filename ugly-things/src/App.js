import React, { Component } from "react";
import axios from "axios";
import AnimalThingsList from "./components/AnimalThingsList.js";
import "./style.css";
import AnimalThingForm from "./components/AnimalThingForm.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      animalThings: [],
      title: "",
      description: "",
      imgUrl: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://api.vschool.io/animalthings/todo")
      .then(res => {
        this.setState({
          animalThings: res.data
        });
      })
      .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newAnimalThing = {
      title: this.state.title,
      description: this.state.description,
      imgUrl: this.state.imgUrl
    };

    axios
      .post("https://api.vschool.io/animalthings/todo", newAnimalThing)
      .then(res => {
        this.setState(prevState => ({
          animalThings: [...prevState.animalThings, res.data],
          title: "",
          description: "",
          imgUrl: ""
        }));
      })
      .catch(error => console.log(error));
  };

  // const editedArray = {
  //   title: title2,
  //   description: description2,
  //   imgUrl: image2
  // }

  handleEdit = (id, editedThing) => {
    axios.put("https://api.vschool.io/kevinclark/todo/" + id, editedThing)
    .then((res) => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
    }
  

  handleDelete = id => {
    axios.delete("https://api.vschool.io/kevinclark/todo/" + id)
      .then(() => {
        this.setState(prevState => {
          const filteredArray = prevState.animalThings.filter(animalThing => {
            return id !== animalThing._id;
          });
          return { animalThings: filteredArray };
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <AnimalThingForm
          title={this.state.title}
          description={this.state.description}
          imgUrl={this.state.imgUrl}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <AnimalThingsList
          animalThings={this.state.animalThings}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
export default App;
