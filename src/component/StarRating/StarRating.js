import {Component} from 'react'
import PropTypes from 'prop-types'
import Star from "./Star"
import  "../../stylesheets/StarRating/Star.css"

export default class StarRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starsSelected: props.starsSelected || 0
        }

        this.change = this.change.bind(this);
    }

    change(starsSelected) {
        this.setState({starsSelected});
    }

    render() {
        const {totalStars} = this.props;
        const {starsSelected} = this.state;

        return(
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) => 
                    <Star key = {i}
                          selected={i<starsSelected}
                          onClick={() => this.change(i+1)}/>
                )}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
}

StarRating.propTypes = {
    totalStars: PropTypes.number
}

StarRating.defautProps = {
    totalStars: 5
}