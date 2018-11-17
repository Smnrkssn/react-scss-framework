import React, {Component} from "react";
import {Page} from "../site-components/Page";
import Segment from "../components/Segment";
import withOptionsForm from "../site-components/withOptionsForm";

class SegmentsPage extends Component {
    render() {
        return (
            <Page>
                <h2>Segments</h2>
                <hr/>
                {this.props.renderForm({})}
                <Segment {...this.props.options}>
                    Segment
                </Segment>
                <h3 className="mt-30">Horizontal Rules</h3>
                <Segment className="mb-15">
                    Part 1
                    <hr/>
                    Part 2
                    <hr/>
                    Part 3
                </Segment>
                <h3 className="mt-30">Segment List</h3>
                <Segment.List>
                    <Segment>
                        List item 2
                    </Segment>
                    <Segment>
                        List item 2
                    </Segment>
                    <Segment>
                        List item 3
                    </Segment>
                </Segment.List>
            </Page>
        );
    }
}

export default withOptionsForm({
    className: "white",
    loading: false,
    disabled: false,
    inline: false,
    hero: false,
    message: false,
    inset: false,
    light: false,
    glass: false,
})(SegmentsPage);