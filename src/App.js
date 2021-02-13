import "./App.css";
import React, { Component } from "react";
import Posts from "./Component/Posts/Posts";

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <div className="banner">
                    <h1>Website Title</h1>
                </div>
                <Posts />
                <div className="banner">
                    <h1>Website Footer</h1>
                </div>
            </div>
        );
    }
}

export default App;
