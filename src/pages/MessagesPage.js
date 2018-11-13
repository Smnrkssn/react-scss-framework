import React, {Component} from "react";
import {Message} from "../components/Message";
import {Page} from "../site-components/Page";
import {colors} from "../services/colors";

class MessagesPage extends Component {
    render() {
        return (
            <Page>
                <h2>Messages</h2>
                <hr/>
                {colors.map((color, i) => (
                    <Message
                        key={i}
                        className={`${color} mb-15`}
                        heading={`${color} message`}
                        list={["Sample content"]}
                    />
                ))}
            </Page>
        );
    }
}

export default MessagesPage;