import './advantage.scss';

export interface Advantage {
  gradientStyle: string,
  topText: string,
  middleText: string,
  bottomText: string,
  span?: string | null
}

export const AdvantageItem = ({
  gradientStyle,
  topText,
  middleText,
  bottomText,
  span = null
                          }: Advantage) => (
  <div className={`block block_${gradientStyle}`}>
    <p className="block__top-text">{topText}</p>
    <h2 className="block__middle-text">{middleText}<span>{span}</span></h2>
    <p className="block__bottom-text">{bottomText}</p>
  </div>
);
