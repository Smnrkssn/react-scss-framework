import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {Loader} from "../components/Loader";
import {darkColors} from "../services/colors";
import Segment from "../components/Segment";

class LoadersPage extends Component {
    render() {
        return (
            <Page>
                <h2>Loaders</h2>
                <hr/>
                <Segment.List>
                {darkColors.map((color, i) => (
                    <Segment key={i}>
                        <h3>{color} loaders</h3>
                        <div className="columns">
                            <div className="column">
                                <h4>Huge:</h4>
                                <Loader size="huge" className={color}/>
                            </div>
                            <div className="column">
                                <h4>Large:</h4>
                                <Loader size="large" className={color}/>
                            </div>
                            <div className="column">
                                <h4>Medium:</h4>
                                <Loader size="medium" className={color}/>
                            </div>
                            <div className="column">
                                <h4>Small:</h4>
                                <Loader size="small" className={color}/>
                            </div>
                            <div className="column">
                                <h4>Tiny:</h4>
                                <Loader size="tiny" className={color}/>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <h4>Huge:</h4>
                                <Loader size="huge" className={`${color} inverted`}/>
                            </div>
                            <div className="column">
                                <h4>Large:</h4>
                                <Loader size="large" className={`${color} inverted`}/>
                            </div>
                            <div className="column">
                                <h4>Medium:</h4>
                                <Loader size="medium" className={`${color} inverted`}/>
                            </div>
                            <div className="column">
                                <h4>Small:</h4>
                                <Loader size="small" className={`${color} inverted`}/>
                            </div>
                            <div className="column">
                                <h4>Tiny:</h4>
                                <Loader size="tiny" className={`${color} inverted`}/>
                            </div>
                        </div>
                    </Segment>
                ))}
                </Segment.List>
            </Page>
        );
    }
}

export default LoadersPage;
