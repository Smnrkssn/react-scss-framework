import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {colors} from "../services/colors";

class ProgressPage extends Component {
    render(){
        return (
            <Page>
                <h2>Progress</h2>
                <hr/>
                {colors.map((color, i) => (
                    <progress key={i} className={`${color} mb-15`} value={22 + i} max="100"/>
                ))}
            </Page>
        );
    }
}

export default ProgressPage;