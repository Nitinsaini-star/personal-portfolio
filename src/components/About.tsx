import "./styles/About.css";
import { PROFILE } from "../data/portfolioData";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          {PROFILE.bio} {PROFILE.currentFocus}
        </p>
           <div className="about-stats">
             {PROFILE.stats.map((stat) => (
               <span key={stat.label}>
                 <strong>{stat.value}</strong> {stat.label}
               </span>
             ))}
           </div>
           <p className="para">{PROFILE.careerGoal}</p>
      </div>
    </div>
  );
};

export default About;
