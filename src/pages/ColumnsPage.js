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
                <h2>Columns</h2>
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
                    <Segment className="secondary" columnClass="span-3">
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
                <h2 className="mt-30">Column sizing at specific breakpoint</h2>
                <Columns padder={0}>
                    <Segment className="secondary" columnClass="span-7-md">
                        <p className="mb-0">auto large, 7/12 medium</p>
                    </Segment>
                    <Segment className="secondary" columnClass="span-5-sm">
                        <p className="mb-0">auto large, 5/12 small</p>
                    </Segment>
                    <Segment className="secondary" columnClass="span-4">
                        <p className="mb-0">4/12 large, 12/12 small</p>
                    </Segment>
                </Columns>
            </Page>
        );
    }
}

export default ColumnsPage;