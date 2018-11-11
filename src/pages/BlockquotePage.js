import React, {Component} from "react";
import {Page} from "../site-components/Page";

class BlockquotePage extends Component {
    render() {
        return (
            <Page>
                <h3>Blockquotes</h3>
                <blockquote>
                    This is a blockquote
                </blockquote>
            </Page>
        );
    }
}

export default BlockquotePage;
