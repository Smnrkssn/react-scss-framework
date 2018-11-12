import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {Checkbox, AndroidCheckbox} from "../components/Checkboxes";
import {colors} from "../services/colors";

class FormsPage extends Component {
    render(){
        return (
            <Page>
                <h2>Forms</h2>
                <form className="form container-4 mb-30">
                    <label>Normal</label>
                    <input type="text" placeholder="placeholder"/>
                    <label>Disabled</label>
                    <input type="text" placeholder="placeholder" disabled={true}/>
                    <label>Error</label>
                    <textarea placeholder="placeholder" rows={4} className="error"/>
                </form>
                <h2>Checkboxes</h2>
                <div className="mb-30">
                    {colors.map((color, i) => (
                        <Checkbox className={color} defaultChecked={true} key={i}/>
                    ))}
                </div>
                <h2>Android Checkboxes</h2>
                <div className="columns">
                    {colors.map((color, i) => (
                        <AndroidCheckbox id={`checkbox-${i}`} className={`${color} clearfix`} defaultChecked={true} key={i}/>
                    ))}
                </div>
            </Page>
        );
    }
}

export default FormsPage;