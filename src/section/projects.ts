const images = {
  MEMORY_GAME: require(`../project/project_1.png`),
  WEATHER: require("../project/project_2.png"),
  MOVIE: require("../project/project_3.png"),
  NEWS: require("../project/project_4.png"),
  CLOCKTIME: require("../project/project_5.gif"),
};

export const projects = (): object => {
  return [
    {
      url: images.MEMORY_GAME,
      title: "Memory Game",
      link: "https://rickyl3aks.github.io/Memory-Card-Game/",
      info: "Memory Game | vanilla JS",
    },
    {
      url: images.WEATHER,
      title: "Weather API",
      link: "https://rickyl3aks.github.io/Weather-API/",
      info: "Check the weather | vanilla JS",
    },
    {
      url: images.MOVIE,
      title: "Movie App",
      link: "https://rickyl3aks.github.io/movie-app/",
      info: "Check out movies | react JS",
    },
    {
      url: images.NEWS,
      title: "Free News",
      link: "https://rickyl3aks.github.io/free_news/",
      info: "News | react JS",
    },
    {
      url: images.CLOCKTIME,
      title: "clock",
      link: "https://github.com/rickyl3aks",
      info: "Check out other projects!",
    },
  ];
};
