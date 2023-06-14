import React, { useContext } from "react";
import { CardsContext } from "../Cards";

import "../../styles.scss";

const Dots = () => {
  const { cardCount } = useContext(CardsContext);
  const { goToSlide, slideNumber } = useContext(CardsContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < cardCount; i++) {
      dots.push(
        <div
          className={`dot ${slideNumber === i ? "selected" : ""}`}
          onClick={() => goToSlide(i)}
        />
      );
    }
    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
};

export default Dots;