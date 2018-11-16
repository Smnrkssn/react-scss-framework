import React, {Component} from "react";
import {Page} from "../site-components/Page";
import Segment from "../components/Segment";
import {Columns} from "../components/Columns";

class ColumnsPage extends Component {
    state = {
        animation: "fadeIn",
        animationKey: 0
    };

    render(){
        return (
            <Page>
                <h2>Grid</h2>
                <hr/>
                <h2>Equal width</h2>
                <Columns>
                    <Segment className="secondary">
                        <h2 className="mb-0">1</h2>
                    </Segment>
                    <Segment className="secondary">
                        <h2 className="mb-0">2</h2>
                    </Segment>
                    <Segment className="secondary">
                        <h2 className="mb-0">3</h2>
                    </Segment>
                </Columns>
                <h2 className="mt-30">Unstackable</h2>
                <Columns unstackable>
                    <Segment className="secondary">
                        <h2 className="mb-0">1</h2>
                    </Segment>
                    <Segment className="secondary">
                        <h2 className="mb-0">2</h2>
                    </Segment>
                    <Segment className="secondary">
                        <h2 className="mb-0">3</h2>
                    </Segment>
                </Columns>
                <h2 className="mt-30">Specific sizes and several rows</h2>
                <Columns sizes={[4, 3, 5]}>
                    <Segment className="secondary">
                        <h2 className="mb-0">4/12</h2>
                    </Segment>
                    <Segment className="secondary">
                        <h2 className="mb-0">3/12</h2>
                    </Segment>
                    <Segment className="secondary">
                        <h2 className="mb-0">5/12</h2>
                    </Segment>
                    <Segment className="secondary">
                        <h2 className="mb-0">auto</h2>
                    </Segment>
                    <Segment className="secondary">
                        <h2 className="mb-0">auto</h2>
                    </Segment>
                    <Segment className="secondary" size={3}>
                        <h2 className="mb-0">3/12</h2>
                    </Segment>
                </Columns>
                <h2 className="mt-30">Custom breakpoint</h2>
                <Columns sizes={[4, null, 5]} breakpoint="md">
                    <Segment className="secondary">
                        <h2 className="mb-0">4/12</h2>
                    </Segment>
                    <Segment className="secondary">
                        <h2 className="mb-0">3/12</h2>
                    </Segment>
                    <Segment className="secondary">
                        <h2 className="mb-0">5/12</h2>
                    </Segment>
                </Columns>
            </Page>
        );
    }
}

export default ColumnsPage;