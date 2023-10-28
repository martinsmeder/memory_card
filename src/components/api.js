// import { createClient } from 'pexels';

// function parse(arr) {
//   return arr.map((photo) => {
//     return {
//       title: photo.alt,
//       image: photo.src.large,
//       clicks: 0,
//     };
//   });
// }

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

export default function getImages(numberOfImages, width, height) {
  const images = [];

  for (let i = 0; i < numberOfImages; i++) {
    // Generate a URL for a random image with the specified width and height
    const imageUrl = `https://picsum.photos/${width}/${height}?random=${i}`;

    images.push({ title: `Image ${i + 1}`, image: imageUrl, clicks: 0 });
  }

  return images;
}
