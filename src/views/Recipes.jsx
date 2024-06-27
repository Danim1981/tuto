import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import { recipes } from "../data/recipes"

const Recipes = () => {

    const {ide}= useParams();
    const recipe = recipes.find((r)=> r.id ===parseInt(ide))


  return (
    <Container>
        <h1>{recipe.name}</h1>1
        <p>{recipe.details}</p>

    </Container>
  )
}

export default Recipes