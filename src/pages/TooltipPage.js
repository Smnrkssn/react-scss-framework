import React, {Component} from "react";
import {Page} from "../site-components/Page";
import Form from "../components/Form";
import Tooltip from "../components/Tooltip";
import Segment from "../components/Segment";
import withOptionsForm from "../site-components/withOptionsForm";

class TooltipPage extends Component {
    render(){
        return (
            <Page>
                <h2>Tooltips</h2>
                <hr/>
                <Form className="container-4 mb-15">
                    <Tooltip.Container>
                        <input type="text" placeholder="Hover over me!"/>
                        <Tooltip>I'm a default tooltip</Tooltip>
                    </Tooltip.Container>
                </Form>
                <h2>Controlled Tooltip</h2>
                {this.props.renderForm({})}
                <Segment tooltip inset className="mt-30">
                    I have a tooltip
                    <Tooltip {...this.props.options}>
                        I'm a controlled tooltip
                    </Tooltip>
                </Segment>
            </Page>
        );
    }
}

export default withOptionsForm({
    className: "white",
    show: true,
    disabled: false,
    loading: false,
    segment: true,
    light: false,
    glass: false,
    inset: false,
    hero: false,
    top: true,
    left: true,
    bottom: false,
    right: false
})(TooltipPage);