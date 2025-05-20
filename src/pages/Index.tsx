import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import WidgetAOS from "@/lib/WidgetTransition";
import AvatarAnimation from "@/lib/Avatar";
import { useProjectData } from "@/hooks/use-project-data";
import CustomCursor from "@/lib/CustomCursor";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSkillData } from "@/hooks/use-skill-data";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

import avatarAbout from "../assets/images/about-me-1.png";

const Index = () => {
  const listProject = useProjectData();
  const listSkill = useSkillData();

  const [hoverStack, setHoverStack] = useState(null);

  return (
    <div className="min-h-screen flex flex-col mt-10">
      <section className="flex items-center justify-center gap-4 md:flex-row flex-col">
        <div className="flex-3">
          <WidgetAOS animation="fade-right">
            <h1 className="text-4xl font-bold flex gap-2 flex-wrap items-center md:justify-start justify-center">
              Minh Tâm is
              <TypeAnimation
                sequence={[
                  "Designer",
                  1000,
                  "FrontEnd",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block", color: "#45ffca" }}
                repeat={Infinity}
              />
            </h1>
            <p className="max-w-[465px] min-w-[200px] text-cadet-blue mt-8 text-center md:text-left text-pretty">
              He crafts responsive websites where technologies meet creativity
            </p>
            <Button className="mt-6 md:block hidden" variant="primary">
              Contact me
            </Button>
          </WidgetAOS>
        </div>
        <div className="flex-2">
          <WidgetAOS animation="fade-left">
            <AvatarAnimation />
          </WidgetAOS>
        </div>
      </section>

      <section className="mt-25 flex items-center justify-center">
        <WidgetAOS animation="fade-up">
          <div>
            <div className="relative">
              <div className="relative max-w-2xl border-2 border-cadet-blue p-4 text-center text-2xl font-medium">
                <span>Nothing is Impossible</span>

                {/* Quote Icon Top */}
                <svg
                  className="absolute -top-4"
                  width="42"
                  height="29"
                  viewBox="0 0 42 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="41.472" height="28.704" fill="#2C3036" />
                  <path
                    d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z"
                    fill="#45ffca"
                  />
                </svg>

                {/* Quote Bottom Top */}
                <svg
                  className="absolute -bottom-4 right-4"
                  width="42"
                  height="29"
                  viewBox="0 0 42 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="41.472" height="28.704" fill="#2C3036" />
                  <path
                    d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z"
                    fill="#45ffca"
                  />
                </svg>
              </div>
            </div>
            <div className="flex md:justify-end justify-center">
              <div className="p-4 border-2 border-cadet-blue w-fit border-t-0">
                - Me
              </div>
            </div>
          </div>
        </WidgetAOS>
      </section>

      <section className="mt-25">
        <WidgetAOS animation="fade-up">
          <div>
            <div className="flex justify-between">
              <div className="flex font-medium text-3xl items-center gap-4">
                <div className="flex">
                  <span className="text-turquoise">#</span>
                  <h3>projects</h3>
                </div>
                <svg
                  className="hidden md:block"
                  width="511"
                  height="2"
                  viewBox="0 0 511 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M511 1.5H0V0.5H511V1.5Z"
                    fill="#45ffca"
                  />
                </svg>
              </div>
              {listProject && listProject.length > 0 ? (
                <a href="#" className="flex items-center">
                  View all ~~&gt;
                </a>
              ) : (
                <div></div>
              )}
            </div>
            {listProject && listProject.length > 0 ? (
              <div className="mt-12 grid gap-4 md:grid-cols-3 grid-cols-1">
                {listProject.map((project, index) => (
                  <div key={index} className="border-2 border-cadet-blue h-fit">
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
                            <Button variant="subOutline">Cached {">="}</Button>
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
                  Projects are being updated. Please check back later for
                  awesome showcases!
                </p>
              </div>
            )}
          </div>
        </WidgetAOS>
      </section>

      <section className="mt-25">
        <WidgetAOS animation="fade-up">
          <div>
            <div className="flex justify-between">
              <div className="flex font-medium text-3xl items-center gap-4">
                <div className="flex">
                  <span className="text-turquoise">#</span>
                  <h3>skills</h3>
                </div>
                <svg
                  className="hidden md:block"
                  width="236"
                  height="2"
                  viewBox="0 0 511 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M511 1.5H0V0.5H511V1.5Z"
                    fill="#45ffca"
                  />
                </svg>
              </div>
              {listSkill && listSkill.length > 0 ? (
                <a href="#" className="flex items-center">
                  View all ~~&gt;
                </a>
              ) : (
                <div></div>
              )}
            </div>
            {listSkill && listSkill.length > 0 ? (
              <div className="mt-12 grid md:grid-cols-5 grid-cols-1 gap-14 h-fit">
                <div className="col-span-2 relative min-h-[300px] overflow-hidden  hidden md:block">
                  <svg
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute animate-float-1"
                    style={{ top: "5%", left: "5%" }}
                  >
                    <circle cx="2" cy="2" r="2" fill="#ABB2BF" />
                    <circle cx="16.75" cy="2" r="2" fill="#ABB2BF" />
                    <circle cx="31.5" cy="2" r="2" fill="#ABB2BF" />
                    <circle cx="46.25" cy="2" r="2" fill="#ABB2BF" />
                    <circle cx="61" cy="2" r="2" fill="#ABB2BF" />
                    <circle cx="2" cy="16.75" r="2" fill="#ABB2BF" />
                    <circle cx="16.75" cy="16.75" r="2" fill="#ABB2BF" />
                    <circle cx="31.5" cy="16.75" r="2" fill="#ABB2BF" />
                    <circle cx="46.25" cy="16.75" r="2" fill="#ABB2BF" />
                    <circle cx="61" cy="16.75" r="2" fill="#ABB2BF" />
                    <circle cx="2" cy="31.5" r="2" fill="#ABB2BF" />
                    <circle cx="16.75" cy="31.5" r="2" fill="#ABB2BF" />
                    <circle cx="31.5" cy="31.5" r="2" fill="#ABB2BF" />
                    <circle cx="46.25" cy="31.5" r="2" fill="#ABB2BF" />
                    <circle cx="61" cy="31.5" r="2" fill="#ABB2BF" />
                    <circle cx="2" cy="46.25" r="2" fill="#ABB2BF" />
                    <circle cx="16.75" cy="46.25" r="2" fill="#ABB2BF" />
                    <circle cx="31.5" cy="46.25" r="2" fill="#ABB2BF" />
                    <circle cx="46.25" cy="46.25" r="2" fill="#ABB2BF" />
                    <circle cx="61" cy="46.25" r="2" fill="#ABB2BF" />
                    <circle cx="2" cy="61" r="2" fill="#ABB2BF" />
                    <circle cx="16.75" cy="61" r="2" fill="#ABB2BF" />
                    <circle cx="31.5" cy="61" r="2" fill="#ABB2BF" />
                    <circle cx="46.25" cy="61" r="2" fill="#ABB2BF" />
                    <circle cx="61" cy="61" r="2" fill="#ABB2BF" />
                  </svg>

                  <svg
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute animate-float-2"
                    style={{ top: "15%", right: "10%" }}
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="85"
                      height="85"
                      stroke="#ABB2BF"
                    />
                  </svg>

                  <svg
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute animate-float-3"
                    style={{ bottom: "10%", left: "10%" }}
                  >
                    <circle cx="2" cy="2" r="2" fill="#ABB2BF" />
                    <circle cx="16.75" cy="2" r="2" fill="#ABB2BF" />
                    <circle cx="31.5" cy="2" r="2" fill="#ABB2BF" />
                    <circle cx="46.25" cy="2" r="2" fill="#ABB2BF" />
                    <circle cx="61" cy="2" r="2" fill="#ABB2BF" />
                    <circle cx="2" cy="16.75" r="2" fill="#ABB2BF" />
                    <circle cx="16.75" cy="16.75" r="2" fill="#ABB2BF" />
                    <circle cx="31.5" cy="16.75" r="2" fill="#ABB2BF" />
                    <circle cx="46.25" cy="16.75" r="2" fill="#ABB2BF" />
                    <circle cx="61" cy="16.75" r="2" fill="#ABB2BF" />
                    <circle cx="2" cy="31.5" r="2" fill="#ABB2BF" />
                    <circle cx="16.75" cy="31.5" r="2" fill="#ABB2BF" />
                    <circle cx="31.5" cy="31.5" r="2" fill="#ABB2BF" />
                    <circle cx="46.25" cy="31.5" r="2" fill="#ABB2BF" />
                    <circle cx="61" cy="31.5" r="2" fill="#ABB2BF" />
                    <circle cx="2" cy="46.25" r="2" fill="#ABB2BF" />
                    <circle cx="16.75" cy="46.25" r="2" fill="#ABB2BF" />
                    <circle cx="31.5" cy="46.25" r="2" fill="#ABB2BF" />
                    <circle cx="46.25" cy="46.25" r="2" fill="#ABB2BF" />
                    <circle cx="61" cy="46.25" r="2" fill="#ABB2BF" />
                    <circle cx="2" cy="61" r="2" fill="#ABB2BF" />
                    <circle cx="16.75" cy="61" r="2" fill="#ABB2BF" />
                    <circle cx="31.5" cy="61" r="2" fill="#ABB2BF" />
                    <circle cx="46.25" cy="61" r="2" fill="#ABB2BF" />
                    <circle cx="61" cy="61" r="2" fill="#ABB2BF" />
                  </svg>

                  <svg
                    width="114"
                    height="114"
                    viewBox="0 0 114 114"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute animate-float-4"
                    style={{ top: "25%", left: "30%" }}
                  >
                    <mask id="path-1-inside-1_4_64" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M57.5 0H85.75H114V28.25V56.5V84.75H85.75H57.5V56.5H85.75V28.25H57.5V0Z"
                      />
                    </mask>
                    <path
                      d="M57.5 0V-1H56.5V0H57.5ZM114 0H115V-1H114V0ZM114 84.75V85.75H115V84.75H114ZM57.5 84.75H56.5V85.75H57.5V84.75ZM57.5 56.5V55.5H56.5V56.5H57.5ZM85.75 56.5V57.5H86.75V56.5H85.75ZM85.75 28.25H86.75V27.25H85.75V28.25ZM57.5 28.25H56.5V29.25H57.5V28.25ZM85.75 -1H57.5V1H85.75V-1ZM114 -1H85.75V1H114V-1ZM115 28.25V0H113V28.25H115ZM115 56.5V28.25H113V56.5H115ZM115 84.75V56.5H113V84.75H115ZM85.75 85.75H114V83.75H85.75V85.75ZM85.75 83.75H57.5V85.75H85.75V83.75ZM58.5 84.75V56.5H56.5V84.75H58.5ZM57.5 57.5H85.75V55.5H57.5V57.5ZM84.75 28.25V56.5H86.75V28.25H84.75ZM57.5 29.25H85.75V27.25H57.5V29.25ZM56.5 0V28.25H58.5V0H56.5Z"
                      fill="#45ffca"
                      mask="url(#path-1-inside-1_4_64)"
                    />
                    <mask
                      id="path-3-outside-2_4_64"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="27.2501"
                      width="59"
                      height="87"
                      fill="black"
                    >
                      <rect fill="white" y="27.2501" width="59" height="87" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 28.2501H29.25H57.5V56.5001H29.25V84.7501H57.5V113H29.25H1V84.7501V56.5001V28.2501Z"
                      />
                    </mask>
                    <path
                      d="M1 28.2501V27.2501H0V28.2501H1ZM57.5 28.2501H58.5V27.2501H57.5V28.2501ZM57.5 56.5001V57.5001H58.5V56.5001H57.5ZM29.25 56.5001V55.5001H28.25V56.5001H29.25ZM29.25 84.7501H28.25V85.7501H29.25V84.7501ZM57.5 84.7501H58.5V83.7501H57.5V84.7501ZM57.5 113V114H58.5V113H57.5ZM1 113H0V114H1V113ZM29.25 27.2501H1V29.2501H29.25V27.2501ZM57.5 27.2501H29.25V29.2501H57.5V27.2501ZM58.5 56.5001V28.2501H56.5V56.5001H58.5ZM29.25 57.5001H57.5V55.5001H29.25V57.5001ZM30.25 84.7501V56.5001H28.25V84.7501H30.25ZM29.25 85.7501H57.5V83.7501H29.25V85.7501ZM56.5 84.7501V113H58.5V84.7501H56.5ZM57.5 112H29.25V114H57.5V112ZM1 114H29.25V112H1V114ZM0 84.7501V113H2V84.7501H0ZM0 56.5001V84.7501H2V56.5001H0ZM0 28.2501V56.5001H2V28.2501H0Z"
                      fill="#45ffca"
                      mask="url(#path-3-outside-2_4_64)"
                    />
                  </svg>

                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute animate-float-5"
                    style={{ bottom: "15%", right: "15%" }}
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="51"
                      height="51"
                      stroke="#ABB2BF"
                    />
                  </svg>
                </div>
                <div className="col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    {listSkill.map((skill, index) => (
                      <div
                        className="h-fit border-2 border-cadet-blue"
                        key={index}
                      >
                        <div className="font-semibold p-2 border-b-2 border-cadet-blue">
                          {skill.categoryName}
                        </div>
                        <div className="p-2 text-cadet-blue gap-2 flex flex-wrap">
                          {skill.listStackOfCategory.map((stack, index) => (
                            <div key={index}>{stack}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                  Skills are being updated. Please check back later for awesome
                  showcases!
                </p>
              </div>
            )}
          </div>
        </WidgetAOS>
      </section>

      <section className="mt-25">
        <WidgetAOS animation="fade-up">
          <div>
            <div className="flex justify-between">
              <div className="flex font-medium text-3xl items-center gap-4">
                <div className="flex">
                  <span className="text-turquoise">#</span>
                  <h3>about-me</h3>
                </div>
                <svg
                  className="hidden md:block"
                  width="236"
                  height="2"
                  viewBox="0 0 511 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M511 1.5H0V0.5H511V1.5Z"
                    fill="#45ffca"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-6 flex flex-col md:flex-row gap-14 items-center">
              <div className="flex-1">
                <div className="text-cadet-blue">
                  Hello, i’m Minh Tam!
                  <br />
                  <br />
                  I’m a self-taught front-end developer based in Nha Trang, Viet Nam.
                  I can develop responsive websites from scratch and raise them
                  into modern user-friendly web experiences.
                  <br />
                  <br />
                  Transforming my creativity and knowledge into a websites has
                  been my passion for over a year. I have been helping various
                  clients to establish their presence online. I always strive to
                  learn about the newest technologies and frameworks.
                </div>
                <div className="mt-7">
                  <Button variant="primary">Read more -&gt;</Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center relative flex-1">
                <img
                  src={avatarAbout}
                  alt="about-me"
                  width={210}
                  height={210}
                  className="object-cover"
                />

                {/* Animation */}
                <svg
                  className="absolute animate-float-1 top-0 left-1/6"
                  width="84"
                  height="84"
                  viewBox="0 0 84 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2" cy="2" r="2" fill="#ABB2BF" />
                  <circle cx="22" cy="2" r="2" fill="#ABB2BF" />
                  <circle cx="42" cy="2" r="2" fill="#ABB2BF" />
                  <circle cx="62" cy="2" r="2" fill="#ABB2BF" />
                  <circle cx="82" cy="2" r="2" fill="#ABB2BF" />
                  <circle cx="2" cy="22" r="2" fill="#ABB2BF" />
                  <circle cx="22" cy="22" r="2" fill="#ABB2BF" />
                  <circle cx="42" cy="22" r="2" fill="#ABB2BF" />
                  <circle cx="62" cy="22" r="2" fill="#ABB2BF" />
                  <circle cx="82" cy="22" r="2" fill="#ABB2BF" />
                  <circle cx="2" cy="42" r="2" fill="#ABB2BF" />
                  <circle cx="22" cy="42" r="2" fill="#ABB2BF" />
                  <circle cx="42" cy="42" r="2" fill="#ABB2BF" />
                  <circle cx="62" cy="42" r="2" fill="#ABB2BF" />
                  <circle cx="82" cy="42" r="2" fill="#ABB2BF" />
                  <circle cx="2" cy="62" r="2" fill="#ABB2BF" />
                  <circle cx="22" cy="62" r="2" fill="#ABB2BF" />
                  <circle cx="42" cy="62" r="2" fill="#ABB2BF" />
                  <circle cx="62" cy="62" r="2" fill="#ABB2BF" />
                  <circle cx="82" cy="62" r="2" fill="#ABB2BF" />
                  <circle cx="2" cy="82" r="2" fill="#ABB2BF" />
                  <circle cx="22" cy="82" r="2" fill="#ABB2BF" />
                  <circle cx="42" cy="82" r="2" fill="#ABB2BF" />
                  <circle cx="62" cy="82" r="2" fill="#ABB2BF" />
                  <circle cx="82" cy="82" r="2" fill="#ABB2BF" />
                </svg>

                <svg
                  className="absolute animate-float-2 bottom-10 left-2/3"
                  width="104"
                  height="56"
                  viewBox="0 0 104 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2" cy="2" r="2" fill="#ABB2BF" />
                  <circle cx="27" cy="2" r="2" fill="#ABB2BF" />
                  <circle cx="52" cy="2" r="2" fill="#ABB2BF" />
                  <circle cx="77" cy="2" r="2" fill="#ABB2BF" />
                  <circle cx="102" cy="2" r="2" fill="#ABB2BF" />
                  <circle cx="2" cy="19.3333" r="2" fill="#ABB2BF" />
                  <circle cx="27" cy="19.3333" r="2" fill="#ABB2BF" />
                  <circle cx="52" cy="19.3333" r="2" fill="#ABB2BF" />
                  <circle cx="77" cy="19.3333" r="2" fill="#ABB2BF" />
                  <circle cx="102" cy="19.3333" r="2" fill="#ABB2BF" />
                  <circle cx="2" cy="36.6667" r="2" fill="#ABB2BF" />
                  <circle cx="27" cy="36.6667" r="2" fill="#ABB2BF" />
                  <circle cx="52" cy="36.6667" r="2" fill="#ABB2BF" />
                  <circle cx="77" cy="36.6667" r="2" fill="#ABB2BF" />
                  <circle cx="102" cy="36.6667" r="2" fill="#ABB2BF" />
                  <circle cx="2" cy="54" r="2" fill="#ABB2BF" />
                  <circle cx="27" cy="54" r="2" fill="#ABB2BF" />
                  <circle cx="52" cy="54" r="2" fill="#ABB2BF" />
                  <circle cx="77" cy="54" r="2" fill="#ABB2BF" />
                  <circle cx="102" cy="54" r="2" fill="#ABB2BF" />
                </svg>

                <svg
                  className="absolute animate-float-3 -top-4 right-20"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="51"
                    height="51"
                    stroke="#ABB2BF"
                  />
                </svg>
              </div>
            </div>
          </div>
        </WidgetAOS>
      </section>

      <section className="mt-25 mb-36">
        <WidgetAOS animation="fade-up">
          <div>
            <div className="flex justify-between">
              <div className="flex font-medium text-3xl items-center gap-4">
                <div className="flex">
                  <span className="text-turquoise">#</span>
                  <h3>contacts</h3>
                </div>
                <svg
                  className="hidden md:block"
                  width="236"
                  height="2"
                  viewBox="0 0 511 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M511 1.5H0V0.5H511V1.5Z"
                    fill="#45ffca"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-11">
              <div className="flex flex-col md:flex-row md:gap-60 gap-5">
                <div className="flex-1 text-cadet-blue text-center md:text-left">
                  I’m interested in freelance opportunities. However, if you
                  have other request or question, don’t hesitate to contact me
                </div>
                <div className="min-w-52 max-w-96 border-2 border-cadet-blue p-4 mx-auto md:mx-0">
                    <div className="font-semibold">Message me here</div>
                    <div className="mt-4 text-cadet-blue gap-y-2">
                        <div className="gap-1.5 flex items-center">
                            <MdLocationOn size={20} />
                            <span>Nha Trang, Viet Nam</span>
                        </div>
                        <div className="gap-1.5 flex items-center">
                            <MdPhone size={20} />
                            <a href="tel:+84903496008">+84 903 496 008</a>
                        </div>
                        <div className="gap-1.5 flex items-center">
                            <MdEmail size={20} />
                            <a href="mailto:tam.hoang.developer@gmail.com">tam.hoang.developer@gmail.com</a>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </WidgetAOS>
      </section>

      <CustomCursor stack={hoverStack} />
    </div>
  );
};

export default Index;
