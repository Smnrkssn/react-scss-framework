import React, {Component} from "react";
import {Page} from "../site-components/Page";

class AlertsPage extends Component {
    render() {
        return (
            <Page>
                Alerts
                <button className="button message-danger">
                    Show Error Alert
                </button>
            </Page>
        );
    }
}

export default AlertsPage;