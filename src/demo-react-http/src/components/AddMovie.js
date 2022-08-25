import React, { useRef } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const titleRef = useRef("");
  const openingRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening">Opening Text</label>
        <textarea rows="5" type="text" id="opening" ref={openingRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="releasedate">Release Date</label>
        <input type="date" id="releasedate" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
