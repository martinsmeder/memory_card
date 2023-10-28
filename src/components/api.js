// import { createClient } from 'pexels';

function parse(arr) {
  return arr.map((image) => {
    return {
      id: image.id,
      image: image.webformatURL,
      clicks: 0,
    };
  });
}

// function removeDuplicates(arr) {
//   const titles = [];
//   return arr.filter((item) => {
//     if (!titles.includes(item.title)) {
//       titles.push(item.title);
//       return true;
//     }
//     return false;
//   });
// }

// export default function getPhotos(query, orientation) {
//   const apiKey = 'vJLwQWKyEUXijSGq9mdr0doBLdNVLV5VWkjarRO4stbszvCtcwvuIzX9';
//   const client = createClient(apiKey);

//   return client.photos
//     .search({ query, orientation, per_page: 50 })
//     .then((response) => parse(response.photos))
//     .then((parsed) => removeDuplicates(parsed));
// }

export default function getImages() {
  const url = 'https://pixabay.com/api/';
  const apiKey = '40327956-473659aa65f45e8ac7c0071df';
  const q = 'cars';
  const orientation = 'horizontal';
  const perPage = 50;

  return fetch(
    `${url}?key=${apiKey}&q=${q}&orientation=${orientation}&per_page=${perPage}`
  )
    .then((response) => response.json())
    .then((images) => parse(images.hits));
}
