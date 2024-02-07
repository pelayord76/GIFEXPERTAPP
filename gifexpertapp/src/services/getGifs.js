export const getGifs = async (category) => {
  //const url = `https://api.giphy.com/v1/gifs/search?api_key=i4qRSpqKS25nyfD1ow95a4rIcRKs5kM4&q=${category}s&limit=10`;
  const url = 'http://localhost:3000/data';
  //fetch es una función para buscar
  const respuesta = await fetch(url);
  const data = await respuesta.json();


  const gifs = data.map(imagen => (
    {
      id: imagen.id,
      title: imagen.title,
      url: imagen.images.downsized.url,
    }
  )

  )
  return gifs;
}