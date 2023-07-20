import React from "react";
import Navbar from "../Components/Navbar";
import PageEnd from "../Components/PageEnd";
import Grid from "../Components/Grid";
import SearchBar from "../Components/SearchBar";

const Page4 = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main class="font-['Poppins']">
        <SearchBar/>
        <Grid title="Personal Developement Mentor"/>
        <Grid title="Bussiness Mentor"/>
        <Grid title="Music Mentor"/>
        <Grid title="Academic Mentor"/>
      </main>
      <footer>
        <PageEnd />
      </footer>
    </>
  );
};

export default Page4;
