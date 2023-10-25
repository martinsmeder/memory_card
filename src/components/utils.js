export function getRandomPhotos(arr) {
  let randomPhotos = [];
  for (let i = 0; randomPhotos.length < 6; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    if (!randomPhotos.includes(item)) randomPhotos.push(item);
  }
  return randomPhotos;
}

export function updateClicks(array, item) {
  const itemCopy = { ...item, clicks: item.clicks + 1 };
  console.log(itemCopy);
  return array.map((photo) =>
    photo.title === itemCopy.title ? itemCopy : photo
  );
}
