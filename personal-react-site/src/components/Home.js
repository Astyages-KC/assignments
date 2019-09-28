import React, {Component} from "react"


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        streetAddress: "",
        zipCode: 0,
        forRentorSale: "rent",
        price: 0,
        imgUrl: ""
        }
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };



render(){
    return(
        <div>
            <Home 
            streetAddress={this.state.streetAddress}
            zipCode={this.state.zipCode}
            forRentorSale={this.state.forRentorSale}
            price={this.state.price}
            imgUrl={this.state.imgUrl} />
        </div>
    )
}

}


export default Home

