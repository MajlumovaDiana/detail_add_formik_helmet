import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetaleSection() {
    let { id } = useParams()

    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:7777/cards/${id}`).then((response) => {
            setPost(response.data);
        });
    }, [id]);
    return (
        <>
          <h1>{post.name}</h1>
          <h3>{post.job}</h3>
          <p>{post.description}</p>
        </>
    )
}

export default DetaleSection