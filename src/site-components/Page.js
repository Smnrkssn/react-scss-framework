import React from "react";
import {MainMenu} from "./MainMenu";
import Segment from "../components/Segment";

export const Page = ({children, ...props}) => (
    <div id="page" className="columns" {...props}>
        <div className="column-3 p-0 hide-lg">
            <MainMenu className="hide-lg" style={{
                position: "fixed",
                height: "100vh",
                width: "250px",
                overflowY: "auto"
            }}/>
        </div>
        <section className="column">
            <Segment className="wrapper-3">
                {children}
            </Segment>
        </section>
    </div>
);