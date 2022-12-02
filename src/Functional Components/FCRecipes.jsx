import React from 'react'
import FCRcipe from './FCRecipe'

export default function FCRecipes(props) {

    const recpies = props.arr.map(recpie =>
        <FCRcipe
            name={recpie.name}
            desc={recpie.desc}
            image={recpie.image} 
            />
    )





    return (
        <div>{recpies}</div>
    )
}
