import Page18Category from "../Components/Page18Category";
import Pic1 from "../images/page18/Pic1.png";
import Pic2 from "../images/page18/Pic2.png";
import Pic3 from "../images/page18/Pic3.png";
import Pic4 from "../images/page18/Pic4.png";
import Pic5 from "../images/page18/Rectangle 209.png";
import Pic6 from "../images/page18/Rectangle 209-1.png";
import Pic7 from "../images/page18/Rectangle 209-2.png";
import Pic8 from "../images/page18/Rectangle 209-3.png";
import Pic9 from "../images/page18/Pic9.png";
import Pic10 from "../images/page18/Pic10.png";
import Pic11 from "../images/page18/Pic11.png";
import Pic12 from "../images/page18/Pic12.png";
import CourseCategoryPage18 from "../Components/CourseCategoryPage18";
import CurrentRolesPage18 from "../Components/CurrentRolesPage18";
import TrendingCoursesPage18 from "../Components/TrendingCoursesPage18";
import TestimonialPage18 from "../Components/TestimonialPage18";

export default function Page18() {
  return (
    <div className="flex justify-center">
      <div className="min-h-screen font-semibold max-w-5xl">
        {/* Header */}
        <div className="flex justify-center ">
          <div className="flex flex-col items-center space-y-4">
            <h1 className=" text-5xl text-green-700">Why Edfling Courses</h1>
            <h3 className="text-lg text-gray-600/50">
              Edfling is your success Partner
            </h3>
          </div>
        </div>
        {/* Why Edlfing Courses position=true means Image on left and para on right and vice versa  */}
        <div className="mx-6 md:mt-8 space-y-5 space-x-2">
          <Page18Category
            title="Live/Scheduled Classes"
            position={true}
            pic={Pic1}
          />
          <Page18Category
            title="Live Doubt Session or Quick Doubt Solve"
            position={false}
            pic={Pic2}
          />
          <Page18Category
            title="Structured and Targeted Study Material"
            position={true}
            pic={Pic3}
          />
          <Page18Category
            title="Test on Regular Basis for Progress Tracking"
            position={false}
            pic={Pic4}
          />
        </div>
        {/* Course Categories  */}
        <div className="mt-8 md:mt-18">
          {/* Header */}
          <div className="flex flex-col items-center space-y-4">
            <h1 className=" text-5xl text-green-700">Course Categories</h1>
            <h3 className="text-lg text-gray-600/50">
              More Popular Course categories available for you
            </h3>
          </div>
          <div className="flex flex-row items-center justify-center mx-6 mt-8 md:mt-12">
            {/* Courses row1 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <CourseCategoryPage18 text="Design" pic={Pic5} />
              <CourseCategoryPage18 text="Development" pic={Pic6} />
              <CourseCategoryPage18 text="Marketing" pic={Pic7} />
              <CourseCategoryPage18 text="IT/Software" pic={Pic8} />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mx-6  mt-8 md:mt-12">
            {/* Coursess row2 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <CourseCategoryPage18 text="Personal Development" pic={Pic9} />
              <CourseCategoryPage18 text="Business" pic={Pic10} />
              <CourseCategoryPage18 text="Academics" pic={Pic11} />
              <CourseCategoryPage18 text="Music" pic={Pic12} />
            </div>
          </div>
          {/* Explore more button */}
          <div className="flex justify-center items-center mt-8 md:mt-10">
            <button className="p-4 w-36 bg-green-800 rounded-md text-white font-bold hover:bg-green-950 transition duration-150 ease-in-out">
              Explore more
            </button>
          </div>
        </div>
        {/* Current Roles position=true means Image on left and para on right and vice versa */}
        <div className="grid grid-cols-1">
          <CurrentRolesPage18
            title="Become an Instructor"
            button="Instructor"
            position={true} //pic={}
          />
          <CurrentRolesPage18
            title="Become an Teaching Assistant(TA)"
            button="TA"
            position={false}
            // pic={}
          />
          {/* About us component mixed with Become Instructor and TA */}
          <CurrentRolesPage18
            title="About US"
            button="Learn More"
            position={true} //pic={}
          />
        </div>
        {/* Trending Courses */}
        <div className="mt-8 md:mt-18">
          {/* Header */}
          <div className="flex flex-col items-center space-y-4">
            <h1 className=" text-5xl text-green-700">Trending Courses</h1>
            <h3 className="text-lg text-gray-600/50">
              Best and Popular Courses of 2023 is here for you
            </h3>
          </div>
          <TrendingCoursesPage18 />
        </div>
        <div className="mt-8 md:mt-10 flex flex-col justify-center items-center">
          <h1 className=" text-5xl text-green-700">Testimonials</h1>
        </div>
        <div className="flex space-x-2 md:space-x-4 mt-8 md:mt-10">
          <TestimonialPage18 />
          <TestimonialPage18 />
          <TestimonialPage18 />
        </div>
        <div className="mt-44">gap</div>
      </div>
    </div>
  );
}
