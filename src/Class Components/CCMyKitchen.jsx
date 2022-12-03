import React, { Component } from 'react'
import FCRecipes from '../Functional Components/FCRecipes'
import recipesArr from '../Data'
import FCRecipe from '../Functional Components/FCRecipe'


export default class CCMyKitchen extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            arr: recipesArr,
            
            counter: recipesArr.length
        })
    }

    getIdToDelFromRecipes = (idToDel) => {
        let newArr = this.state.arr.filter(recipe => recipe.id !== idToDel);
    
        this.setState({arr: newArr})
    }



    render() {
        return (
            <div>
                <FCRecipes arr={this.state.arr} sendIdToDelFromRecipes={this.getIdToDelFromRecipes} />
            </div>
        )
    }
}
