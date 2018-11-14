import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {colors} from "../services/colors";
import {Menu} from "../components/Menu";
import HidingMenu from "../components/HidingMenu";

class MenusPage extends Component {
    render(){
        return (
            <Page>
                <h2>Menus</h2>
                <hr/>
                {(["", "gray", ...colors].map((color, i) => (
                    <div key={i}>
                        <Menu className={`vertical-sm inline-sm ${color} mb-7`}>
                            <a href="#page">Item 1</a>
                            <a href="#page">Item 2</a>
                            <a href="#page">Item 3</a>
                            <a href="#page">Item 4</a>
                            <a href="#page">Item 5</a>
                            <a href="#page">Item 6</a>
                            <a href="#page">Item 7</a>
                            <a href="#page">Item 8</a>
                            <a href="#page">Item 9</a>
                            <a href="#page">Item 10</a>
                        </Menu>
                        {(color !== "" && color !== "gray") && (
                            <Menu light className={`vertical-sm inline-sm ${color} mb-7`}>
                                <a href="#page">Item 1</a>
                                <a href="#page">Item 2</a>
                                <a href="#page">Item 3</a>
                                <a href="#page">Item 4</a>
                                <a href="#page">Item 5</a>
                                <a href="#page">Item 6</a>
                                <a href="#page">Item 7</a>
                                <a href="#page">Item 8</a>
                                <a href="#page">Item 9</a>
                                <a href="#page">Item 10</a>
                            </Menu>
                        )}
                    </div>
                )))}
                <h2 className="mt-30">Vertical Menus</h2>
                <Menu vertical className="gray">
                    <a href="#page">Item 1</a>
                    <a href="#page">Item 2</a>
                    <a href="#page">Item 3</a>
                    <a href="#page">Item 4</a>
                    <a href="#page">Item 5</a>
                    <a href="#page">Item 6</a>
                    <a href="#page">Item 7</a>
                    <a href="#page">Item 8</a>
                    <a href="#page">Item 9</a>
                    <a href="#page">Item 10</a>
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

export default MenusPage;