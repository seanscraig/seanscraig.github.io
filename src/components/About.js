import image from "../assets/images/IMG_0245-square.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="about-label">
        <img src={image} alt="Sean Craig" />
      </div>
      <div className="about-text">
        <h1>About</h1>
        <p>
          Hello, I'm Sean, I am a full stack developer that is currently
          enrolled in the FullStack Web Development Certificate program at
          Northwestern. Here you can find a few web applications that I have
          made, you can also find the rest of my work on my github page.
        </p>
        <br />
        <p>
          I am from Minnesota, but I currently reside in Chicago. I am currently
          looking for a full time position web development. If you have any
          opportunities available please do not hesitate to send me an email.
        </p>
      </div>
    </div>
  );
};

export default About;
