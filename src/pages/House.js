import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetchHook";
import ImageSlider from "../components/Carousel";
import Tags from "../components/Tags";
import Rating from "../components/Rating";

// Style
import "../style/House.css";

const House = () => {
  const { data } = useFetch();

  const { productId } = useParams();
  if (data) {
    if (data.length > 0) {
      const logement = data.find((logement) => logement.id === productId);
      console.log();
      const {
        title,
        pictures,
        description,
        host,
        rating,
        location,
        equipments,
        tags,
      } = logement;

      return (
        <div className="container">
          <div className="containerStyles">
            <ImageSlider slides={pictures} />
          </div>
          <div className="infoContainer">
            <div className="leftContainer">
              <div>
                <h1 className="title">{title}</h1>
                <p className="location">{location}</p>
              </div>
              <div className="tagsContainer">
                <Tags tags={tags} />
              </div>
            </div>

            <div className="rightContainer">
              <Rating rating={rating} />
            </div>
          </div>

          <div></div>
        </div>
      );
    }
  }
};

export default House;
