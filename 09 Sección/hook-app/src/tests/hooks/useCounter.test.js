import {renderHook, act} from '@testing-library/react-hooks';
import {useCounter} from '../../hooks/useCounter';
describe('Debe de tener el counter en 100',()=>{
    test('Counter',()=>{
        const {result} = renderHook(()=> useCounter(100));

        expect(result.current.counter).toBe(100);


    });
    test('Debe de incrementar el counter en 100',()=>{
        const {result} = renderHook(()=> useCounter(100));
        const {increment} = result.current;
        act( ()=>{
            increment();
        });
        const {counter} = result.current;
        expect(counter).toBe(101);
    });
    test('Debe de decrementar el counter en 100',()=>{
        const {result} = renderHook(()=> useCounter(100));
        const {decrement} = result.current;
        act( ()=>{
            decrement();
        });
        const {counter} = result.current;
        expect(counter).toBe(99);
    });
    test('Debe de resetear el valor por defecto',()=>{
        const {result} = renderHook(()=> useCounter(100));
        const {decrement, reset} = result.current;
        act( ()=>{
            decrement();
            reset();
        });
        const {counter} = result.current;
        expect(counter).toBe(100);
    });
})