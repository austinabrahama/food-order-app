import { Component } from "react";
import ChildOfSecondChild from "./ChildOfSecondChild";

class SecondChild extends Component {
    constructor(props) {
        super(props);
        console.log("SecondChild Constructor");
    }

    componentDidMount() {
        console.log("SecondChild componentDidMount");
    }
    render() {
        console.log("SecondChild Render");
        return (
            <div className="" >
                <ChildOfSecondChild />
            </div>
        )
    }
};

export default SecondChild;