const {response} = require('express');
const {validationResult} = require('express-validator');
const validarCampos = (req,res=response,next)=>{
    //next es una función a llamar al final, si está todo correcto
    //pasa al siguiente middleware 
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
    })
    }
    next();
}
module.exports = {
    validarCampos
}