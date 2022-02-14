describe('Pruebbas en el archivo demo.test.js', ()=>{
    
    test('Deben de ser strings iguales', ()=>{
        // const isActive = true;
        // if (isActive) {
        //     throw new Error('No está activo')
        // }
        const mensaje = "Hola mundo";
        const mensaje2= "Hola mundo";
        expect(mensaje).toBe(mensaje2);
    });
});
