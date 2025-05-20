import WidgetAOS from "@/lib/WidgetTransition";
import avatarAbout from "../assets/images/about-me-1.png";
import { useSkillData } from "@/hooks/use-skill-data";

const AboutMe = () => {
  const listSkill = useSkillData();

  return (
    <div className="min-h-screen flex flex-col mt-10">
      <section role="header">
        <WidgetAOS animation="fade-up">
          <div className="flex font-semibold text-[32px]">
            <span className="text-turquoise">/</span>
            <h3>about-me</h3>
          </div>
          <p className="text-base mt-3.5">Who am i?</p>
        </WidgetAOS>
      </section>

      <section className="mt-2">
        <WidgetAOS animation="fade-down">
          <div className="flex flex-col md:flex-row items-center md:gap-20 gap-20">
            <div className="flex-1 md:flex-4">
              Hello, i’m Elias!
              <br />
              <br />
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </div>
            <div className="flex-1 md:flex-2 relative w-full">
              <img
                src={avatarAbout}
                alt="about-me"
                width={210}
                height={210}
                className="object-cover mx-auto"
              />

              {/* Animation */}
              <svg
                className="absolute animate-float-1 -top-10 left-0"
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
                className="absolute animate-float-3 -top-4 right-0"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="0.5" width="51" height="51" stroke="#ABB2BF" />
              </svg>
            </div>
          </div>
        </WidgetAOS>
      </section>

      <section className="mt-20">
        <WidgetAOS animation="fade-down">
          <div className="flex font-semibold text-[32px]">
            <span className="text-turquoise">#</span>
            <h3>skills</h3>
          </div>
          {listSkill && listSkill.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-5 sm:grid-cols-2 gap-4">
              {listSkill.map((skill, index) => (
                <div key={index} className="border-2 border-cadet-blue">
                  <div className="p-2 font-semibold border-b-2 border-cadet-blue">
                    {skill.categoryName}
                  </div>
                  <div className="flex flex-wrap p-2 gap-2">
                    {skill.listStackOfCategory.map((skill, index) => (
                      <div key={index} className="text-cadet-blue">
                        {skill}
                      </div>
                    ))}
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
                Skills are being updated. Please check back later for awesome
                showcases!
              </p>
            </div>
          )}
        </WidgetAOS>
      </section>

      <section className="mt-20 mb-40">
        <WidgetAOS animation="fade-down">
          <div className="flex font-semibold text-[32px]">
            <span className="text-turquoise">#</span>
            <h3>my-fun-facts</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="text-cadet-blue border-2 border-cadet-blue p-2">
                I like winter more than summer
              </div>
              <div className="text-cadet-blue border-2 border-cadet-blue p-2">
                I often bike with my friends
              </div>
              <div className="text-cadet-blue border-2 border-cadet-blue p-2">
                I like <span className="text-white">pizza</span> and{" "}
                <span className="text-white">pasta</span>
              </div>
              <div className="text-cadet-blue border-2 border-cadet-blue p-2">
                My favorite movie is{" "}
                <span className="text-white">The Green Mile</span>
              </div>
              <div className="text-cadet-blue border-2 border-cadet-blue p-2">
                I am still in school
              </div>
              <div className="text-cadet-blue border-2 border-cadet-blue p-2">
                I don’t have any siblings
              </div>
            </div>
            <div className="col-span-1 hidden md:block relative">
              <svg
                className="absolute animate-float-1 -top-10 left-0"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2" r="2" fill="#ABB2BF" />
                <circle cx="6" cy="2" r="2" fill="#ABB2BF" />
                <circle cx="10" cy="2" r="2" fill="#ABB2BF" />
                <circle cx="14" cy="2" r="2" fill="#ABB2BF" />
                <circle cx="2" cy="6" r="2" fill="#ABB2BF" />
                <circle cx="6" cy="6" r="2" fill="#ABB2BF" />
                <circle cx="10" cy="6" r="2" fill="#ABB2BF" />
                <circle cx="14" cy="6" r="2" fill="#ABB2BF" />
                <circle cx="2" cy="10" r="2" fill="#ABB2BF" />
                <circle cx="6" cy="10" r="2" fill="#ABB2BF" />
                <circle cx="10" cy="10" r="2" fill="#ABB2BF" />
                <circle cx="14" cy="10" r="2" fill="#ABB2BF" />
                <circle cx="2" cy="14" r="2" fill="#ABB2BF" />
                <circle cx="6" cy="14" r="2" fill="#ABB2BF" />
                <circle cx="10" cy="14" r="2" fill="#ABB2BF" />
                <circle cx="14" cy="14" r="2" fill="#ABB2BF" />
              </svg>

              <svg
                className="absolute animate-float-2 right-20 top-10"
                width="114"
                height="114"
                viewBox="0 0 114 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_52_1835" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M57.5 0H85.75H114V28.25V56.5V84.75H85.75H57.5V56.5H85.75V28.25H57.5V0Z"
                  />
                </mask>
                <path
                  d="M57.5 0V-1H56.5V0H57.5ZM114 0H115V-1H114V0ZM114 84.75V85.75H115V84.75H114ZM57.5 84.75H56.5V85.75H57.5V84.75ZM57.5 56.5V55.5H56.5V56.5H57.5ZM85.75 56.5V57.5H86.75V56.5H85.75ZM85.75 28.25H86.75V27.25H85.75V28.25ZM57.5 28.25H56.5V29.25H57.5V28.25ZM85.75 -1H57.5V1H85.75V-1ZM114 -1H85.75V1H114V-1ZM115 28.25V0H113V28.25H115ZM115 56.5V28.25H113V56.5H115ZM115 84.75V56.5H113V84.75H115ZM85.75 85.75H114V83.75H85.75V85.75ZM85.75 83.75H57.5V85.75H85.75V83.75ZM58.5 84.75V56.5H56.5V84.75H58.5ZM57.5 57.5H85.75V55.5H57.5V57.5ZM84.75 28.25V56.5H86.75V28.25H84.75ZM57.5 29.25H85.75V27.25H57.5V29.25ZM56.5 0V28.25H58.5V0H56.5Z"
                  fill="#C778DD"
                  mask="url(#path-1-inside-1_52_1835)"
                />
                <mask
                  id="path-3-outside-2_52_1835"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="27.2501"
                  width="59"
                  height="87"
                  fill="black"
                >
                  <rect fill="white" y="27.2501" width="59" height="87" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 28.2501H29.25H57.5V56.5001H29.25V84.7501H57.5V113H29.25H1V84.7501V56.5001V28.2501Z"
                  />
                </mask>
                <path
                  d="M1 28.2501V27.2501H0V28.2501H1ZM57.5 28.2501H58.5V27.2501H57.5V28.2501ZM57.5 56.5001V57.5001H58.5V56.5001H57.5ZM29.25 56.5001V55.5001H28.25V56.5001H29.25ZM29.25 84.7501H28.25V85.7501H29.25V84.7501ZM57.5 84.7501H58.5V83.7501H57.5V84.7501ZM57.5 113V114H58.5V113H57.5ZM1 113H0V114H1V113ZM29.25 27.2501H1V29.2501H29.25V27.2501ZM57.5 27.2501H29.25V29.2501H57.5V27.2501ZM58.5 56.5001V28.2501H56.5V56.5001H58.5ZM29.25 57.5001H57.5V55.5001H29.25V57.5001ZM30.25 84.7501V56.5001H28.25V84.7501H30.25ZM29.25 85.7501H57.5V83.7501H29.25V85.7501ZM56.5 84.7501V113H58.5V84.7501H56.5ZM57.5 112H29.25V114H57.5V112ZM1 114H29.25V112H1V114ZM0 84.7501V113H2V84.7501H0ZM0 56.5001V84.7501H2V56.5001H0ZM0 28.2501V56.5001H2V28.2501H0Z"
                  fill="#C778DD"
                  mask="url(#path-3-outside-2_52_1835)"
                />
              </svg>
            </div>
          </div>
        </WidgetAOS>
      </section>
    </div>
  );
};

export default AboutMe;
