import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {colors} from "../services/colors";
import {Menu} from "../components/Menu";

class FormsPage extends Component {
    render(){
        return (
            <Page>
                <h2>Menus</h2>
                {(["", "gray", ...colors].map((color, i) => (
                    <Menu key={i} className={`vertical-sm inline-sm ${color} mb-7`}>
                        <a href="#page">Item 1</a>
                        <a href="#page">Item 2</a>
                        <a href="#page">Item 3</a>
                        <a href="#page">Item 4</a>
                    </Menu>
                )))}
                <h2 className="mt-30">Vertical Menus</h2>
                <Menu vertical className="gray">
                    <a href="#page">Item 1</a>
                    <a href="#page">Item 2</a>
                    <a href="#page">Item 3</a>
                    <a href="#page">Item 4</a>
                </Menu>
                <h2 className="mt-30">Inline Menus</h2>
                <div>
                    <Menu inline className={`vertical-sm inline-sm gray mb-7`}>
                        <a href="#page">Item 1</a>
                        <a href="#page">Item 2</a>
                        <a href="#page">Item 3</a>
                        <a href="#page">Item 4</a>
                    </Menu>
                </div>
                <Menu vertical inline className="gray">
                    <a href="#page">Item 1</a>
                    <a href="#page">Item 2</a>
                    <a href="#page">Item 3</a>
                    <a href="#page">Item 4</a>
                </Menu>
            </Page>
        );
    }
}

export default FormsPage;