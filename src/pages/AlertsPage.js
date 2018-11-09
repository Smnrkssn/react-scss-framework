import React, {Component} from "react";
import {Page} from "../site-components/Page";
import AlertOptionPane from "../components/Alert/AlertOptionPane";

class AlertsPage extends Component {
    render() {
        return (
            <Page>
                <h3>Alerts</h3>
                <div className="divider-3">
                    <button className="button message-danger" onClick={() =>
                        AlertOptionPane.showErrorAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Error Alert
                    </button>
                </div>
                <div className="divider-3">
                    <button className="button message-info" onClick={() =>
                        AlertOptionPane.showInfoAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Info Alert
                    </button>
                </div>
                <div className="divider-3">
                    <button className="button message-success" onClick={() =>
                        AlertOptionPane.showSuccessAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Success Alert
                    </button>
                </div>
                <div className="divider-3">
                    <button className="button message-warning" onClick={() =>
                        AlertOptionPane.showWarningAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Warning Alert
                    </button>
                </div>
                <div className="divider-3">
                    <button className="button message" onClick={() =>
                        AlertOptionPane.showPlainAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Plain Alert
                    </button>
                </div>
            </Page>
        );
    }
}

export default AlertsPage;