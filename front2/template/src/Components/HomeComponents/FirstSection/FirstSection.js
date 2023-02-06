import React from "react";
import Navbar from "../../../Layout/Navbar/Navbar";
import { Helmet } from "react-helmet";
import "./FirstSection.scss"
function FirstSection() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="home_backround">
        <Navbar />
        <div className="home_text">
          <div className="text">
            <h1>Learn From The Expert</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              ipsa nulla sed quis rerum amet natus quas necessitatibus.
            </p>
            <div className="home_btn">
              <button>
                <p>Admission Now </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstSection