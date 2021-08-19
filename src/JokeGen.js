import React, { Fragment, useState } from "react";
import "./styles.css";
import axios from "axios";

export const JokeGen = () => {
  const categories = [
    "Programming",
    "Misc",
    "Dark",
    "Pun",
    "Spooky",
    "Christmas",
  ];

  const [joke, setJoke] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const getData = async (section) => {
    const { data } = await axios.get(`https://v2.jokeapi.dev/joke/${section}`);
    console.log(data);
    setJoke(data);
    console.log("joke", joke);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getData("Any");
  };
  const categorySubmitHandler = (e) => {
    e.preventDefault();
    getData(category);
  };
  return (
    <Fragment>
      <div className="container">
        <div className="middlecard">
          <h2>Joke Generator</h2>
          <form onSubmit={submitHandler}>
            <div className="flexinpandbtn1">
              <button className="btnbig" type="submit">
                Random Joke
              </button>
            </div>
          </form>
          <form onSubmit={categorySubmitHandler}>
            <div className="flexinpandbtn">
              <select
                className="selectcategory"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((categori, i) => (
                  <option key={i}>{categori}</option>
                ))}
              </select>
              <button className="btn" type="submit">
                Go
              </button>
            </div>
          </form>
          <h3 style={{ paddingTop: "5%", fontSize: "1.5rem" }}>
            {joke && joke.category}
          </h3>
          <div className="details">
            <div className="detailsleft">
              <p className="pstyle">{joke.setup ? joke.setup : joke.joke}</p>
              <p className="pstyle">{joke && joke.delivery}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
