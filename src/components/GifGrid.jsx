import React, { Fragment, useState, useEffect } from "react";
import {GifItem} from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) =>{
    
    const {images, isLoading} = useFetchGifs(category);

    return(
        <Fragment>
        <h3>{category}</h3>
        {
            isLoading && <h2>Cargando...</h2>
        }
        <div className="card-grid">
                {
                images.map((img)=>(
                <GifItem key={img.id}{...img} />
                ))
                }
        </div>
        </Fragment>
        )
}