import React from 'react';

import "./advantage.scss";
import {Advantage, AdvantageItem} from "./Advantage";

const advantages: Advantage[] = [
  {gradientStyle: '1', topText: 'мы', middleText: '1', bottomText: 'на рынке'},
  {gradientStyle: '2', topText: 'гарантируем', middleText: '50%', bottomText: 'безопасность'},
  {gradientStyle: '3', topText: 'календарик', middleText: '2001', span: 'г.', bottomText: 'в подарок'},
  {gradientStyle: '4', topText: 'путешествие', middleText: '597', bottomText: 'дней'},
]

const AdvantagesList = () => {
  return (
    <div className="advantages">
      {
        advantages
          .map(({gradientStyle, topText, middleText, span, bottomText}) => {
            return <AdvantageItem key={topText} gradientStyle={gradientStyle} topText={topText} middleText={middleText} span={span} bottomText={bottomText} />
      })
      }
    </div>
  );
};

export default AdvantagesList;
