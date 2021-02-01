import Ingredident from "./Ingredient"
import Ingredient from  "./Ingredient"

const IngredientList = (list) =>
    <ul className="ingredients">
        {list.map((ingredient, i) =>
            <Ingredient key="i">{...ingredient}</Ingredient>
        )}
    </ul>

export default IngredientList