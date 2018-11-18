import React, {Component} from "react";
import {Page} from "../site-components/Page";
import AlertOptionPane from "../components/Alert/AlertOptionPane";
import {Button} from "../components/Button";
import {Columns} from "../components/Columns";

class AlertsPage extends Component {
    render() {
        return (
            <Page>
                <h2>Alerts</h2>
                <hr/>
                <Columns padder={0} container={3} sizes={[4, 4, 4]}>
                    <Button message className="danger" onClick={() =>
                        AlertOptionPane.showErrorAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Error Alert
                    </Button>
                    <Button message className="info" onClick={() =>
                        AlertOptionPane.showInfoAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Info Alert
                    </Button>
                    <Button message className="success" onClick={() =>
                        AlertOptionPane.showSuccessAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Success Alert
                    </Button>
                </Columns>
                <Columns padder={0} container={3} sizes={[4, 4]}>
                    <Button message className="warning" onClick={() =>
                        AlertOptionPane.showWarningAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Warning Alert
                    </Button>
                    <Button message onClick={() =>
                        AlertOptionPane.showPlainAlert({
                            message: "Sample message"
                        })
                    }>
                        Show Plain Alert
                    </Button>
                </Columns>
            </Page>
        );
    }
}

export default AlertsPage;