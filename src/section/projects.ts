const images = {
  BLENDER_CHRONICLES: require(`../project/project_0.png`),
  UI_CASE_STUDY: require(`../project/project_1.png`),
  LYRICS_HUNT: require(`../project/project_2.png`),
  GAMES_APP: require(`../project/project_3.png`),
  MOVIE_APP: require(`../project/project_4.png`),
  CLOCKTIME: require("../project/project_5.gif"),
};

export const projects = () => {
  return [
    {
      url: images.BLENDER_CHRONICLES,
      title: "Blender Chronicles",
      link: "https://blender-chronicles.vercel.app/",
      info: "This project is a sleek, interactive portfolio built using Next.js and Tailwind CSS, showcasing a variety of stylized 3D designs I created in Blender. It features a gallery with my latest finished pieces, and a journey page that shares insights, experiments, and reflections on my evolving 3D design skills",
    },
    {
      url: images.UI_CASE_STUDY,
      title: "UI case study",
      link: "https://www.figma.com/proto/rxBaaAwnLbZZmKAx6X8Zgw/project11-prototype?node-id=1-2&starting-point-node-id=1%3A2&t=DpCrX1n1c5Y7vslT-1&scaling=scale-down&content-scaling=fixed",
      info: "As part of a UI design course, I created this project entirely in Figma—from initial wireframes to a fully interactive prototype. The task was to design a flight booking website from scratch, applying key UI techniques such as layout structure, visual hierarchy and consistency",
    },
    {
      url: images.LYRICS_HUNT,
      title: "Lyrics Hunt",
      link: "https://lyrics-hunt.netlify.app",
      info: "Built with Next.js and powered by the Genius lyrics API, this app allows you to quickly search for songs and view their lyrics. Clicking on a song reveals comprehensive artist details and the complete lyrics for an immersive music experience",
    },
    {
      url: images.GAMES_APP,
      title: "Games Hub",
      link: "https://rickyl3aks.github.io/games_app/",
      info: "A React-based app that lets you browse and search games using the RAWG API. Instantly view short descriptions, then click on a game to get detailed information including ratings, release date, and full description",
    },
    {
      url: images.MOVIE_APP,
      title: "Movie App",
      link: "https://rickyl3aks.github.io/movie-app/",
      info: "This application connects to The Movie Database API to provide detailed movie info and ratings. Users can explore movie summaries and scores by searching for any title in the database",
    },
    {
      url: images.CLOCKTIME,
      title: "More work",
      link: "https://github.com/rickyl3aks",
      info: "Check out other projects!",
    },
  ];
};
