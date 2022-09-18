export const pathImageStabilization = pathImage => {
  if (!pathImage) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
  }

  if (pathImage.includes('https')) {
    return pathImage.slice(1, pathImage.length);
  }

  if (pathImage[0] === '/') {
    return `https://image.tmdb.org/t/p/w500${pathImage}`;
  }

  if (pathImage.includes('https')) {
    return pathImage.slice(1, pathImage.length);
  }

  return `https://image.tmdb.org/t/p/w500/${pathImage}`;
};
