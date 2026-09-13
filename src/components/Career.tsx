import "./styles/Career.css";
import { EDUCATION, EXPERIENCE } from "../data/portfolioData";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {[...EXPERIENCE, ...EDUCATION].map((item) => {
            const isExperience = "role" in item;
            const role = isExperience ? item.role : item.degree;
            const company = isExperience ? item.company : item.institution;
            const period = isExperience ? item.period : item.period;
            const description = isExperience ? item.description : item.field;
            return (
              <div className="career-info-box" key={role}>
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>{role}</h4>
                    <h5>{company}</h5>
                  </div>
                  <h3>{period}</h3>
                </div>
                <p>{description}</p>
                   <div className="career-highlights">
                     {item.highlights.map((highlight) => (
                       <span key={highlight}>{highlight}</span>
                     ))}
                   </div>
                   {isExperience && (
                     <p className="career-tech">{item.technologies.join(" · ")}</p>
                   )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Career;
