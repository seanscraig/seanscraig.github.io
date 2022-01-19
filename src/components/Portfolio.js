import { useState } from "react";

import webImage1 from "../assets/images/web/book-search-engine.png";
import webImage2 from "../assets/images/web/pwa-budget-tracker.png";
import webImage3 from "../assets/images/web/workout-tracker.png";
import webImage4 from "../assets/images/web/project-2-screen-shot.png";
import webImage5 from "../assets/images/web/tech-blog-screen-shot.png";
import webImage6 from "../assets/images/web/note-taker-screen-shot.png";
import webImage7 from "../assets/images/web/project-1-screen-shot.png";
import webImage8 from "../assets/images/web/weather-dashboard.png";
import webImage9 from "../assets/images/web/day-planner.png";

import gameImage1 from "../assets/images/games/escape_to_the_oasis.png";
import gameImage2 from "../assets/images/games/LosingMyReligion.png";
import gameImage3 from "../assets/images/games/RepairShop.png";
import gameImage4 from "../assets/images/games/home_forest_splash_screen.png";
import gameImage5 from "../assets/images/games/lonely_virus2.png";

const Portfolio = () => {
  const [show, setShow] = useState(false);

  const webPortfolioItems = [
    {
      id: 1,
      title: "Book Search Engine",
      tech: "MERN Stack",
      image: webImage1,
      link: "https://sean-book-search.herokuapp.com/",
    },
    {
      id: 2,
      title: "PWA Budget Tracker",
      tech: "MERN Stack",
      image: webImage2,
      link: "https://sean-pwa-budget-tracker.herokuapp.com/",
    },
    {
      id: 3,
      title: "Workout Tracker",
      tech: "MERN Stack",
      image: webImage3,
      link: "https://sean-workout-tracker.herokuapp.com/",
    },
    {
      id: 4,
      title: "Video Game Database",
      tech: "Node.js/Sequelize/Express/Handlebars",
      image: webImage4,
      link: "https://vast-lake-35863.herokuapp.com/",
    },
    {
      id: 5,
      title: "Tech Blog",
      tech: "Node.js/Sequelize/Express/Handlebars",
      image: webImage5,
      link: "http://sean-tech-blog.herokuapp.com/",
    },
    {
      id: 6,
      title: "Note Taker",
      tech: "Node.js/Express/JavaScript/HTML/CSS",
      image: webImage6,
      link: "https://stark-ridge-83519.herokuapp.com",
    },
    {
      id: 7,
      title: "Nonprofit Career Planner",
      tech: "JavaScript/ProPublica API/HTML/CSS",
      image: webImage7,
      link: "https://sthompsonchicago.github.io/Nonprofit-Career-Planner/",
    },
    {
      id: 8,
      title: "Weather Dashboard",
      tech: "JavaScript/HTML/CSS",
      image: webImage8,
      link: "https://seanscraig.github.io/weather-dashboard/",
    },
    {
      id: 9,
      title: "Day Planner",
      tech: "JavaScript/HTML/CSS",
      image: webImage9,
      link: "https://seancraig.me/day-planner/",
    },
  ];

  const gamesPortfolioItems = [
    {
      id: 1,
      title: "Escape to the Oasis",
      tech: "IVGDA Virtual Jam",
      image: gameImage1,
      link: "https://suicidepotatoes.itch.io/herd-community",
    },
    {
      id: 2,
      title: "Losing My Religion",
      tech: "Global Game Jam 2021",
      image: gameImage2,
      link: "https://globalgamejam.org/games/losing-my-religion-7",
    },
    {
      id: 3,
      title: "The Repair Shoppe From Hell",
      tech: "Global Game Jam 2020",
      image: gameImage3,
      link: "https://ivgda-chicago.itch.io/the-repair-shoppe-from-hell",
    },
    {
      id: 4,
      title: "A Home in the Forest",
      tech: "Global Game Jam 2019",
      image: gameImage4,
      link: "https://globalgamejam.org/2019/games/home-forest",
    },
    {
      id: 5,
      title: "Life and Times of a Lonely Virus",
      tech: "Global Game Jam 2018",
      image: gameImage5,
      link: "https://globalgamejam.org/2018/games/life-and-times-lonely-virus",
    },
  ];

  const handleChange = (e) => {
    setShow(!show);
  };

  const isShowing = show;

  return (
    <div>
      <div className="portfolio-header">
        <h1>Portfolio</h1>
        <button onClick={handleChange}>
          {isShowing ? "Hide Games" : "Show Games"}
        </button>
      </div>

      <div className="portfolio">
        {isShowing && (
          <>
            {gamesPortfolioItems.map((item) => (
              <div className="game-portfolio-item">
                <a href={item.link}>
                  <img src={item.image} alt="screenshot" />
                  <h3>{item.title}</h3>
                  <span>{item.tech}</span>
                </a>
              </div>
            ))}
          </>
        )}

        {webPortfolioItems.map((item) => (
          <div className="web-portfolio-item">
            <a href={item.link}>
              <img src={item.image} alt="screenshot" />
              <h3>{item.title}</h3>
              <span>{item.tech}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
