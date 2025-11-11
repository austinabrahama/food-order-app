import { Component } from "react";

class ChildOfFirstChild extends Component {
    constructor(props) {
        super(props);
        console.log("ChildOfFirstChild Constructor");
    }

    componentDidMount() {
        console.log("ChildOfFirstChild componentDidMount");
    }
    render() {
        console.log("ChildOfFirstChild Render");
        return (
            <div className="" >
                
            </div>
        )
    }
};

export default ChildOfFirstChild;