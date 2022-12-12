import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

// On significa que esta emitiendo algo

// {} = Exprresion de JavaScript
export const GifExpertApp = () => {
    // No condicionar los hooks
    const [categories, setCategories] = useState(['One Punch']); // categories = arreglo
    // state = estado
    
    const onAddCategory = (NewCategory) => {
        if (categories.includes(NewCategory)) {
            return;
        }

        //categories.push(NewCategory) // NO RECOMENDABLE
        // setCategories(cat => [...categories, 'Valorant'])

        //setCategories([...categories, 'Valorant'])
        setCategories([NewCategory, ...categories]) // Crea un nuevo arreglo
        
        //console.log(NewCategory)
    }
    
    //console.log(categories);

    return (
        // Fragment
        <>
            {/*Titulo*/}
            <h1> GifExpertApp </h1>

            {/*Input*/}
            <AddCategory //Lo que recibe son props 
                onNewCategory={(value) => onAddCategory(value)}
            /> 
            
            {/*Lista (Gifs)*/}

            {/*Gif Item*/}
            { categories.map( (category) => ( // category es lo que retorna
                // () quiere decir que retorna un objeto
                <GifGrid  // Cada vez que hay una nuebva categoría en el arreglo, se crea el componente pero no los anteriores, estos se mantienen
                    key={category} 
                    category={category}
                />
                ))
            }   
        </>
    )
}