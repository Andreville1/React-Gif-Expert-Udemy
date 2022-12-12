import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages); // Setea las imagenes recibidas en el arreglo
        setIsLoading(false);
    }

    // Argumentos: Funcion, lista de dependencias
    useEffect(() => { // Funcion
        getImages();
    }, []) // Dependencias, si está vacio quiere decir que el hook solamente se dispara la primera vez que se crea el componente 

    return {
        images: images,
        isLoading: isLoading
    }
}
