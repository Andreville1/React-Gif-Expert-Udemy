export const getGifs = async(category) => {
    const url = 
    `https://api.giphy.com/v1/gifs/search?api_key=29NLIyhI6407pbqmnTuwUWRIv37tRu3Q&q=${category}&limit=10`
  
    const resp = await fetch(url);
  
    const { data } = await resp.json();
  
    // Reccore el arreglo y devuelve un objeto con las propiedades de la imagen que se desean
    const gifs = data.map(img => ({ 
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    })); // return {}
  
    return gifs;
  }