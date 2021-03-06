import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2';
import { noteLogout } from "./notes";
export const login = (uid, displayName) =>({
        type: types.login,
        payload: {
            uid,
            displayName
        }
});



export const startLoginEmailPassword = (email, password) =>{
    return (dispatch)=>{
        // setTimeout(()=>{
        //     dispatch(login(123,'Pedro'));
        // },3500);
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user})=>{
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch(e=>{
                dispatch(finishLoading());
                Swal.fire('Error', e.message,'error');
            })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) =>{
    return (dispatch)=>{
        dispatch(startLoading());
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async({user})=>{
            await user.updateProfile({
                displayName: name
            });
            dispatch(
                login(user.uid, user.displayName)
            )
            dispatch(finishLoading());
        })
        .catch( e=>{
            dispatch(finishLoading());
            Swal.fire('Error', e.message,'error');
        })
    }
}
export const startGoogleLogin= () =>{
    return(dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user})=>{
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
};

export const startLogout = () =>{
    return async (dispatch)=>{
        await firebase.auth().signOut();
        dispatch(Logout());
        dispatch(noteLogout());
    }
}
export const Logout = () =>({
    type: types.logout
})