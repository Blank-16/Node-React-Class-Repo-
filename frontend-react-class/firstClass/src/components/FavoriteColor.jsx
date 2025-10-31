import React from "react";

class FavoriteColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor: "teal" }
    }
    render() {
        <h2>Color is {this.state.favoriteColor}</h2>
    }
}

export default FavoriteColor