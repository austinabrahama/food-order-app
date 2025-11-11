import { Component } from "react";

class ChildOfSecondChild extends Component {
    constructor(props) {
        super(props);
        console.log("ChildOfSecondChild Constructor");
    }

    componentDidMount() {
        console.log("ChildOfSecondChild componentDidMount");
    }
    render() {
        console.log("ChildOfSecondChild Render");
        return (
            <div className="" >
                
            </div>
        )
    }
};

export default ChildOfSecondChild;