import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {Menu} from "../components/Menu";
import HidingMenu from "../components/HidingMenu";
import withOptionsForm from "../site-components/withOptionsForm";
import SourceContainer from "../components/SourceContainer";

class MenusPage extends Component {
    render(){
        return (
            <Page>
                <h2>Menus</h2>
                <hr/>
                {this.props.renderForm({})}
                <SourceContainer>
                    <Menu
                        className={`vertical-sm inline-sm ${this.props.options.className} mb-7`}
                        {...this.props.options}
                    >
                        <a href="#page">Item 1</a>
                        <a href="#page">Item 2</a>
                        <a href="#page">Item 3</a>
                        <a href="#page">Item 4</a>
                    </Menu>
                </SourceContainer>
                <h2 className="mt-30">Nested Menus</h2>
                <SourceContainer>
                    <Menu className={`vertical-sm secondary mb-7`}>
                        <a href="#page">Item 1</a>
                        <a href="#page">Item 2</a>
                        <a href="#page">Item 3</a>
                        <a href="#page">Item 4</a>
                        <Menu right className={`vertical-sm`}>
                            <a href="#page">Item 1</a>
                            <a href="#page">Item 2</a>
                            <a href="#page">Item 3</a>
                            <a href="#page">Item 4</a>
                        </Menu>
                    </Menu>
                </SourceContainer>
                <h2 className="mt-30">Hiding Menu</h2>
                <SourceContainer>
                    <HidingMenu>
                        <a href="#page">Item 1</a>
                        <a href="#page">Item 2</a>
                        <a href="#page">Item 3</a>
                        <a href="#page">Item 4</a>
                    </HidingMenu>
                </SourceContainer>
            </Page>
        );
    }
}

export default withOptionsForm({
    className: "primary",
    loading: false,
    vertical: false,
    inline: false,
    right: false,
    center: false,
    fixed: false,
    light: false,
    dark: false,
    glass: false,
    segment: false,
    hero: false,
    inset: false
})(MenusPage);