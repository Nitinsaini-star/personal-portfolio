import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { PROJECTS } from "../data/portfolioData";

const Work = () => {
  const projectImages = [
    "/images/food-delivery-system.svg",
    "/images/skilllance.svg",
    "/images/lancly.svg",
    "/images/marketsphere.svg",
    "/images/smart-kirana-store.svg",
    "/images/ai-llm-chatbot.svg",
    "/images/ecommerce-website.svg",
    "/images/blog-application.svg",
    "/images/examly-online-examination.svg",
    "/images/markethub-multi-vendor.svg",
    "/images/cafe-website.svg",
    "/images/driveease-car-rental.svg",
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {PROJECTS.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                    <h3>{project.number}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category} · {project.year}</p>
                  </div>
                </div>
                <h4>{project.tagline}</h4>
                <p>{project.technologies.join(", ")}</p>
                <div className="work-tags">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <WorkImage
                image={projectImages[index]}
                alt={`${project.title} project preview`}
                link={project.githubUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
