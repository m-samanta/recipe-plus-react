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
            <div className="recipe">
        <figure className="recipe__img__wrapper">
          <img src={Img1} alt="" className="recipe__img" />
          <h3 className="recipe__info__title">Img</h3>
          <div className="recipe__info__list">
            <div className="recipe__info recipe__info1">
              <i className="recipe__info__icon">
                <FontAwesomeIcon icon={faEarthAmericas} />
              </i>
              <p className="recipe__info__text">img</p>
            </div>
            <div className="recipe__info recipe__info2">
              <i className="recipe__info__icon">
                <FontAwesomeIcon icon={faStar} />
              </i>
              <p className="recipe__info__text">img</p>
            </div>
            <div className="recipe__info recipe__info3">
              <i className="recipe__info__icon">
                <FontAwesomeIcon icon={faList} />
              </i>
              <p className="recipe__info__text">
                img
              </p>
            </div>
          </div>
        </figure>
        <h4 className="recipe__title">img</h4>
      </div>
        </div>
    );
}

export default RecipeBannerSkeleton;
