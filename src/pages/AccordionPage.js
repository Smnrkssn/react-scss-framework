import React, {Component, Fragment} from "react";
import {Page} from "../site-components/Page";
import Accordion from "../components/Accordion";
import {Menu} from "../components/Menu";
import {classNames} from "../services/className";
import {Animation} from "../components/Animation";
import {AnimationDropdown} from "../components/AnimationDropdown";
import SourceContainer from "../components/SourceContainer";

class AccordionPage extends Component {
    state = {
        hide: false,
        animation: "fadeIn"
    };

    render() {
        const {hide} = this.state;

        return (
            <Page>
                <h2>Accordion</h2>
                <p>Built using the Menu API</p>
                <hr/>
                <SourceContainer>
                    <Accordion className="b-dark-gray">
                        <Accordion.Toggle content="Toggle 1">
                            <Menu vertical light className="b-dark-gray">
                                <a href="#page">Item 1</a>
                                <a href="#page">Item 2</a>
                                <a href="#page">Item 3</a>
                                <a href="#page">Item 4</a>
                            </Menu>
                        </Accordion.Toggle>
                        <Accordion.Toggle content="Toggle 2">
                            <Menu vertical light className="b-dark-gray">
                                <a href="#page">Item 1</a>
                                <a href="#page">Item 2</a>
                                <a href="#page">Item 3</a>
                                <a href="#page">Item 4</a>
                            </Menu>
                        </Accordion.Toggle>
                    </Accordion>
                </SourceContainer>
                <h2 className="mt-30">
                    Defining onClick gives complete control over that item
                </h2>
                <SourceContainer>
                    <Accordion className="danger">
                        <Accordion.Toggle content="Custom onClick" onClick={() => {
                            alert("Toggling item visibility");
                            this.setState((prevState) => ({hide: !prevState.hide}));
                        }}>
                            <Menu light vertical className={`danger ${classNames({"hide": hide})}`}>
                                <a href="#page">I'm able to be open by default</a>
                                <a href="#page">Item 2</a>
                                <a href="#page">Item 3</a>
                                <a href="#page">Item 4</a>
                            </Menu>
                        </Accordion.Toggle>
                        <Accordion.Toggle content={
                            <span className="bold">I have custom content</span>
                        }>
                            <Menu light vertical className="danger w-100">
                                <a href="#page">Item 1</a>
                                <a href="#page">Item 2</a>
                                <a href="#page">Item 3</a>
                                <a href="#page">Item 4</a>
                            </Menu>
                        </Accordion.Toggle>
                    </Accordion>
                </SourceContainer>
                <h2 className="mt-30">
                    The toggle items can be wrapped in an Animation
                </h2>
                <AnimationDropdown
                    value={this.state.animation}
                    onChange={(event) => this.setState({animation: event.target.value})}
                />
                <SourceContainer>
                    <Accordion className="b-dark-gray">
                        <Accordion.Toggle content="Toggle 1">
                            <Animation animation={this.state.animation}>
                                <Menu vertical className="secondary">
                                    <a href="#page">Item 1</a>
                                    <a href="#page">Item 2</a>
                                    <a href="#page">Item 3</a>
                                    <a href="#page">Item 4</a>
                                </Menu>
                            </Animation>
                        </Accordion.Toggle>
                    </Accordion>
                </SourceContainer>
            </Page>
        );
    }
}

export default AccordionPage;
