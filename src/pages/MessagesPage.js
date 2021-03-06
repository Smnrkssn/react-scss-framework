import React, {Component} from "react";
import {Message} from "../components/Message";
import {Page} from "../site-components/Page";
import withOptionsForm from "../site-components/withOptionsForm";
import SourceContainer from "../components/SourceContainer";

class MessagesPage extends Component {
    render() {
        return (
            <Page>
                <h2>Messages</h2>
                <hr/>
                {this.props.renderForm({})}
                <SourceContainer editorProps={{
                    height: "200px"
                }}>
                    <Message
                        {...this.props.options}
                        className={`${this.props.options.className}`}
                        heading={`Sample message`}
                        list={["Sample content"]}
                    />
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
    segment: false,
    hero: false,
    inset: false,
    light: false,
    dark: false,
    glass: false
})(MessagesPage);