import favoriteMovies from './assets/favoriteMovies.png';
import imdbImage from './assets/imdbDataBase.png'; 
import calculator from './assets/calculator.png'; 

export const projectsData = (translations) => [
  {
    title: "Favorite Movies",
    image: favoriteMovies,
    description: translations.projectDescriptionOne,
    technologies: ["react", "redux", "axios"],
    githubLink: "https://github.com/tevfiksosyal/my-repository",
    viewSiteLink: "https://my-repository-one-zeta.vercel.app/"
  },
  {
    title: "IMDB Database",
    image: imdbImage,
    description: translations.projectDescriptionTwo,
    technologies: ["react", "redux", "axios"],
    githubLink: "https://github.com/tevfiksosyal/fsweb-s10g2-redux-filmler-solution",
    viewSiteLink: "https://fsweb-s10g2-redux-filmler-solution-48h4.vercel.app/movies"
  },
  {
    title: "calculator",
    image: calculator,
    description: translations.projectDescriptionThree,
    technologies: ["react", "redux", "axios"],
    githubLink: "https://github.com/tevfiksosyal/basiccalculator",
    viewSiteLink: "https://basiccalculator-psi.vercel.app/"
  }
];






