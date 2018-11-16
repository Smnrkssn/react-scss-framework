import React from "react";
import {colors} from "../services/colors";

export const ColorDropdown = (props) => (
    <select {...props}>
        {colors.map((color, i) => (
            <option value={color} key={i}>{color}</option>
        ))}
    </select>
);