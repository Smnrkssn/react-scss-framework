import React, {Component} from "react";
import {Page} from "../site-components/Page";
import Tooltip from "../components/Tooltip";
import Segment from "../components/Segment";
import withOptionsForm from "../site-components/withOptionsForm";
import SourceContainer from "../components/SourceContainer";

class TooltipPage extends Component {
    render(){
        return (
            <Page>
                <h2>Tooltips</h2>
                <hr/>
                <SourceContainer>
                    <Tooltip.Container>
                        <input type="text" placeholder="Hover over me!"/>
                        <Tooltip>I'm a default tooltip</Tooltip>
                    </Tooltip.Container>
                </SourceContainer>
                <hr/>
                <h2>Controlled Tooltip</h2>
                {this.props.renderForm({})}
                <SourceContainer>
                    <Segment tooltip inset className="mt-30">
                        I have a tooltip
                        <Tooltip {...this.props.options}>
                            I'm a controlled tooltip
                        </Tooltip>
                    </Segment>
                </SourceContainer>
            </Page>
        );
    }
}

export default withOptionsForm({
    className: "white",
    show: true,
    segment: true,
    loading: false,
    light: false,
    dark: false,
    glass: false,
    inset: false,
    top: true,
    left: true,
    bottom: false,
    right: false,
    center: false
})(TooltipPage);