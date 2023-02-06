import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OurTeacherCards.scss"
const baseURL = "http://localhost:7777/cards";

function OurTeacherCards() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  return (
    <>
      <div className="teacherCards">
        {post.map((e) => {
          return (
            <>
            <div className="therecards">
              <div className="card">
                <h1>{e.name}</h1>
                <h3>{e.job}</h3>
                <p>{e.description}</p>
           <Link to={`detale/${e._id}`}> <button>learn more</button></Link>
              </div>
            </div>
           </>
          );
        })}
      </div>
    </>
  )

}
export default OurTeacherCards