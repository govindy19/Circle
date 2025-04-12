import clock from "../assets/svgs/clock.svg";
import bluedot from "../assets/svgs/bluedot.svg";
import screen2 from "../assets/svgs/screen2.svg";
import graph2 from "../assets/svgs/graph2.svg";
import arrow from "../assets/svgs/arrow-blue.svg";
//import screen3 from "../assets/svgs/screen3.svg";

const Courses = () => {
  const courseData = [
    {
      type: "Design",
      title:
        "How to make a quality site in WordPress in 40 hours without experience",
      images: [clock],
      link: "#",
    },
    {
      type: "Programming",
      title:
        "WordPress: How to start in a developer without any basic knowledge",
      images: [screen2],
      link: "#",
    },
    {
      type: "SEO",
      title:
        "Creating dynamic sites with CMS WordPress + SEO for WordPress websites",
      images: [graph2],
      link: "#",
    },
  ];

  return (
    <div className="w-full bg-[url('https://assets.website-files.com/61e57244c283e5456130c457/61e5b01762453649e5ffe2a6_bg_courses.svg')] bg-no-repeat bg-cover bg-fixed bg-bottom top-[200%]">
      <section
        id="course"
        className="flex flex-col justify-center items-center min-h-screen rounded-b-[100px] font-sans text-[#333] px-4"
      >
        <div className="relative z-10 w-full max-w-[1310px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 text-white pt-10">
            <h2 className="text-[32px] md:text-[54px] leading-tight font-normal mb-4 md:mb-0 text-center md:text-left">
              Professional courses <br />
              on creating websites
            </h2>
            <p className="opacity-70 text-[18px] md:text-[22px] max-w-[520px] text-center md:text-left">
              Our courses are complete professional courses of high quality that
              include a set of video lessons, practical and training materials.
            </p>
          </div>

          {/* Course Cards */}
          <div className="flex flex-wrap justify-center -mx-4">
            {courseData.map((course, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-14 flex justify-center"
              >
                <div className="relative flex flex-col justify-between items-start bg-[#f8efe5] rounded-[40px] p-8 min-h-[500px] w-full group overflow-hidden cursor-pointer">
                  {/* Animated circular hover background */}
                  <div className="absolute bottom-0 left-0 w-[100px] h-[100px] bg-white scale-0 group-hover:scale-[5] transition-transform duration-700 ease-in-out origin-bottom-left z-0" />
                  <div className="relative z-10">
                    <h2 className="text-[30px] font-bold underline gap-5">
                      {course.type}
                    </h2>
                    <h3 className="text-[20px] md:text-[24px] leading-[30px] font-bold text-[#333]">
                      {course.title}
                    </h3>
                  </div>
                  <a
                    href={course.link}
                    className="flex items-center gap-2 text-[#0f86a1] text-[18px] md:text-[22px] uppercase tracking-wide relative z-10 group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read more <img src={arrow} alt="arrow" />
                  </a>

                  {/* Illustration and decorative elements */}
                  <div className="absolute right-0 bottom-0 z-10">
                    <img
                      src={course.images[0]}
                      alt="Course Illustration"
                      className="transition-all duration-500"
                    />
                    {/* Only show this purple pill for the first card */}
                    {index === 0 && (
                      <div className="absolute bottom-[54px] right-[68.5px] w-[22px] h-[6px] rounded-full bg-[#9b5c8f] rotate-[-20deg] group-hover:rotate-[15deg] group-hover:bottom-[57px] transition-all duration-300" />
                    )}
                    <div className="absolute top-[34px] right-[20px] w-[4px] h-[4px] bg-black rounded-full group-hover:top-[27px] transition-all duration-500" />
                    <div className="absolute top-0 right-[109px] w-[14px] h-[14px] bg-[#ebc7b5] rounded-full group-hover:top-[-8px] transition-all duration-500" />
                    <img
                      src={bluedot}
                      className="absolute left-[9px] top-[41px] max-w-[18px] group-hover:left-[3px] transition-all duration-500"
                      alt="blue dot"
                    />
                    <div className="absolute top-[200px] right-[200px] w-[12px] h-[12px] border border-black rounded-full group-hover:right-[210px] transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
