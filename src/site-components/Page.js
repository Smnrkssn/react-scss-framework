import React from "react";
import MainMenu from "./MainMenu";
import Segment from "../components/Segment";

export const Page = ({children, ...props}) => (
    <div id="page" className="flex block-md" {...props}>
        <MainMenu/>
        <div className="column w-75 w-100-md">
            <Segment>
                {children}
            </Segment>
        </div>
    </div>
);