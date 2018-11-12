import React from "react";
import MainMenu from "./MainMenu";
import Segment from "../components/Segment";

export const Page = ({children, ...props}) => (
    <div id="page" {...props}>
        <div className="columns">
            <MainMenu className="hide-md" style={{width: "250px", minHeight: "100vh"}}/>
            <div className="column padder-2">
                <Segment>
                    {children}
                </Segment>
            </div>
        </div>
    </div>
);