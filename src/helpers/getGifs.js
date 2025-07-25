const getKeys = async function (categoria) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Z18DuHLcL5mtdzjq74idcIMsXMGFXBkm&q=${categoria}&limit=10`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};

export default getKeys;
