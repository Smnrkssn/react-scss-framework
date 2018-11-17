import React, {Component} from "react";
import {Page} from "../site-components/Page";
import Segment from "../components/Segment";
import {Hero} from "../components/Hero";
import withOptionsForm from "../site-components/withOptionsForm";

class HeroPage extends Component {
    render() {
        return (
            <Page>
                <h2>Hero</h2>
                <hr/>
                <section id="hero">
                    {this.props.renderForm({})}
                    <Hero {...this.props.options}>
                        <h2 className="lighter mb-0">Hero Container</h2>
                    </Hero>
                </section>
                <section id="hero-with-height-adjustments">
                    <h3 className="mt-30">Hero with height adjustments</h3>
                    <div className="inset-list">
                        <Hero
                            inset
                            className={`gray h-100`}
                        ><h2 className="lighter mb-0">Hero h-100</h2></Hero>
                        <Hero
                            inset
                            className={`light primary h-75`}
                        ><h2 style={{
                            fontWeight: "lighter",
                            margin: 0
                        }}>Hero h-75</h2></Hero>
                        <Segment
                            inset
                            className={`light secondary h-50`}
                        ><h2 className="lighter mb-0">Hero h-50</h2></Segment>
                        <Hero
                            inset
                            className={`light b-primary h-25`}
                        ><h2 className="lighter mb-0">Hero h-25</h2></Hero>
                    </div>
                </section>
            </Page>
        );
    }
}

export default withOptionsForm({
    className: "primary",
    loading: false,
    disabled: false,
    message: false,
    segment: false,
    inset: false,
    light: false,
    glass: false,
})(HeroPage);
