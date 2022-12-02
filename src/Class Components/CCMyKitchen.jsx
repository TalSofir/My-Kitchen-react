import React, { Component } from 'react'
import FCRecipes from '../Functional Components/FCRecipes'
import recipesArr from '../Data'


export default class CCMyKitchen extends Component {
    constructor(props){
        super(props);
        
        this.state=({
            arr:recipesArr
        })


    }
    render() {
        return (
            <div>
                <FCRecipes arr={this.state.arr} />
            </div>
        )
    }
}
