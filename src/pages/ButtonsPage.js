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
                <h3 className="mt-30">Loading Buttons</h3>
                {colors.map((color, i) => (
                    <button key={i} className={`loading button-${color} mb-15 mr-15`}>
                        {color} button
                    </button>
                ))}
                <h3 className="mt-30">Disabled Buttons</h3>
                {colors.map((color, i) => (
                    <button disabled key={i} className={`disabled button-${color} mb-15 mr-15`}>
                        {color} button
                    </button>
                ))}
                <h3 className="mt-30">Outlined Buttons</h3>
                {colors.map((color, i) => (
                    <button key={i} className={`outlined button-${color} mb-15 mr-15`}>
                        {color} button
                    </button>
                ))}
                <h3 className="mt-30">Disabled Outlined Buttons</h3>
                {colors.map((color, i) => (
                    <button disabled key={i} className={`outlined disabled button-${color} mb-15 mr-15`}>
                        {color} button
                    </button>
                ))}
                <h3 className="mt-30">Loading Outlined Buttons</h3>
                {colors.map((color, i) => (
                    <button key={i} className={`outlined loading button-${color} mb-15 mr-15`}>
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