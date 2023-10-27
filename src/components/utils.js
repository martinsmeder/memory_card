export function getRandomPhotos(arr) {
  let randomPhotos = [];
  for (let i = 0; randomPhotos.length < 6; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    if (!randomPhotos.includes(item)) randomPhotos.push(item);
  }
  return randomPhotos;
}

export function updateClicks(arr, item) {
  const itemCopy = { ...item, clicks: item.clicks + 1 };
  return arr.map((photo) =>
    photo.title === itemCopy.title ? itemCopy : photo
  );
}

export function resetAllClicks(arr) {
  // Copy the original objects to prevent mutating them, which will cause a crash
  return arr.map((item) => ({ ...item, clicks: 0 }));
}

export function isNotClickedTwice(item) {
  return item.clicks < 2;
}

export function isNotClicked(item) {
  return item.clicks < 1;
}
