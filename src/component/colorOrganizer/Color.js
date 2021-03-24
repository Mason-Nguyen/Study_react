import StarRating from "./StarRating_noState"
import  "../../stylesheets/menu.css"

const Color = ({title, color, rating = 0, onRemove=f=>f, onRate=f=>f}) => (
    <section>
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div className = 'color' style = {{backgroundColor: color}}></div>
        <div>
            <StarRating starsSelected = {rating} onRate={onRate}/>
        </div>
    </section>
)

export default Color