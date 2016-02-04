import React, {Component} from 'react';

import { Link } from 'react-router';

// Root Blue Ocean UI component
export default class App extends Component {
    render() {

        console.log("Rendering App, props", this.props);

        return (
            <div id="outer">
                <header>
                    <img src="/resources/logo.png" width="150" id="jenkins-logo"/>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/dynamic">Dynamic</Link>
                    </nav>
                    {/* <button onClick={window.$HACK.addDynamicRoute}>Add route</button> */}
                </header>
                <main>
                    {/* children currently set by router */}
                    {this.props.children}
                </main>
                <footer>
                    <p>This is a footer. I'm sure you'll agree.</p>
                </footer>
            </div>
        );
    }
}
