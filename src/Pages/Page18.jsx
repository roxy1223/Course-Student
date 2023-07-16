import Pic1 from "../Pag18assets/Pic1.png";
import Pic2 from "../Pag18assets/Pic2.png";
import Pic3 from "../Pag18assets/Pic3.png";
import Pic4 from "../Pag18assets/Pic4.png";

export default function Page18() {
  return (
    <div className="flex justify-center">
      <div className="min-h-screen font-semibold max-w-5xl">
        <div className="flex justify-center ">
          <div className="flex flex-col items-center space-y-4">
            <h1 className=" text-5xl text-green-700">Why Edfling Courses</h1>
            <h3 className="text-lg text-gray-600/50">
              Edfling is your success Partner
            </h3>
          </div>
        </div>
        <div className="mx-6 md:mt-10 space-y-5 space-x-2">
          <div className="flex items-center space-x-5">
            <div>
              <img className="" src={Pic1} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl text-green-700">
                Live/scheduled Classes
              </h2>
              <p className="text-sm text-gray-500 ">
                Edflings is a Global training provider based across the world
                that specialises in different different courses related to
                different domain.We provide you the best mentor with best
                courses Edflings is a Global training provider based across the
                world that specialises in different different courses related to
                different domain.We provide you the best mentor with best
                courses.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex flex-col">
              <h2 className="text-2xl text-green-700">
                Live Doubt Sessions or Quick Doubt Solve
              </h2>
              <p className="text-sm text-gray-500 ">
                Edflings is a Global training provider based across the world
                that specialises in different different courses related to
                different domain.We provide you the best mentor with best
                courses Edflings is a Global training provider based across the
                world that specialises in different different courses related to
                different domain.We provide you the best mentor with best
                courses.
              </p>
            </div>
            <div>
              <img src={Pic2} alt="" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div>
              <img src={Pic3} alt="" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl text-green-700">
                Structured and Targeted Study Materials
              </h2>
              <p className="text-sm text-gray-500 ">
                Edflings is a Global training provider based across the world
                that specialises in different different courses related to
                different domain.We provide you the best mentor with best
                courses Edflings is a Global training provider based across the
                world that specialises in different different courses related to
                different domain.We provide you the best mentor with best
                courses.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex flex-col ">
              <h2 className="text-2xl text-green-700">
                Test on Regular Basis for Progress Tracking
              </h2>
              <p className="text-sm text-gray-500 ">
                Edflings is a Global training provider based across the world
                that specialises in different different courses related to
                different domain.We provide you the best mentor with best
                courses Edflings is a Global training provider based across the
                world that specialises in different different courses related to
                different domain.We provide you the best mentor with best
                courses.
              </p>
            </div>
            <div>
              <img src={Pic4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
