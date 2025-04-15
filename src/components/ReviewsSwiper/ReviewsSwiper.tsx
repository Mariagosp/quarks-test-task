import "./ReviewsSwiper.scss";
import { reviews } from "../../utils/reviews";
import { ReviewCard } from "../ReviewCard/ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ReviewsSwiper = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: false,
    swipe: false,
    pauseOnHover: false,
  };

  return (
    <>
      <div className="swiper">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="swiper--wrapper">
              <ReviewCard review={review} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
