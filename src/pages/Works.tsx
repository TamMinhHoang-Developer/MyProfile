import { Button } from "@/components/ui/button";
import { useCompleteProjectData } from "@/hooks/use-complete-project";
import { useSmallProjectData } from "@/hooks/use-small-project";
import CustomCursor from "@/lib/CustomCursor";
import WidgetAOS from "@/lib/WidgetTransition";
import { useState } from "react";
import { Link } from "react-router-dom";

const Works = () => {
  const listSmallProject = useSmallProjectData();
  const listCompleteProject = useCompleteProjectData();

  const [hoverStack, setHoverStack] = useState(null);

  return (
    <div className="min-h-screen flex flex-col mt-10">
      <section role="header">
        <WidgetAOS animation="fade-up">
          <div className="flex font-semibold text-[32px]">
            <span className="text-turquoise">/</span>
            <h3>projects</h3>
          </div>
          <p className="text-base mt-3.5">List of my projects</p>
        </WidgetAOS>
      </section>

      <section className="mt-16">
        <WidgetAOS animation="fade-up">
          <div>
            <div className="flex font-medium text-[32px]">
              <span className="text-turquoise">#</span>
              <h3>complete-apps</h3>
            </div>
            <div className="mt-12">
              {listCompleteProject && listCompleteProject.length > 0 ? (
                <div className="mt-12 grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                  {listCompleteProject.map((project, index) => (
                    <div
                      key={index}
                      className="border-2 border-cadet-blue h-fit"
                    >
                      <div className="relative w-full h-52 border-b-2 border-cadet-blue overflow-hidden">
                        {project.image && project.image != null ? (
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-52 object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <svg
                              width="48"
                              height="48"
                              fill="none"
                              className="mb-2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                                fill="#45ffca"
                              />
                            </svg>
                            <span className="text-turquoise font-bold">
                              No Image
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="border-b-2 border-cadet-blue p-2 flex gap-2 flex-wrap">
                        {project.stack.map((stack, idx) => (
                          <div
                            key={idx}
                            onMouseEnter={() => setHoverStack(stack)}
                            onMouseLeave={() => setHoverStack(null)}
                            className="relative z-10 text-cadet-blue"
                            style={{
                              cursor: hoverStack === stack ? "none" : "pointer",
                            }}
                          >
                            {stack}
                          </div>
                        ))}
                      </div>
                      <div className="p-4 flex flex-col gap-y-4">
                        <h3 className="font-medium text-2xl">{project.name}</h3>
                        <div className="text-base text-cadet-blue">
                          {project.description}
                        </div>
                        <div className="flex gap-4 items-center">
                          {project.liveUrl && (
                            <Link to={project.liveUrl}>
                              <Button variant="primary">Live {"<~>"}</Button>
                            </Link>
                          )}
                          {project.cachedUrl && (
                            <Link to={project.cachedUrl}>
                              <Button variant="subOutline">
                                Cached {">="}
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-12 flex flex-col items-center justify-center py-16">
                  <svg
                    className="mb-4 animate-bounce"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                      fill="#45ffca"
                    />
                  </svg>
                  <h4 className="text-2xl font-bold text-turquoise mb-2">
                    Coming Soon
                  </h4>
                  <p className="text-cadet-blue text-lg text-center max-w-md">
                    Complete Projects are being updated. Please check back later
                    for awesome showcases!
                  </p>
                </div>
              )}
            </div>
          </div>
        </WidgetAOS>
      </section>

      <section className="mt-20 mb-44">
        <WidgetAOS animation="fade-up">
          <div>
            <div className="flex font-medium text-[32px]">
              <span className="text-turquoise">#</span>
              <h3>small-projects</h3>
            </div>
            <div className="mt-12">
              {listSmallProject && listSmallProject.length > 0 ? (
                <div className="mt-12 grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                  {listSmallProject.map((project, index) => (
                    <div
                      key={index}
                      className="border-2 border-cadet-blue h-fit"
                    >
                      <div className="p-2 border-b-2 border-cadet-blue flex gap-2 flex-wrap text-cadet-blue">
                        {project.stack.map((stack, index) => (
                          <div key={index}>{stack}</div>
                        ))}
                      </div>
                      <div className="p-4 flex flex-col gap-y-4">
                        <h3 className="font-medium text-2xl">
                          {project.projectName}
                        </h3>
                        <p className="text-cadet-blue">
                          {project.projectDescription}
                        </p>
                        <div className="flex gap-2">
                          {project.projectLink.map((link, index) => (
                            <a
                              key={index}
                              href={link.socialURL}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button variant="primary">
                                {link.socialName}
                              </Button>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-12 flex flex-col items-center justify-center py-16">
                  <svg
                    className="mb-4 animate-bounce"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                      fill="#45ffca"
                    />
                  </svg>
                  <h4 className="text-2xl font-bold text-turquoise mb-2">
                    Coming Soon
                  </h4>
                  <p className="text-cadet-blue text-lg text-center max-w-md">
                    Small Projects are being updated. Please check back later
                    for awesome showcases!
                  </p>
                </div>
              )}
            </div>
          </div>
        </WidgetAOS>
      </section>

      <CustomCursor stack={hoverStack} />
    </div>
  );
};

export default Works;
