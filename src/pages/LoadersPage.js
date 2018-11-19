import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {Loader} from "../components/Loader";
import {Columns} from "../components/Columns";
import withOptionsForm from "../site-components/withOptionsForm";
import SourceContainer from "../components/SourceContainer";
import {Message} from "../components/Message";

const sizes = ["huge", "large", "medium", "small", "tiny"];

class LoadersPage extends Component {
    render() {
        return (
            <Page>
                <h2>Loaders</h2>
                <hr/>
                {this.props.renderForm({})}
                <Message className="white">
                    <SourceContainer>
                        <Columns sizes={[3, 2, 2, 2, 2]}>
                            {sizes.map((size, j) => (
                                <div className="column" key={j}>
                                    <h4>{size}</h4>
                                    <Loader
                                        size={size}
                                        {...this.props.options}
                                    />
                                </div>
                            ))}
                        </Columns>
                    </SourceContainer>
                </Message>
            </Page>
        );
    }
}

export default withOptionsForm({
    className: "primary",
    inverted: false,
    light: false,
    dark: false
})(LoadersPage);
