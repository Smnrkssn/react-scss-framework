import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {AnimationDropdown} from "../components/AnimationDropdown";
import {Animation} from "../components/Animation";
import SourceContainer from "../components/SourceContainer";
import Form from "../components/Form";

class AnimationsPage extends Component {
    state = {
        animation: "",
        animationKey: 0
    };

    changeAnimation = (event) => {
        const value = event.target.value;

        this.setState((prevState) => ({
            animation: value,
            animationKey: (prevState.animationKey + 1) % 2
        }));
    };

    render(){
        return (
            <Page>
                <h2>Animation components using animate.css</h2>
                <hr/>
                <SourceContainer>
                    <Form container={4}>
                        <Animation key={this.state.animationKey} animation={this.state.animation}>
                            <h2 className="display-1">Animate me!</h2>
                        </Animation>
                        <AnimationDropdown
                            className="mt-15"
                            value={this.state.animation}
                            onChange={this.changeAnimation}
                        />
                    </Form>
                </SourceContainer>
            </Page>
        );
    }
}

export default AnimationsPage;