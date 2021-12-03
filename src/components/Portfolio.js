import image1 from "../assets/images/project-2-screen-shot.png";
import image2 from "../assets/images/tech-blog-screen-shot.png";
import image3 from "../assets/images/note-taker-screen-shot.png";
import image4 from "../assets/images/project-1-screen-shot.png";
import image5 from "../assets/images/weather-dashboard.png";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Video Game Database",
      tech: "Node.js/Sequelize/Express/Handlebars",
      image: image1,
      link: "https://vast-lake-35863.herokuapp.com/",
    },
    {
      id: 2,
      title: "Tech Blog",
      tech: "Node.js/Sequelize/Express/Handlebars",
      image: image2,
      link: "http://sean-tech-blog.herokuapp.com/",
    },
    {
      id: 3,
      title: "Note Taker",
      tech: "Node.js/Express/JavaScript/HTML/CSS",
      image: image3,
      link: "https://stark-ridge-83519.herokuapp.com",
    },
    {
      id: 4,
      title: "Nonprofit Career Planner",
      tech: "JavaScript/ProPublica API/HTML/CSS",
      image: image4,
      link: "https://sthompsonchicago.github.io/Nonprofit-Career-Planner/",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      tech: "JavaScript/HTML/CSS",
      image: image5,
      link: "https://seanscraig.github.io/weather-dashboard/",
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="portfolio">
        {portfolioItems.map((item) => (
          <a href={item.link}>
            <div >
              <img src={item.image} alt="screenshot" />
              <h3>{item.title}</h3>
              <span>{item.tech}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
