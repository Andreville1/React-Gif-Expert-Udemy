import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

// Para importaciones, React, Importaciones de terceros, nuestro código que no sean componentes o hooks, el resto del código

export const GifGrid = ({category}) => {
  // use indica que es un hook
  const {images, isLoading} = useFetchGifs(category)
  
  // No se usa class en jsx, sino es className
  return (
    <>
        <h3>{ category }</h3>

        {
          isLoading && (<h2>Cargando...</h2>) // Si isLoading es true, hace lo de la derecha
        }

        <div className="card-grid"> 
          {
              images.map( (image) => (
                <GifItem 
                  key={image.id}
                  { ...image } // Esparce las propiedades de image al hijo
                />
              ))
          }
        </div>
    </>
  )
}
