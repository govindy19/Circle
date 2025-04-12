import ava1 from "../assets/images/reviews_ava-01.png";
import ava2 from "../assets/images/reviews_ava-02.png";
import ava3 from "../assets/images/reviews_ava-03.png";
import avaspot from "../assets/svgs/ava_spot.svg";
import avaspot2 from "../assets/svgs/ava2-spot.svg";
import avaspot3 from "../assets/svgs/ava-spot3.svg";
import arrow from "../assets/svgs/right-arrow.svg";
//import { Parallax } from "react-scroll-parallax";

const reviewsData = [
  {
    img: ava1,
    spot: avaspot,
    name: "Anna Tyuneva",
    text: `"The course is great! Teachers talks very interesting and accessible. Thank you very much!"`,
    mod: "mod--1",
  },
  {
    img: ava2,
    spot: avaspot2,
    name: "MyKola Dunayev",
    text: `"The course is clear enough. Well explained a lot of practice. I recommend to everyone!"`,
    mod: "mod--2",
  },
  {
    img: ava3,
    spot: avaspot3,
    name: "Nastya Kozarchuk",
    text: `"The training was in one breath. Very accessible courses, everything is very clear and good."`,
    mod: "mod--3",
  },
];

const Reviews = () => {
  return (
    /*
    <div className="relative w-full">
      <Parallax speed = {-20}>


        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 bg-[url('')] bg-fixed">

        </div>
      </Parallax>*/



    <div className="relative bg-[#f8efe5] w-full py-20 px-4">
      <section
        id="reviews"
        className="section mod--reviews flex flex-col items-center text-[#333]"
      >
        <h2 className="text-4xl md:text-5xl font-light font-['Filson Pro'] text-center mb-16">
          Students reviews
        </h2>
        <div className="flex flex-col gap-16 md:flex-row justify-center items-center w-full max-w-6xl">
          {reviewsData.map((review, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-full max-w-sm "
            >
              <div className="relative mb-8 h-[130px] flex justify-center items-center">
                <img
                  src={review.img}
                  alt="avatar"
                  className="w-32 h-32 object-cover rounded-full"
                />
                <img
                  src={review.spot}
                  className={`absolute ${review.mod}`}
                  alt="spot"
                />
                <div
                  className={`absolute ${review.mod} w-2 h-2 bg-black rounded-full top-4 right-1/5`}
                />
                <div
                  className={`absolute ${review.mod} border-2 border-black rounded-full w-6 h-6 top-1 left-0`}
                />
              </div>
              <h3 className="text-xl font-medium mb-4">{review.name}</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-6 mt-16">
          <div className="w-10 h-10 rotate-180 cursor-pointer flex justify-center items-center">
            <img src={arrow} alt="prev" className="w-6 h-6" />
          </div>
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center">
            <img src={arrow} alt="next" className="w-6 h-6" />
          </div>
        </div>
      </section>
    </div>

   // </div>
  );
};

export default Reviews;
