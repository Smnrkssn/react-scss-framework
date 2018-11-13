import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {colors} from "../services/colors";
import {Button} from "../components/Button";

class ButtonsPage extends Component {
    render() {
        return (
            <Page>
                <h2>Buttons</h2>
                <hr/>
                {colors.map((color, i) => (
                    <Button key={i} className={`${color} mb-15 mr-15`}>
                        {color} button
                    </Button>
                ))}
                <h3 className="mt-30">Loading Buttons</h3>
                {colors.map((color, i) => (
                    <Button loading key={i} className={`${color} mb-15 mr-15`}>
                        {color} button
                    </Button>
                ))}
                <h3 className="mt-30">Disabled Buttons</h3>
                {colors.map((color, i) => (
                    <Button disabled key={i} className={`${color} mb-15 mr-15`}>
                        {color} button
                    </Button>
                ))}
                <h3 className="mt-30">Outlined Buttons</h3>
                {colors.map((color, i) => (
                    <Button outlined key={i} className={`${color} mb-15 mr-15`}>
                        {color} button
                    </Button>
                ))}
                <h3 className="mt-30">Disabled Outlined Buttons</h3>
                {colors.map((color, i) => (
                    <Button outlined disabled key={i} className={`${color} mb-15 mr-15`}>
                        {color} button
                    </Button>
                ))}
                <h3 className="mt-30">Loading Outlined Buttons</h3>
                {colors.map((color, i) => (
                    <Button outlined loading key={i} className={`${color} mb-15 mr-15`}>
                        {color} button
                    </Button>
                ))}
                <h3 className="mt-30">Message Buttons</h3>
                {colors.map((color, i) => (
                    <Button message key={i} className={`${color} mb-15 mr-15`}>
                        {color} button
                    </Button>
                ))}
                <h3 className="mt-30">Segment Buttons</h3>
                {colors.map((color, i) => (
                    <Button segment key={i} className={`${color} mb-15 mr-15`}>
                        {color} button
                    </Button>
                ))}
                <h3 className="mt-30">Loading Segment Buttons</h3>
                {colors.map((color, i) => (
                    <Button segment loading key={i} className={`${color} mb-15 mr-15`}>
                        {color} button
                    </Button>
                ))}
                <h3 className="mt-30">Disabled Segment Buttons</h3>
                {colors.map((color, i) => (
                    <Button segment disabled key={i} className={`${color} mb-15 mr-15`}>
                        {color} button
                    </Button>
                ))}
                <h3 className="mt-30">Segment Message Buttons</h3>
                {colors.map((color, i) => (
                    <Button segment message key={i} className={`${color} mb-15 mr-15`}>
                        {color} button
                    </Button>
                ))}
            </Page>
        );
    }
}

export default ButtonsPage;