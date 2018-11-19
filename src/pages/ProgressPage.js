import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {darkColors} from "../services/colors";
import SourceContainer from "../components/SourceContainer";

class ProgressPage extends Component {
    render(){
        return (
            <Page>
                <h2>Progress</h2>
                <hr/>
                <SourceContainer>
                    {darkColors.map((color, i) => (
                        <progress key={i} className={`${color} mb-15`} value={22 + i} max="100"/>
                    ))}
                </SourceContainer>
            </Page>
        );
    }
}

export default ProgressPage;