import React from "react";
import IconCross from "./../Icons/IconCross";
import "../../../css/home/Content.scss";

const base_url = "http://image.tmdb.org/t/p/original/";

const Content = ({ movie, onClose }) => (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ backgroundImage: `url(${base_url+movie.backdrop_path})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{movie.original_title?movie.original_title:movie.original_name}</div>
        <div className="content__description">
          {movie.overview}
        </div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;
