function parse(arr) {
  return arr
    .filter((image) => image.id !== 1941336 && image.id !== 4025379)
    .map((image) => {
      return {
        id: image.id,
        image: image.webformatURL,
        clicks: 0,
      };
    });
}

export default function getImages(q, orientation) {
  const url = 'https://pixabay.com/api/';
  const apiKey = '40327956-473659aa65f45e8ac7c0071df';
  const perPage = 50;

  return fetch(
    `${url}?key=${apiKey}&q=${q}&orientation=${orientation}&per_page=${perPage}`
  )
    .then((response) => response.json())
    .then((images) => parse(images.hits));
}
