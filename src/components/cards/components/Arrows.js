import React, {useContext} from "react";
import { CardsContext } from "../Cards";
import "../../styles.scss";

const Arrows = () => {
  const {changeCard} = useContext(CardsContext);

  return (
    <div className="arrows">
      <div className="arrow left" onClick={() => changeCard(-1)}/>
      <div className="arrow right" onClick={() => changeCard(1)}/>
    </div>
  );
};

export default Arrows;