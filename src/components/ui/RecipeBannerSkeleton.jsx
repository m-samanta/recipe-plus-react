import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faList,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Img1 from "../../assets/postertest1.jpg"


const RecipeBannerSkeleton = () => {
    return (
        <div>
            <div className="recipe recipe--skeleton">
        <figure className="recipe__img__wrapper recipe__img__wrapper--skeleton">
          <div className="recipe__img recipe__img--skeleton" />
        </figure>
        <h4 className="recipe__title recipe__title--skeleton">.</h4>
      </div>
        </div>
    );
}

export default RecipeBannerSkeleton;