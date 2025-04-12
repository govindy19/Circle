import cheked from "../assets/svgs/cheked.svg";
import questions_illustr from "../assets/svgs/questions_illustr.svg";
import bg from "../assets/svgs/questions_illustr-bg.svg";
import plane from "../assets/svgs/illustr-plane.svg";

const Questions = () => {
  return (
    <div className="w-full bg-fixed z-10">
      <section className="section mod--questions  bg-[url('https://assets.website-files.com/61e57244c283e5456130c457/61e5b017a63df4c9f19895b4_bg_questions.svg')] flex flex-1 justify-center items-center pt-[100px] pb-[100px] text-white rounded-b-[100px] bg-no-repeat bg-cover bg-bottom bg-fixed">
        <div className="relative z-20 w-full max-w-[1310px] mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          {/* Left column */}
          <div className="flex-1 w-full mb-12 md:mb-0">
            <div className="overflow-hidden">
              <h2 className="text-[44px] mb-10 pt-20 text-start">
                Still have questions?
              </h2>
            </div>
            <div className="overflow-hidden">
              <p className="text-lg md:text-xl max-w-lg text-start">
                Leave a request and we will contact you to help you&nbsp;choose
                the&nbsp;best training&nbsp;format.
              </p>
            </div>
            <div className="w-full max-w-[564px] mt-10">
              <form
                className="flex flex-col gap-4"
                name="wf-form-footer"
                aria-label="footer"
              >
                <div className="relative flex flex-col sm:flex-row items-center">
                  <input
                    type="email"
                    className="w-full h-[70px] px-8 mt-10 border border-white/30 rounded-full bg-transparent text-white placeholder-white text-lg"
                    placeholder="Your email"
                    required
                  />
                  <div className="relative flex items-center justify-center mt-10 sm:mt-0 sm:ml-4 min-w-[185px] h-[70px] rounded-full bg-[#ebc7b5] text-black uppercase font-medium tracking-wider overflow-hidden group cursor-pointer">
                    <span className="z-10">Submit</span>
                    <span className="absolute inset-0 bg-white transition-all duration-500 rounded-full group-hover:clip-path-full clip-path-none"></span>
                    <input
                      type="submit"
                      value="Submit"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className="absolute left-[4.4rem] top-0 flex items-center w-12 pl-2 opacity-0 transition-opacity duration-200">
                      <div className="w-0 transition-all duration-1000 overflow-hidden flex items-center">
                        <img
                          src={cheked}
                          className="w-4 filter invert"
                          alt="check icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="hidden text-center p-5 bg-gray-300 mt-4">
                Thank you! Your submission has been received!
              </div>
              <div className="hidden text-center p-4 bg-red-200 mt-4">
                Oops! Something went wrong while submitting the form.
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="relative">
            <img
              src={questions_illustr}
              className="relative z-10"
              alt="Illustration"
            />
            <div className="absolute right-[106px] bottom-[354px] w-4 h-4 border border-black rounded-full animate-bounce"></div>
            <div className="absolute left-[35px] bottom-[206px] w-5 h-5 rounded-full bg-[#ebc7b5]"></div>
            <div className="absolute left-0 right-0 bottom-0 mx-auto w-auto">
              <img src={bg} alt="Background element" />
            </div>
            <div className="absolute left-[22px] top-[53px] fly-animation ">
              <img src={plane} alt="Plane" />
            </div>
            <div className="absolute left-[95px] bottom-[186px] w-[6px] h-[6px] rounded-full bg-black animate-bounce"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Questions;
