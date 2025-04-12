import hand from "../assets/svgs/step_illustr-hand.svg";
import smile from "../assets/svgs/step_illustr-smile.svg";
import lady from "../assets/svgs/lady.svg";
import num1 from "../assets/svgs/step-num1.svg";
import num2 from "../assets/svgs/steps_numb2.svg";
import num3 from "../assets/svgs/step_numb-03.svg";
import arrow1 from "../assets/svgs/steps_arrow.svg";
import arrow2 from "../assets/svgs/steps_arrow2.svg";
import arrow3 from "../assets/svgs/steps_arrow-plane.svg";
import { Parallax } from "react-scroll-parallax";

const stepsData = [
  {
    id: "01",
    title: "Videos from professionals",
    description:
      "Our specialists will help you create any website. With our help, you can handle any task, also you get a personalized consultation.",
    icon: num1,
    arrow: arrow1,
    additionalClasses: "pl-6 pr-6 md:pl-[74px] md:pr-[80px]",
    arrowPosition: "top-[10px] right-0",
  },
  {
    id: "02",
    title: "Practical independent work",
    description:
      "Learn how to organize your website, create engaging content, protect your site, and achieve search engine rankings.",
    icon: num2,
    arrow: arrow2,
    additionalClasses:
      "pl-6 md:ml-[100px] md:pl-[74px] -mb-[100px] md:-mb-[150px]",
    arrowPosition:
      "top-[-120px] md:top-[-170px] right-0 md:right-[470px] transform md:rotate-y-180",
  },
  {
    id: "03",
    title: "Feedback from specialists",
    description:
      "Structure and visualize new knowledge. You send the practical work to the reviewing specialists and receive individual feedback.",
    icon: num3,
    arrow: arrow3,
    additionalClasses:
      "pl-6 pr-6 md:pl-[74px] md:pr-[80px] mt-[100px] md:mt-[150px]",
    arrowPosition: "top-[10px] right-0",
  },
];

const Program = () => {
  return (
    <div className="relative w-full pb-16 bg-[#f8efe5]">
      <section
        id="program"
        className="relative flex flex-col items-center w-full min-h-screen rounded-b-[100px] px-4 sm:px-6 lg:px-8"
      >
        <div className="relative z-[2] w-full max-w-[1310px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
            {/* Illustration on the left */}
            <div className="relative mt-10 lg:mt-[10%] w-full max-w-md">
              <img src={lady} alt="Lady" className="block w-full bg-fixed top-[100%]" />
              <div className="absolute top-[138px] right-[30px] w-[110px] h-[50px] hidden md:block">
                <div className="absolute left-[2px] top-[44px] w-[4px] h-[4px] bg-black rounded-full rotate-[43deg]">
                  <div className="absolute left-[1px] bottom-[1px] w-[1px] h-[40px] bg-[#0f86a1] -z-10 transition-all" />
                </div>
                <div className="absolute left-[35px] top-[9px] w-[4px] h-[4px] bg-black rounded-full rotate-[125deg]">
                  <div className="absolute left-[1px] bottom-[1px] w-[1px] h-[40px] bg-[#0f86a1] -z-10 transition-all" />
                </div>
                <div className="absolute left-[68px] top-[30px] w-[4px] h-[4px] bg-black rounded-full rotate-[51deg]">
                  <div className="absolute left-[1px] bottom-[1px] w-[1px] h-[40px] bg-[#0f86a1] -z-10 transition-all" />
                  <div className="absolute left-[105px] top-[0] w-[4px] h-[4px] bg-black rounded-full rotate-[51deg]" />
                </div>
                <img
                  src={smile}
                  alt="Smile"
                  className="absolute -left-[165px] -top-[72px] z-[1]"
                />
                <img
                  src={hand}
                  alt="Hand"
                  className="absolute -left-[220px] -top-[52px] z-[1]"
                />
              </div>
            </div>

            {/* Syllabus */}
            <Parallax speed={15}>
              <div className="w-full mt-10 lg:mt-0 px-4 sm:px-6 lg:ml-20 ">
                <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[54px] font-light mb-8 sm:mb-10 font-sans">
                  Syllabus of courses
                </h2>
                <ul className="space-y-10 max-w-[560px]">
                  {stepsData.map((step) => (
                    <li
                      key={step.id}
                      className={`relative pl-12 ${step.additionalClasses}`}
                    >
                      {/* Icon + Number */}
                      <div className="absolute top-0 left-0 w-10 h-10 sm:w-12 sm:h-12">
                        <img
                          src={step.icon}
                          className="w-full h-full relative z-0"
                          alt={step.id}
                        />
                        <div className="absolute inset-0 z-10 flex items-center justify-center text-[#f8efe5] font-bold font-sans text-sm sm:text-base">
                          {step.id}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-medium mb-2 sm:mb-4 font-sans">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[rgba(27,27,27,0.7)] leading-6 sm:leading-7 text-sm sm:text-base">
                        {step.description}
                      </p>

                      {/* Arrow (only on md+) */}
                      <div
                        className={`absolute ${step.arrowPosition} hidden md:block`}
                      >
                        <img src={step.arrow} alt={`Arrow ${step.id}`} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Parallax>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;
