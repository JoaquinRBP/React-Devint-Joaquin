const {response} = require('express');
const { validationResult} = require('express-validator');
const crearUsuario = (req,res = response) => {
    
    const {nombre, email, password} = req.body;
    // if(nombre.length <5) {
    //     return res.status(400).json({
    //         ok: false,
    //         msg:'El nombre debe de ser mayor o igual a 5 letras'
    //     })
    // }

    res.status(201).json(
        {
            ok: true,
            msg:'register',
            nombre,
            email,
            password
        }
        ); 
}
const loginUsuario = (req,res=response) => {
    const {email, password} = req.body
    
    
    res.json({
        ok: true,
        msg:'Login',
        email,
        password
    });
}
const revalidarToken = (req,res=response) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
}
module.exports = {
    crearUsuario,
    loginUsuario,
    revalidadToken: revalidarToken,
};