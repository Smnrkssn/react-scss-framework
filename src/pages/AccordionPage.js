import React, {Component, Fragment} from "react";
import {Page} from "../site-components/Page";
import Accordion from "../components/Accordion";
import {Menu} from "../components/Menu";
import {classNames} from "../services/className";

class AccordionPage extends Component {
    state = {
        hide: false
    };

    render() {
        const {hide} = this.state;

        return (
            <Page>
                <h2>Accordion</h2>
                <p>Built using the Menu API</p>
                <hr/>
                <Accordion className="b-dark-gray">
                    <Accordion.Toggle content="Toggle 1">
                        <Menu vertical className="secondary">
                            <a href="#page">Item 1</a>
                            <a href="#page">Item 2</a>
                            <a href="#page">Item 3</a>
                            <a href="#page">Item 4</a>
                        </Menu>
                    </Accordion.Toggle>
                    <Accordion.Toggle content="Toggle 2">
                        <Menu vertical className="secondary w-100">
                            <a href="#page">Item 1</a>
                            <a href="#page">Item 2</a>
                            <a href="#page">Item 3</a>
                            <a href="#page">Item 4</a>
                        </Menu>
                    </Accordion.Toggle>
                </Accordion>
                <h2 className="mt-30">
                    Defining onClick gives complete control over that item
                </h2>
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
                        <Fragment>
                            I have custom content
                        </Fragment>
                    }>
                        <Menu light vertical className="danger w-100">
                            <a href="#page">Item 1</a>
                            <a href="#page">Item 2</a>
                            <a href="#page">Item 3</a>
                            <a href="#page">Item 4</a>
                        </Menu>
                    </Accordion.Toggle>
                </Accordion>
            </Page>
        );
    }
}

export default AccordionPage;
