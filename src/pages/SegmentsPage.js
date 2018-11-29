import React, {Component} from "react";
import {Page} from "../site-components/Page";
import Segment from "../components/Segment";
import withOptionsForm from "../site-components/withOptionsForm";
import SourceContainer from "../components/SourceContainer";

class SegmentsPage extends Component {
    render() {
        return (
            <Page>
                <h2>Segments</h2>
                <hr/>
                {this.props.renderForm({})}
                <SourceContainer editorProps={{
                    height: "200px"
                }}>
                    <Segment {...this.props.options}>
                        Segment
                    </Segment>
                </SourceContainer>
                <h3 className="mt-30">Horizontal Rules</h3>
                <SourceContainer editorProps={{
                    height: "200px"
                }}>
                    <Segment className="mb-15">
                        Part 1
                        <hr/>
                        Part 2
                        <hr/>
                        Part 3
                    </Segment>
                </SourceContainer>
                <h3 className="mt-30">Segment List</h3>
                <SourceContainer editorProps={{
                    height: "200px"
                }}>
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
                </SourceContainer>
                <SourceContainer editorProps={{
                    height: "200px"
                }}>
                    <Segment.List>
                        <Segment className="gray bold" thinned>
                            List item 2
                        </Segment>
                        <Segment thinned>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum
                            dolor ex, eget venenatis nulla dictum nec. Vestibulum feugiat ut dolor
                            vel hendrerit. Aliquam maximus, risus quis pellentesque porttitor, nibh
                            enim lacinia velit, id aliquam leo odio eu dolor. Vestibulum tincidunt
                            tristique ex at ultrices. Mauris vestibulum feugiat lorem elementum
                            molestie. Vestibulum ante ipsum primis in faucibus orci luctus et
                            ultrices posuere cubilia Curae; Praesent aliquet arcu quis luctus
                            volutpat. Morbi non ante dui. Vestibulum elementum congue facilisis.
                            Aliquam erat volutpat. Vestibulum dapibus pretium nunc at sagittis.
                            Nunc sed metus nulla. Integer vitae eros rhoncus, pharetra justo ac,
                            pretium tellus. Ut quis eleifend lectus, eu venenatis tellus. Integer
                            massa dui, sodales non molestie interdum, venenatis at est.
                        </Segment>
                    </Segment.List>
                </SourceContainer>
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
    thickened: false,
    thinned: false,
    inset: false,
    light: false,
    dark: false,
    glass: false,
})(SegmentsPage);