export const pathImageStabilization = pathImage => {
  if (!pathImage) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
  }

  if (pathImage[0] === '/') {
    return `https://image.tmdb.org/t/p/w500${pathImage}`;
  }

  return `https://image.tmdb.org/t/p/w500/${pathImage}`;
};
