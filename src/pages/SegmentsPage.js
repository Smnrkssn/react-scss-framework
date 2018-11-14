import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {colors} from "../services/colors";
import Segment from "../components/Segment";

class SegmentsPage extends Component {
    render() {
        return (
            <Page>
                <h2>Segments</h2>
                <hr/>
                {colors.map((color, i) => (
                    <Segment
                        key={i}
                        light
                        inline
                        className={`${color} mb-15 mr-15`}
                    >
                        Inline {(i > 1) ? "Light" : ""} {color}
                    </Segment>
                ))}
                {colors.map((color, i) => (
                    <Segment
                        key={i}
                        inline
                        className={`${color} mb-15 mr-15`}
                    >
                        Inline {color}
                    </Segment>
                ))}
                {colors.map((color, i) => (
                    <Segment
                        key={i}
                        light
                        inline
                        inset
                        className={`${color} mb-15 mr-15`}
                    >
                        Inset Inline {(i > 1) ? "Light" : ""} {color}
                    </Segment>
                ))}
                {colors.map((color, i) => (
                    <Segment
                        key={i}
                        inline
                        inset
                        className={`${color} mb-15 mr-15`}
                    >
                        Inset Inline {color}
                    </Segment>
                ))}
                <h3 className="mt-30">Horizontal Rules</h3>
                <Segment className="mb-15">
                    Part 1
                    <hr/>
                    Part 2
                    <hr/>
                    Part 3
                </Segment>
                <Segment className="primary mb-15">
                    Part 1
                    <hr/>
                    Part 2
                    <hr/>
                    Part 3
                </Segment>
                <Segment className="light primary">
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

export default SegmentsPage;