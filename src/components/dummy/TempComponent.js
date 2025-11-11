import { Component } from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";

class TempComponent extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent componentDidMount");
    }
    render() {
        console.log("Parent Render");
        return (
            <div className="" >
                <FirstChild />
                <SecondChild />
            </div>
        )
    }
};

export default TempComponent;