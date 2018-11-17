import React from "react";
import MainMenu from "./MainMenu";
import Segment from "../components/Segment";

export const Page = ({children, ...props}) => (
    <div id="page" className="columns block-md" {...props}>
        <MainMenu/>
        <div className="column">
            <Segment>
                {children}
            </Segment>
        </div>
    </div>
);