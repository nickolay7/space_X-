import { ReactComponent as RocketLine } from "assets/img/rocket-line.svg";

import './Promo.scss';

export const Promo = () => (
  <div className="title">
    <h1 className="title__name">
      путешествие
      <br/>
      <span className="title__sub-name">
              на красную планету
            </span>
    </h1>
    <div className="corners-box">
      <button className="title__start">Начать путешествие</button>
      <div className="corners-box__corner corners-box__corner_rt"></div>
      <div className="corners-box__corner corners-box__corner_lb"></div>
    </div>
    <div className="rocket-line">
      <RocketLine/>
    </div>
  </div>
);
