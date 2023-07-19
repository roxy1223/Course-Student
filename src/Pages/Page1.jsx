import React from "react";
import SideBarCourse from "../Components/SidebarCourses";
import Navbar from "../Components/Navbar";
import PageEnd from "../Components/PageEnd";
import EventBanner from "../Components/EventBanner";
import ContactUs from "../Components/ContactUs";

const Page1 = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-[80px] ml-[74px] mr-[66px] mb-[40px] flex h-auto justify-center">
        <ContactUs />
      </main>
      <footer>
        <PageEnd />
      </footer>
    </>
  );
};

export default Page1;
