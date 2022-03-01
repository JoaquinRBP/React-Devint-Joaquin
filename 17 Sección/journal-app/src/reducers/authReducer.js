import React from 'react'
import { types } from '../types/types'
/* state ={} cuando no se está autenticado
sino state={
        uid:'jasda2wd54a\21w',
        name: 'Joaquin'
    }
*/
const initialState = {
    uid: 123123,
    name: 'Joaquin',
    dir:{
        b:12
    }
}
export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            };
        case types.logout:
            return {};
        default: return state;
    }
}
