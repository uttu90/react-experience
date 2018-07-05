export function getImageUrl(imageIndex) {
  return `http://api.adorable.io/avatars/250/${imageIndex}`;
}

export function generateImages() {
  let imageArray = [];
  for (let i = 0; i < 100; i++) {
    imageArray.push(getImageUrl(i));
  }
  // Dummy image to test error
  //imageArray.push('http://dummy-image');
  return imageArray;
}