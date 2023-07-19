import React from "react";
import "../CSS/CertificateBanner.css";
import undrawCertificate from "../images/page68/undraw-certificate.png";
import drop from "../images/page68/drop.svg";
import courseAction from "../images/page68/courseAction.svg";
import award from "../images/page68/award.jpg";
import CourseCollection from "./courseCollection";

function CertificateBanner() {
  return (
    <>
      {/* Certificate Banner */}
      <div className="w-[1178px] h-[239px] box-border ml-[35px] gradient relative ">
        <span className="Certificatefont mt-[68px] ml-[44px] absolute">
          Certificate
        </span>
        <span className=" CertificateSubtitle mt-[125px] ml-[44px] absolute">
          Download certificate you have been achieved from previous <br />
          courses
        </span>
        <img
          src={undrawCertificate}
          width={156}
          height={188}
          className="absolute mt-[50px] ml-[867px] mr-[87px]"
        ></img>
      </div>

      {/* select Course */}
      <div className="flex">
        <span className="selectCoursefont mt-[39px] ml-[35px] absolute">
          Select Course
        </span>
        <div className="w-[395px] h-[40px] ml-[155px]  mt-[35px] dropdownfont ">
          <span className="ml-[30px] mt-[6px] mr-[205px] absolute">
            Choose your course
          </span>
          <img
            src={drop}
            width={10}
            height={5}
            className="absolute my-[16px] ml-[364px] fill-black"
          ></img>
        </div>
      </div>

      {/* Courses */}
      <div className="inline-flex flex-col items-center gap-[30px]">
        <div className="flex flex-col items-start gap-[12px] ml-[35px] mt-[10px]">
          <div className="flex mt-[10px]">
            <img src={award} width={35} height={35}></img>
            <span className="Coursefont ml-[13px]">Course name</span>
          </div>

          <div className=" courseContainer flex w-[1178px]  items-start py-[23px] px-[26px]  ">
            <div className="flex items-center gap-[630px]">
              <div className="flex flex-col items-start gap-[2px]">
                <span className="courseSubFont">
                  Full Stack Designer From Scratch to Advanced
                </span>
                <span className="courseDate">Completed on 21 may 2022</span>
              </div>
              <img src={courseAction}></img>
            </div>
          </div>
        </div>
        <CourseCollection />
        <CourseCollection />
        <CourseCollection />
        <CourseCollection />
        <CourseCollection />
        <div className="flex items-start gap-[6.42px] py-[9.63px] px-[84.103px] rounded-[9.63px] bg-[#215D4F]">
          <button className="viewMoreFont">View more</button>
        </div>
      </div>
    </>
  );
}

export default CertificateBanner;
