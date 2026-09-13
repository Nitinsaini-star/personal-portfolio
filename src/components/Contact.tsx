import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { GITHUB_REPOS, PROFILE } from "../data/portfolioData";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${PROFILE.email}`} data-cursor="disable">
                {PROFILE.email}
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={PROFILE.github}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
               <h4>GitHub Activity</h4>
               {GITHUB_REPOS.map((repo) => (
                 <a
                   key={repo.name}
                   href={repo.url}
                   target="_blank"
                   rel="noreferrer"
                   data-cursor="disable"
                   className="contact-social"
                 >
                   {repo.name} <MdArrowOutward />
                 </a>
               ))}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{PROFILE.name}</span>
            </h2>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
