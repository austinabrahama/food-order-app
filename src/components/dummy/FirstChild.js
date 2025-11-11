import { Component } from "react";
import ChildOfFirstChild from "./ChildOfFirstChild";
import ChildOfFirstChild2 from "./ChildOfFirstChild2";

class FirstChild extends Component {
    constructor(props) {
        super(props);
        console.log("FirstChild Constructor");
    }

    componentDidMount() {
        console.log("FirstChild componentDidMount");
    }
    render() {
        console.log("FirstChild Render");
        return (
            <div className="" >
                <ChildOfFirstChild />
                <ChildOfFirstChild2 />
            </div>
        )
    }
};

export default FirstChild;