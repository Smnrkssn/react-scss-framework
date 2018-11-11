import React, {Component} from "react";
import {Page} from "../site-components/Page";

class HeadingPage extends Component {
    render() {
        return (
            <Page>
                <h2>Code</h2>
                <code>
                    This is some code
                </code>
            </Page>
        );
    }
}

export default HeadingPage;