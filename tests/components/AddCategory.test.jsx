import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en AddCategory', () => { 

    // Solo prueba que se haya llenado la caja de texto
    test('Debe cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={() => {}}/>);

        const input = screen.getByRole('textbox');

        // Setea el input seleccionado con su respectivo dato
        fireEvent.input( input, {target: {value: 'Saitama'}} ); // el input provoca el evento
        
        //screen.debug();

        expect(input.value).toBe('Saitama')
    })

    test('Debe llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama'; // Input que quiero ingresar
        
        const onNewCategory = jest.fn(); //jest.function

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox'); //Es una referencia
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value: inputValue}} );
        fireEvent.submit(form);
        //screen.debug();

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe llamar el onNewCategory si el input está vacio', () => {
        // Inicialización
        const onNewCategory = jest.fn(); //jest.function

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');

        // Ejecucción
        fireEvent.submit(form);

        // Verificación
        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});