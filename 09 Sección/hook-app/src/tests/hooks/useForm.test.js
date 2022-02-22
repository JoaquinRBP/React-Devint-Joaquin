import {act, renderHook} from '@testing-library/react-hooks';
import {useForm} from '../../hooks/useForm';

describe('Pruebas sobre useForm',()=>{
    const initialForm = {
        name: 'Joaquin',
        email: 'joaquin@gmail.com'
    }
    test('Carga recibir el form por defecto',()=>{
        const {result} = renderHook(()=> useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;
        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });
    test('Debe de cambiar el valor del formulario(CAMBIAR NOMBRE)',()=>{
        const {result} = renderHook(()=> useForm(initialForm));
        const [,handleInputChange] = result.current;
        act(()=>{
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Joaquin'
                }
            });
        }
        );
        const [formValues] = result.current;
        expect (formValues).toEqual({...initialForm, name:'Joaquin'});
    });
    test('Debe de re-establecer el formulario con RESET',()=>{
        const {result} = renderHook(()=> useForm(initialForm));
        const [,handleInputChange,reset] = result.current;
        act(()=>{
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Joaquin'
                }
            });
            reset();
        }
        );
        const [formValues] = result.current;
        expect (formValues).toEqual({...initialForm, name:'Joaquin'});
    })
})