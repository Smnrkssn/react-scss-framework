import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {Button} from "../components/Button";
import withOptionsForm from "../site-components/withOptionsForm";
import SourceContainer from "../components/SourceContainer";

class ButtonsPage extends Component {
    render() {
        return (
            <Page>
                <h2>Buttons</h2>
                <hr/>
                {this.props.renderForm({})}
                <SourceContainer editorProps={{
                    height: "200px"
                }}>
                    <Button {...this.props.options}>
                        Button
                    </Button>
                </SourceContainer>
            </Page>
        );
    }
}

export default withOptionsForm({
    className: "primary",
    disabled: false,
    loading: false,
    outlined: false,
    message: false,
    segment: false,
    inset: false,
    light: false,
    glass: false
})(ButtonsPage);