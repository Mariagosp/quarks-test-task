import React from "react";
import './ReviewCard.scss';
import { Review } from "../../types/Review";
type Props = {
  review: Review;
}

export const ReviewCard: React.FC<Props> = ({ review }) => {
  return (
    <>
      <div key={review.id} className="slider__item">
        <div className="slider__item--head">
          <h3 className="slider__item--head--author">{review.author}</h3>
          <div className="slider__item--head--review">
            <img
              src="/icons/stars.svg"
              alt="stars"
              className="slider__item--head--review--stars"
            />
            <p className="slider__item--head--review--rating">
              {review.rating}
            </p>
          </div>
        </div>
        <p className="slider__item--text">{review.text}</p>
      </div>
    </>
  );
};
