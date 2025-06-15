const images = {
  BLENDER_CHRONICLES: require(`../project/project_0.png`),
  LYRICS_HUNT: require(`../project/project_1.png`),
  GAMES_APP: require(`../project/project_2.png`),
  MOVIE_APP: require(`../project/project_3.png`),
  CLOCKTIME: require("../project/project_4.gif"),
};

export const projects = () => {
  return [
    {
      url: images.BLENDER_CHRONICLES,
      title: "Blender Chronicles",
      link: "https://blender-chronicles.vercel.app/",
      info: "A visual showcase featuring stylized 3D renderings and design concepts",
    },
    {
      url: images.LYRICS_HUNT,
      title: "Lyrics Hunt",
      link: "https://lyrics-hunt.netlify.app",
      info: "Find lyrics using a music API with simple search features",
    },
    {
      url: images.GAMES_APP,
      title: "Games Hub",
      link: "https://rickyl3aks.github.io/games_app/",
      info: "Browse games via API and view short descriptions instantly",
    },
    {
      url: images.MOVIE_APP,
      title: "Movie App",
      link: "https://rickyl3aks.github.io/movie-app/",
      info: "Discover movie details and ratings from an external API",
    },
    {
      url: images.CLOCKTIME,
      title: "More work",
      link: "https://github.com/rickyl3aks",
      info: "Check out other projects!",
    },
  ];
};
