import React from "react";
import './styles.sass'

const Card = ({image, heading, content}) => {
  return (
    <>
      <div class="grid__item">
        <div class="card">
          <img class="card__img" src={image} alt={heading} />
          <div class="card__content">
            <h1 class="card__header">{heading}</h1>
            <p class="card__text">
              {content}
            </p>
            <button class="card__btn">
              Find out more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
