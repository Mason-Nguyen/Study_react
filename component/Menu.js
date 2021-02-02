import Recipe from "./Recipe"

const Menu = ({recipes}) => 
    <article>
        <header>
            <h1>Delicious Recipes</h1>
            <div className="recipes">
                { recipes.map((receipe, i) =>
                    <Recipe key={i} {...receipe} />
                )}
            </div>
        </header>
    </article>

    export default Menu
