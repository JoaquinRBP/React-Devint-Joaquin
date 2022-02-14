//const getImagenPromesa = () => new Promise((resolve, reject)=>{resolve('https://asjdasjd.gif')});

export const getImagen = async()=>{
    try{
        const api_key = 'Kaxl8iSbP335HhdckRa3UQJ9c2TPnQpf';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
        const {data} = await respuesta.json();
        const {url}=data.images.original;
        return url;
    }catch(error){
        return 'No existe';
    }
}
getImagen();
// peticion
//     .then(resp=> resp.json())
//     .then(({data})=>{
//         const {url} = data.images.original;
//         const img = document.createElement('img');
//         img.src=url;
//         document.body.append(img);
//     })
//     .catch(console.warn)