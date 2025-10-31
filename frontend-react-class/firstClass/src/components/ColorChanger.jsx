import React from "react"

class ColorChanger extends React.Component {
    constructor(props){
        super(props)
        this.state = {color: "teal"}
    }

    componentDidCatch(){
        setTimeout(() => {
            this.setState({color: "green"})
        }, 10000)
    }
}

export default ColorChanger