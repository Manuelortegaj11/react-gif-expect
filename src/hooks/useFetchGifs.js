import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs =(category) =>{
    const [categories,setCategories]= useState([]);
    const [inputValue, setInputValue] = useState('');
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async()=>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
        useEffect(()=>{ 
        getImages();
        },[])

    return {
        images,
        isLoading,
    }
}