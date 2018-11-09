import React from "react";
import {Menu} from "./Menu";

export const Page = ({children, ...props}) => (
    <div className="columns" {...props}>
        <div className="column-4 p-0 hide-md">
            <Menu className="column-4" style={{
                position: "fixed",
                height: "100vh",
                overflowY: "auto"
            }}/>
        </div>
        <section className="column">
            <div className="padder-2">
                {children}
            </div>
        </section>
    </div>
);