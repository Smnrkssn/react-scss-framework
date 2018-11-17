import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {Menu} from "../components/Menu";
import HidingMenu from "../components/HidingMenu";
import withOptionsForm from "../site-components/withOptionsForm";

class MenusPage extends Component {
    render(){
        return (
            <Page>
                <h2>Menus</h2>
                <hr/>
                {this.props.renderForm({})}
                <Menu
                    className={`vertical-sm inline-sm ${this.props.options.className} mb-7`}
                    {...this.props.options}
                >
                    <a href="#page">Item 1</a>
                    <a href="#page">Item 2</a>
                    <a href="#page">Item 3</a>
                    <a href="#page">Item 4</a>
                </Menu>
                <h2 className="mt-30">Nested Menus</h2>
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
                <h2 className="mt-30">Hiding Menu</h2>
                <HidingMenu>
                    <a href="#page">Item 1</a>
                    <a href="#page">Item 2</a>
                    <a href="#page">Item 3</a>
                    <a href="#page">Item 4</a>
                </HidingMenu>
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
    glass: false,
    segment: false,
    hero: false,
    inset: false
})(MenusPage);