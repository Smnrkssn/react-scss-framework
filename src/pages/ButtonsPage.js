import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {colors} from "../services/colors";

class ButtonsPage extends Component {
    render() {
        return (
            <Page>
                <h3>Buttons</h3>
                {colors.map((color, i) => (
                    <button key={i} className={`button-${color} mb-15 mr-15`}>
                        {color} button
                    </button>
                ))}
                <h3 className="mt-30">Message Buttons</h3>
                {colors.map((color, i) => (
                    <button key={i} className={`button message-${color} mb-15 mr-15`}>
                        {color} button
                    </button>
                ))}
            </Page>
        );
    }
}

export default ButtonsPage;