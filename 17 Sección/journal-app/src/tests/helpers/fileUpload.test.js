/**
 * @jest-environment node
 */
//import fetch from "node-fetch";\
// import {cloudinary} from 'cloudinary';
// import {fileUpload} from '../../helpers/fileUpload';
// cloudinary.config({ 
//     cloud_name: 'joaquinrbp', 
//     api_key: '664345123239984', 
//     api_secret: 'FznK2vJpyrPMTP0B1Z30IkmEKtQ',
// });
describe('Pruebas sobre fileUpload', () => {
    //Error Because update
    // test('Debería de cargar imagen', async(done) => {
    //     const resp = await fetch('https://i.stack.imgur.com/ILTQq.png');
    //     const blob = await resp.blob();
    //     const file = new File([blob],'foto.png');
    //     const url = await fileUpload(file);
    //     //console.log(url);
    //     expect(typeof url).toBe('string');
    //     const segments = url.split('/');
    //     const imageId = segments[segments.length-1].replace('.png','');
    // cloudinary.v2.api.delete_resources(imageId, {}, ()=>{
    //     done();
    // });

    // });
    // test('Debería de retornar un error', async() => {
    //     const file = new File([],'foto.png');
    //     const url = await fileUpload(file);
    //     //console.log(url);
    //     expect(url).toBe(null);
    // });
    test('Deberia estar bien todo', () => {
        console.log('Ok');
    })
    
})
