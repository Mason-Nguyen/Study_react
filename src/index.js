import React from "react"
import ReactDOM, { render }  from "react-dom"
import Menu from './component/Menu'
import data from "./data/data.json"

ReactDOM.render(
    <Menu recipes={data} />,
    document.getElementById("react-container")
)