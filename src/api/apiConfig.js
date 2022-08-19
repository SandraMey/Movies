const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '5039617074d7b10fd2990d6772523cf0',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;