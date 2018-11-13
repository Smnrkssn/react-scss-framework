import React, {Component} from "react";
import {Page} from "../site-components/Page";
import AlertOptionPane from "../components/Alert/AlertOptionPane";
import {Button} from "../components/Button";

class AlertsPage extends Component {
    render() {
        return (
            <Page>
                <h2>Alerts</h2>
                <hr/>
                <div className="divider-3">
                    <Button message className="danger" onClick={() =>
                        AlertOptionPane.showErrorAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Error Alert
                    </Button>
                </div>
                <div className="divider-3">
                    <Button message className="info" onClick={() =>
                        AlertOptionPane.showInfoAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Info Alert
                    </Button>
                </div>
                <div className="divider-3">
                    <Button message className="success" onClick={() =>
                        AlertOptionPane.showSuccessAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Success Alert
                    </Button>
                </div>
                <div className="divider-3">
                    <Button message className="warning" onClick={() =>
                        AlertOptionPane.showWarningAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Warning Alert
                    </Button>
                </div>
                <div className="divider-3">
                    <Button message onClick={() =>
                        AlertOptionPane.showPlainAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Plain Alert
                    </Button>
                </div>
            </Page>
        );
    }
}

export default AlertsPage;