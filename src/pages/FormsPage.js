import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {Checkbox, AndroidCheckbox} from "../components/Checkboxes";
import {colors} from "../services/colors";
import {AnimationDropdown} from "../components/AnimationDropdown";
import {Animation} from "../components/Animation";

class FormsPage extends Component {
    state = {
        animation: "fadeIn",
        animationKey: 0
    };

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
                    <Animation key={this.state.animationKey} animation={this.state.animation}>
                        <h2>Animate me!</h2>
                    </Animation>
                    <AnimationDropdown onChange={(event) => {
                        const value = event.target.value;

                        this.setState((prevState) => ({
                            animation: value,
                            animationKey: (prevState.animationKey + 1) % 2
                        }));
                    }}/>
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