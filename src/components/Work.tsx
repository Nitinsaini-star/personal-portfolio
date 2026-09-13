import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { PROJECTS } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

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
  ];

  useLayoutEffect(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
  }, []);
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
