import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {initStore} from "./redux/store";
import "./sass/index.scss";
import {Router} from "./Router";
import $ from "jquery";

render(
    <Provider store={initStore()}>
        <Router/>
    </Provider>,
    $("#root")[0]
);