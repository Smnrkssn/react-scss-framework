import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {Loader} from "../components/Loader";
import {colors} from "../services/colors";

class LoadersPage extends Component {
    render() {
        return (
            <Page>
                {colors.map((color, i) => (
                    <div key={i}>
                        <h3>{color}</h3>
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
                                <Loader size="huge" className={`${color} dark`}/>
                            </div>
                            <div className="column">
                                <h4>Large:</h4>
                                <Loader size="large" className={`${color} dark`}/>
                            </div>
                            <div className="column">
                                <h4>Medium:</h4>
                                <Loader size="medium" className={`${color} dark`}/>
                            </div>
                            <div className="column">
                                <h4>Small:</h4>
                                <Loader size="small" className={`${color} dark`}/>
                            </div>
                            <div className="column">
                                <h4>Tiny:</h4>
                                <Loader size="tiny" className={`${color} dark`}/>
                            </div>
                        </div>
                    </div>
                ))}
            </Page>
        );
    }
}

export default LoadersPage;
