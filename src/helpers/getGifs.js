//82.Fetch API: Crear un helper para obtener las imágenes.
export const getGifs = async(category)=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=1tWvP7b2d4SocG1xu2tKcD88WYf4H9p3&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map((img)=>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }));
    console.log(gifs);
    return gifs;
}