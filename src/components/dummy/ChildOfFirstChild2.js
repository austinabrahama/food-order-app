import { Component } from "react";

class ChildOfFirstChild2 extends Component {
    constructor(props) {
        super(props);
        console.log("ChildOfFirstChild2 Constructor");
    }

    componentDidMount() {
        console.log("ChildOfFirstChild2 componentDidMount");
    }
    render() {
        console.log("ChildOfFirstChild2 Render");
        return (
            <div className="" >
                
            </div>
        )
    }
};

export default ChildOfFirstChild2;