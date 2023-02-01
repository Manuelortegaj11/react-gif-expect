import React, { Fragment, useState } from 'react';
import { AddCategory, GifGrid } from './components' 

export const GitExpertApp = () => {

    const [categories,setCategories]= useState([]);

    
    const onAddCategory = (newCategory)=>{
       if(categories.includes(newCategory)) return;

        setCategories([newCategory,...categories]);
    }
    return(
    <Fragment>
        <h1>GifExpertApp</h1>
        <AddCategory
            onNewCategory = {(value)=>onAddCategory(value)}
            currentCategories = {categories}
        />
         
        {categories.map(category =>(
            <GifGrid
                key={category}
                category={category}
            />
        ))}

    </Fragment>
    )
}