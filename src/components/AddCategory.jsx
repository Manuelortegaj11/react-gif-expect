import { useState } from "react";

export const AddCategory = ({onNewCategory}) =>{

    const [inputValue, setInputValue] = useState('');

    const onChange = (e)=>{
        setInputValue(e.target.value);
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    return(
        <form onSubmit={(e)=>onSubmit(e)}>
        <input
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={(e)=>onChange(e)}
         />
        </form>
    );
};