import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {Loader} from "../components/Loader";
import {darkColors} from "../services/colors";
import Segment from "../components/Segment";
import {Columns} from "../components/Columns";
import withOptionsForm from "../site-components/withOptionsForm";
import SourceContainer from "../components/SourceContainer";

const sizes = ["huge", "large", "medium", "small", "tiny"];

class LoadersPage extends Component {
    render() {
        return (
            <Page>
                <h2>Loaders</h2>
                <hr/>
                {this.props.renderForm({})}
                <Segment.List>
                    {darkColors.map((color, i) => (
                        <Segment key={i}>
                            <h3>{color} loaders</h3>
                            <SourceContainer>
                                <Columns sizes={[3, 2, 2, 2, 2]}>
                                    {sizes.map((size, j) => (
                                        <div className="column" key={j}>
                                            <h4>{size}</h4>
                                            <Loader
                                                size={size}
                                                {...this.props.options}
                                                className={`${color}`}
                                            />
                                        </div>
                                    ))}
                                </Columns>
                            </SourceContainer>
                        </Segment>
                    ))}
                </Segment.List>
            </Page>
        );
    }
}

export default withOptionsForm({
    inverted: false,
    light: false,
    dark: false
})(LoadersPage);
