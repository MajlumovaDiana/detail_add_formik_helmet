import React from "react";
import "./Home.scss";
import FirstSection from "../../Components/HomeComponents/FirstSection/FirstSection";
import OurPrograms from "../../Components/HomeComponents/OurPrograms/OurPrograms";
import ExcellentInEducation from "../../Components/HomeComponents/ExcellentInEducation/ExcellentInEducation";
import StriveForExcellent from "../../Components/HomeComponents/StriveForExcellent/StriveForExcellent";
import EducationIsLife from "../../Components/HomeComponents/EducationIsLife/EducationIsLife";
import OurTeacher from "../../Components/HomeComponents/OurTeacher/OurTeacher";
import OurTeacherCards from "../../Components/HomeComponents/OurTeacherCards/OurTeacherCards";
import Footer from "../../Layout/Footer/Footer";
function Home() {
  return (
    <>
      <FirstSection/>
      <OurPrograms/>
      <ExcellentInEducation/>
      <StriveForExcellent/>
      <EducationIsLife/>
      <OurTeacher/>
      <OurTeacherCards/>
      <Footer/>
    </>
  );
}

export default Home;
