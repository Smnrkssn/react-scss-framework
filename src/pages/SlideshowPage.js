import React, {Component} from "react";
import {Page} from "../site-components/Page";
import Slideshow from "../components/Slideshow";
import {AnimationDropdown} from "../components/AnimationDropdown";
import Form from "../components/Form";
import SourceContainer from "../components/SourceContainer";

class SlideshowPage extends Component {
    state = {
        animation: "fadeIn",
        outAnimation: "fadeOut",
        duration: 400
    };

    render() {
        return (
            <Page>
                <h2>Slideshow</h2>
                <hr/>
                <Form className="mb-30">
                    <Form.Columns>
                        <label>In animation</label>
                        <AnimationDropdown value={this.state.animation} onChange={(event) => {
                            this.setState({animation: event.target.value});
                        }}/>
                        <label>Out animation</label>
                        <AnimationDropdown value={this.state.outAnimation} onChange={(event) => {
                            this.setState({outAnimation: event.target.value});
                        }}/>
                        <label>Duration</label>
                        <input type="number" value={this.state.duration} onChange={(event) => {
                            this.setState({duration: parseInt(event.target.value, 10)});
                        }}/>
                    </Form.Columns>
                </Form>
                <SourceContainer>
                    <Slideshow {...this.state} wrapper={5}>
                        <div>
                            <h1 className="mb-0">Slide 1</h1>
                        </div>
                        <div>
                            <h1 className="mb-0">Slide 2</h1>
                        </div>
                        <div>
                            <h1 className="mb-0">Slide 3</h1>
                        </div>
                    </Slideshow>
                </SourceContainer>
            </Page>
        );
    }
}

export default SlideshowPage;
