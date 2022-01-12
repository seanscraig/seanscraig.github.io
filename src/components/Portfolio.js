import image1 from "../assets/images/book-search-engine.png";
import image2 from "../assets/images/pwa-budget-tracker.png";
import image3 from "../assets/images/workout-tracker.png";
import image4 from "../assets/images/project-2-screen-shot.png";
import image5 from "../assets/images/tech-blog-screen-shot.png";
import image6 from "../assets/images/note-taker-screen-shot.png";
import image7 from "../assets/images/project-1-screen-shot.png";
import image8 from "../assets/images/weather-dashboard.png";
import image9 from "../assets/images/day-planner.png";
const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Book Search Engine",
      tech: "MERN Stack",
      image: image1,
      link: "https://sean-book-search.herokuapp.com/",
    },
    {
      id: 2,
      title: "PWA Budget Tracker",
      tech: "MERN Stack",
      image: image2,
      link: "https://sean-pwa-budget-tracker.herokuapp.com/",
    },
    {
      id: 3,
      title: "Workout Tracker",
      tech: "MERN Stack",
      image: image3,
      link: "https://sean-workout-tracker.herokuapp.com/",
    },
    {
      id: 4,
      title: "Video Game Database",
      tech: "Node.js/Sequelize/Express/Handlebars",
      image: image4,
      link: "https://vast-lake-35863.herokuapp.com/",
    },
    {
      id: 5,
      title: "Tech Blog",
      tech: "Node.js/Sequelize/Express/Handlebars",
      image: image5,
      link: "http://sean-tech-blog.herokuapp.com/",
    },
    {
      id: 6,
      title: "Note Taker",
      tech: "Node.js/Express/JavaScript/HTML/CSS",
      image: image6,
      link: "https://stark-ridge-83519.herokuapp.com",
    },
    {
      id: 7,
      title: "Nonprofit Career Planner",
      tech: "JavaScript/ProPublica API/HTML/CSS",
      image: image7,
      link: "https://sthompsonchicago.github.io/Nonprofit-Career-Planner/",
    },
    {
      id: 8,
      title: "Weather Dashboard",
      tech: "JavaScript/HTML/CSS",
      image: image8,
      link: "https://seanscraig.github.io/weather-dashboard/",
    },
    {
      id: 9,
      title: "Day Planner",
      tech: "JavaScript/HTML/CSS",
      image: image9,
      link: "https://seancraig.me/day-planner/",
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="portfolio">
        {portfolioItems.map((item) => (
          <div className="portfolio-item">
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
