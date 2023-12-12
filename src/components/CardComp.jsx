import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function CardComp(){

    const [posts, setPosts] = useState([]);
    // Fetching dei dati
    function apiPost() {
    fetch("http://localhost:3000/post")
    .then((res) => res.json())
    .then(setPosts);
    }

    // Solo al primo rendering
    useEffect(apiPost, []);

    return(
        <>
            {posts.map((elem)=>{
                return(
                    <div key={elem.id} className="w-1/6 h-96 border border-indigo-500 m-2">
                        <Link to={elem.slug}>
                            <img src={elem.image} className="w-full h-3/4" alt="" />
                            <h2 className="capitalize" key={elem.id}>{elem.title}</h2>
                            <p>{elem.content}</p>
                        </Link>
                    </div>
                )
            })}
        </>
    );
}