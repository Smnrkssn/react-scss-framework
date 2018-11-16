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
                <section id="hero-inset-segments">
                    <h3 className="mt-30">Hero with height adjustments</h3>
                    <Segment
                        hero
                        inset
                        className={`gray h-100 mb-15 mt-15`}
                    ><h2 className="lighter mb-0">Hero h-100</h2></Segment>
                    <Segment
                        hero
                        inset
                        className={`light primary h-75 mb-15 mt-15`}
                    ><h2 style={{
                        fontWeight: "lighter",
                        margin: 0
                    }}>Hero h-75</h2></Segment>
                    <Segment
                        hero
                        inset
                        className={`light secondary h-50 mb-15 mt-15`}
                    ><h2 className="lighter mb-0">Hero h-50</h2></Segment>
                    <Segment
                        hero
                        inset
                        className={`light b-primary h-25 mb-15 mt-15`}
                    ><h2 className="lighter mb-0">Hero h-25</h2></Segment>
                </section>
            </Page>
        );
    }
}

export default withOptionsForm({
    className: "primary",
    segment: false,
    inset: false,
    light: false,
    glass: false,
    message: false,
})(HeroPage);
