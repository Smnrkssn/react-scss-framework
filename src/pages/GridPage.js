import React, {Component} from "react";
import {Page} from "../site-components/Page";
import Segment from "../components/Segment";
import {Grid} from "../components/Grid";
import SourceContainer from "../components/SourceContainer";

class GridPage extends Component {
    render(){
        return (
            <Page>
                <h2>CSS Grid</h2>
                <hr/>
                <h2>Equal width</h2>
                <SourceContainer>
                    <Grid>
                        <Segment className="secondary">
                            <h2 className="mb-0">1</h2>
                        </Segment>
                        <Segment className="secondary">
                            <h2 className="mb-0">2</h2>
                        </Segment>
                    </Grid>
                </SourceContainer>
            </Page>
        );
    }
}

export default GridPage;