import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {colors} from "../services/colors";
import Segment from "../components/Segment";
import {Hero} from "../components/Hero";

class HeroPage extends Component {
    render() {
        return (
            <Page>
                <h2>Hero</h2>
                <hr/>
                <section id="hero">
                    {["white", "gray", ...colors].map((color, i) => (
                        <Hero
                            key={i}
                            className={`${color}`}
                        ><h2 style={{fontWeight: "lighter", margin: 0}}>Hero {color}</h2></Hero>
                    ))}
                    {colors.map((color, i) => (
                        <Hero
                            key={i}
                            light
                            className={`hero ${color}`}
                        ><h2 style={{
                            fontWeight: "lighter",
                            margin: 0
                        }}>Hero Light {color}</h2></Hero>
                    ))}
                </section>
                <section id="hero-segments">
                    <h3 className="mt-30">Hero Segments</h3>
                    <Segment.List>
                        {["white", "gray", ...colors].map((color, i) => (
                            <Hero
                                key={i}
                                segment
                                className={`${color}`}
                            ><h2 style={{fontWeight: "lighter", margin: 0}}>
                                Hero Segment {color}</h2></Hero>
                        ))}
                        {colors.map((color, i) => (
                            <Segment
                                key={i}
                                hero
                                className={`light ${color}`}
                            ><h2 style={{
                                fontWeight: "lighter",
                                margin: 0
                            }}>Hero Segment Light {color}</h2></Segment>
                        ))}
                    </Segment.List>
                </section>
                <section id="hero-inset-segments">
                    <h3 className="mt-30">Hero Inset Segments</h3>
                    {["white", "gray", ...colors].map((color, i) => (
                        <Hero
                            key={i}
                            segment
                            inset
                            className={`${color} mb-15 mt-15`}
                        ><h2 style={{
                            fontWeight: "lighter",
                            margin: 0
                        }}>Hero Inset Segment {color}</h2></Hero>
                    ))}
                </section>
                <section id="hero-inset-segments">
                    <h3 className="mt-30">Hero with height adjustments</h3>
                    <Segment
                        hero
                        inset
                        className={`gray h-100 mb-15 mt-15`}
                    ><h2 style={{
                        fontWeight: "lighter",
                        margin: 0
                    }}>Hero h-100</h2></Segment>
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
                    ><h2 style={{
                        fontWeight: "lighter",
                        margin: 0
                    }}>Hero h-50</h2></Segment>
                    <Segment
                        hero
                        inset
                        className={`light b-primary h-25 mb-15 mt-15`}
                    ><h2 style={{
                        fontWeight: "lighter",
                        margin: 0
                    }}>Hero h-25</h2></Segment>
                </section>
            </Page>
        );
    }
}

export default HeroPage;
