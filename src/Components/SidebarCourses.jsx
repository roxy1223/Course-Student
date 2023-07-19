import React from "react";
import Ellipse from "../Utils/Images/Ellipse217.svg";
import ContactCard from "../Utils/Images/ContactCard.svg";
import Bookmarks from "../images/page68/Bookmarks.svg";
import LeaderBoard from "../Utils/Images/LeaderBoard.svg";
import Placed from "../Utils/Images/Placed.svg";
import Doubts from "../Utils/Images/Doubts.svg";
import Events from "../Utils/Images/Events.svg";
import Notes from "../Utils/Images/Notes.svg";
import Certificate from "../Utils/Images/Certificate.svg";
import SideBarBottom1 from "../Utils/Images/SideBarBottom1.png";
import SideBarBottom2 from "../Utils/Images/SideBarBottom2.png";
import "../CSS/SideBar.css";

const SideBarCourse = () => {
  return (
    <>
      <aside
        className="w-[310px] h-[1500px] relative"
        style={{ background: "#215D4F" }}
      >
        <div className="flex pt-5 ml-[40px]">
          <img
            src={Ellipse}
            className="relative left-4 h-14 w-14 opacity-60"
            alt="ellipse"
          />
          <img
            src={Ellipse}
            className=" relative -left-2 w-14 h-14 opacity-60"
            alt="ellipse"
          />
          <h1 className="relative -left-20 top-3 font-medium text-2xl decoration-white">
            My Classroom
          </h1>
        </div>

        <ul className="pl-10 py-4 mt h-[486px] mt-[90px]">
          <li className="flex mx-2 my-4 ">
            <img src={ContactCard} alt="Courses" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Courses
            </h3>
          </li>
          <li className="flex mx-2 my-6 ">
            <img src={LeaderBoard} alt="LeaderBoard" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Leaderboard
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Bookmarks} alt="pause" className="m-1" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Book marks
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Doubts} alt="Doubts" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Ask Doubts
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Events} alt="Events" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Events
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Notes} alt="Notes" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Notes
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Certificate} alt="Certificate" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Certificate
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Placed} alt="Placed" />
            <h3 className="font-sans font-normal text-xl ml-3 decoration-white">
              Placed Edflinger
            </h3>
          </li>
        </ul>
        <div className="bottom-0 absolute">
          <img
            src={SideBarBottom1}
            className="relative -bottom-48"
            alt="design"
          />
          <img
            src={SideBarBottom2}
            className="relative bottom-0"
            alt="design2"
          />
        </div>
      </aside>
    </>
  );
};

export default SideBarCourse;
