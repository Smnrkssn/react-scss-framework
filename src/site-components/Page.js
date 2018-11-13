import React from "react";
import MainMenu from "./MainMenu";
import Segment from "../components/Segment";

export const Page = ({children, ...props}) => (
    <div id="page" {...props}>
        <div className="columns block-md">
            <MainMenu/>
            <div className="column">
                <Segment>
                    {children}
                </Segment>
            </div>
        </div>
    </div>
);