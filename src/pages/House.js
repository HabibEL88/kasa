import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetchHook";
import ImageSlider from "../components/Carousel";
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
        <div className="Container">
          <div className="containerStyles">
            <ImageSlider slides={pictures} />
          </div>
          <div className="left-container">
            <h1 className="title">{title}</h1>
            <p className="location">{location}</p>
            <div>tag</div>
          </div>

          <div></div>
        </div>
      );
    }
  }
};

export default House;
