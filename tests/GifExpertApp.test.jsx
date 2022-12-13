import { render, screen, fireEvent } from "@testing-library/react";
import {GifExpertApp} from '../src/GifExpertApp';

describe('Pruebas en GifExpertApp', () => { 
    test('Verifica onAddCategory', () => { 
        render(<GifExpertApp/>)
        //screen.debug();

        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); 
    
        fireEvent.input(input, { target: { value: 'Dragon Ball'} });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: 'Demon Slayer' } });
        fireEvent.submit(form);

        //screen.debug();
        // Se espera tres porque comienza siempre con One Punch
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3);
    });
});