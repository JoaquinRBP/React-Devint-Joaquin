import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../types/types";

describe('Pruebas en Ui', () => {
    test('Todas las acciones deben de funcionar', () => {
        const action= setError('Ayuda');
        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'Ayuda'
        });
        })
        const removeaction = removeError();
        const startaction = startLoading();
        const finishaction = finishLoading();
        expect(removeaction).toEqual({
            type: types.uiRemoveError,
        })
        expect(startaction).toEqual({
            payload: true,
            type: types.uiStartLoading,
        })
        expect(finishaction).toEqual({
            payload: false,
            type: types.uiFinishLoading,
        })
})