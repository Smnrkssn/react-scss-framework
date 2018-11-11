import React, {Component} from "react";
import {Page} from "../site-components/Page";

class HeadingPage extends Component {
    render() {
        return (
            <Page>
                <h2>Headings</h2>
                <h2 className="display-1">Display 1</h2>
                <h2 className="display-2">Display 2</h2>
                <h2 className="display-3">Display 3</h2>
                <h2 className="display-4">Display 4</h2>
                <h2 className="display-5">Display 5</h2>
                <h2 className="display-6">Display 6</h2>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
            </Page>
        );
    }
}

export default HeadingPage;