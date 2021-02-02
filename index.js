import React from "react"
import {render} from "react-dom"
import Menu from "./component/Menu"
import data from "./data/data"

window.React = React

render(
    <Menu recipes={data}></Menu>,
    document.getElementById("react-container")
)