import { applyMiddleware, combineReducers, compose, createStore} from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk'
import { uiReducer } from "../reducers/uiReducer";
import { notesReducer } from "../reducers/notesReducer";

const reducers = combineReducers({
    //Acá tendra la estructura general
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
})
//Compose
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// export const store = createStore(reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
export const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    )

//export const store = createStore(reducers);