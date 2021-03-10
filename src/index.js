import React from "react"
import ReactDOM, { render }  from "react-dom"
import App from "./component/colorOrganizer/App"
import colors from "./data/color.json"
// import Menu from './component/Menu'
// data from "./data/data.json"

//import StarRating from './component/StarRating/StarRating'

window.React = React

ReactDOM.render(
    <App colors = {colors} />,
    document.getElementById("react-container")
)