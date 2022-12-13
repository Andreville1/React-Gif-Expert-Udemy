import {useState} from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => { // Aqui siempre recibe props
    const [inputValue, setInputValue] = useState(''); //One Punch es valor por defecto
    
    const onInputChange = ({target}) => { // event "event.target.value"
        //console.log(target.value)
        setInputValue(target.value); // Modifica el valor de inputValue
    }

    const onSubmit = (event) => {
        event.preventDefault(); // Previene que la pagina haga refresh
        
        if(inputValue.trim().length <= 1) {
            return;
        }
        // Devuelve el input al padre (onAddCategory)
        onNewCategory(inputValue.trim()); // Deberia ser un solo trim
        //setCategories(categories => [inputValue, ...categories]); // categories=> permite traerse el arreglo original gracias a useState
        
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={(event) => onSubmit(event)} aria-label="form"> {/*Recibe un evento y la pasa por parametro (puede quedar solo onSubmit*/}
                <input 
                    type="text"
                    placeholder="Buscar Gifs"
                    value={inputValue} // Deje indicado el valor por defecto
                    onChange={onInputChange} // (event) => onInputChange(event)
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
  }