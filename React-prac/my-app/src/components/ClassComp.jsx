import { Component } from "react";

export default class ClassComp extends Component {
    constructor(props) {
        super(props)
        
        // for state management 
        this.state = {
            count: 0,
            isLoaded: false,
        }
    }

    render() {
        return (
            <>
                <h1>User Profile</h1>
                <p>Count: {this.state.count}</p>
            </>
        )
    }
}