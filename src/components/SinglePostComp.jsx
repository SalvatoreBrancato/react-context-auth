import { useState, useEffect } from "react";
import { useNavigate ,useParams } from "react-router-dom";

export default function SinglePostComp() {

    const { slug } = useParams();

    const [singlePost, setSinglePost] = useState([]);
    // Fetching dei dati
    function apiSinglePost() {
        fetch(`http://localhost:3000/post/${slug}`)
            .then((res) => res.json())
            .then(setSinglePost);
    }

    // Solo al primo rendering
    useEffect(apiSinglePost, []);

    const navigate = useNavigate();

    return (
        <>
            <div key={singlePost.id} className="w-1/6 h-4/6 border border-indigo-500 m-2">
                <img src={singlePost.image} className="w-full h-3/4" alt="" />
                <h2 className="capitalize" key={singlePost.id}>{singlePost.title}</h2>
                <p>{singlePost.content}</p>
            </div>
            <button onClick={()=>navigate(-1)}> 🔙Torna alla pagina precedente</button>
        </>
    );
}