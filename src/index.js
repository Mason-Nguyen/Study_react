import React from "react"
import ReactDOM, { render }  from "react-dom"
// import Menu from './component/Menu'
// data from "./data/data.json"

import StarRating from './component/StarRating/StarRating'

window.React = React

ReactDOM.render(
    <StarRating totalStars={(7)} starsSelected={(3)} />,
    document.getElementById("react-container")
)