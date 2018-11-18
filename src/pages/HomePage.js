import React, {Component} from "react";
import {Page} from "../site-components/Page";

class HomePage extends Component {
    render() {
        return (
            <Page>
                <h2>React SCSS Framework</h2>
                <hr/>
                <p>
                    This is a Desktop-First React SCSS Framework built to match a single
                    developers preferences.
                </p>
            </Page>
        );
    }
}

export default HomePage;
