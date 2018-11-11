import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {Checkbox, AndroidCheckbox} from "../components/Checkboxes";
import {colors} from "../services/colors";

class CheckboxesPage extends Component {
    render(){
        return (
            <Page>
                <h3>Checkboxes</h3>
                <div className="mb-30">
                    {colors.map((color, i) => (
                        <Checkbox className={color} defaultChecked={true} key={i}/>
                    ))}
                </div>
                <h3>Android Checkbox</h3>
                {colors.map((color, i) => (
                    <AndroidCheckbox id={`checkbox-${i}`} className={color} defaultChecked={true} key={i}/>
                ))}
            </Page>
        );
    }
}

export default CheckboxesPage;