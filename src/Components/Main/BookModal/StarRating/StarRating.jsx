import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke as halfStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

import style from "./StarRating.module.scss";

const StarRating = ({ rating }) => {
  const renderStarRating = (rating) => {
    // e.g. rating = 3.5

    const stars = [];
    const maxRating = 5;
    const fullStars = Math.floor(rating); // = 3
    const hasHalfStar = rating % 1 !== 0; // = true

    for (let i = 1; i <= maxRating; i++) {
      if (i <= fullStars) {
        // <= 3
        stars.push(<FontAwesomeIcon icon={solidStar} key={i} />);
      } else if (hasHalfStar && i === fullStars + 1) {
        // true && i === 4
        stars.push(<FontAwesomeIcon icon={halfStar} key={i} />);
      } else {
        stars.push(<FontAwesomeIcon icon={emptyStar} key={i} />);
      }
    }

    return stars;
  };

  return <div className={style.s_rating}>{renderStarRating(rating)}</div>;
};
// <FontAwesomeIcon icon={faStarHalfStroke} />
export default StarRating;
