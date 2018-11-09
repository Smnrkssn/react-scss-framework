import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {Loader} from "../components/Loader";

class LoadersPage extends Component {
    render() {
        return (
            <Page>
                <h3>Loaders</h3>
                <Loader size="huge"/>
                <Loader size="large"/>
                <Loader size="medium"/>
                <Loader size="small"/>
                <Loader size="tiny"/>
            </Page>
        );
    }
}

export default LoadersPage;
