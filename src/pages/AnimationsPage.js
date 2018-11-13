import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {AnimationDropdown} from "../components/AnimationDropdown";
import {Animation} from "../components/Animation";

class AnimationsPage extends Component {
    state = {
        animation: "",
        animationKey: 0
    };

    render(){
        return (
            <Page>
                <h2>Animation components using animate.css</h2>
                <hr/>
                <form className="form container-4 mb-30">
                    <Animation key={this.state.animationKey} animation={this.state.animation}>
                        <h2 className="display-1">Animate me!</h2>
                    </Animation>
                    <AnimationDropdown onChange={(event) => {
                        const value = event.target.value;

                        this.setState((prevState) => ({
                            animation: value,
                            animationKey: (prevState.animationKey + 1) % 2
                        }));
                    }}/>
                </form>
            </Page>
        );
    }
}

export default AnimationsPage;