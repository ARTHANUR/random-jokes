import React, { useEffect, useState } from "react";
import "./Jokes.css";

const Jokes = () => {
    const [data, setData] = useState({});
    const [toggle, setToggle] = useState(true);
    const getJoke = async () => {
        await fetch("https://official-joke-api.appspot.com/random_joke")
            .then((response) => {
                return response.json();
            })
            .then((idata) => {
                setData(idata);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getJoke();
    }, [toggle]);

    return (
        <>
            <div className="jokes-container">
                <div className="bubble1">
                    <div> {data.setup}</div>
                </div>
                <div className="bubble2">
                    <div>{data.punchline}</div>
                </div>
                <button onClick={() => setToggle(!toggle)}>Next</button>
            </div>
        </>
    );
};

export default Jokes;
