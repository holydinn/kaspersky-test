import React, {useEffect, useState} from 'react';
import './cards.css'
import iconImage from '../../img/Icon.svg';
import arrowLeft from '../../img/arrowleft.svg';
import arrowRight from '../../img/arrowright.svg'
import activeDot from '../../img/ActiveDot.svg';
import inactiveDot from '../../img/InactiveDot.svg'
import Stars from "../stars/Stars";

const Cards = () => {
  const card = {
    name: 'Kaspersky Anti-Virus',
    icon: iconImage,
    reviews: 1912,
    info: 'Essential antivirus protection for Windows PCs',
    price: 29.99
  }

  const [cardCount, setCardCount] = useState(4);
  const [dotCount, setDotCount] = useState(4);
  const [cards, setCards] = useState([])

  useEffect(() => {
    const handleResize = () => {
      const {innerWidth} = window;
      let cardCount, amountCards, dotCount;
      let cards = []

      if (innerWidth <= 768) {
        cardCount = 1;
        dotCount = 6
        amountCards = 6
      } else if (innerWidth <= 1300 && innerWidth > 768) {
        cardCount = 2;
        dotCount = 4
        amountCards = 5
      } else {
        cardCount = 4;
        dotCount = 4
        amountCards = 7
      }

      setCardCount(cardCount);
      setDotCount(dotCount)
      for (let i = 0; i < amountCards; i++) {
        cards.push(card);
      }
      setCards(cards)
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dotArray = [...Array(dotCount).keys()];

  const Card = ({ card }) => {
    return (
      <div className='card'>
        <img className='card-icon' src={card.icon} alt="Icon"/>
        <div className='card-name'>{card.name}</div>
        <div className='card-rating'>
          <Stars/> {card.reviews} Reviews
        </div>
        <div className='card-divider'></div>
        <div className='card-info'>{card.info}</div>
        <div className='card-price'>
          from
          <span style={{fontWeight: 700, color: '#1D1D1B'}}> £{card.price}</span>
          <span style={{fontSize: 16}}>/year</span>
        </div>
        <button className='card-btn active'>Learn More</button>
        <button className='card-btn'>Learn More</button>
        <div className='card-base'></div>
      </div>
    );
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  useEffect(() => {
    setVisibleCards(cards.slice(currentIndex, currentIndex + cardCount));
  }, [currentIndex, cards]);


  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= cards.length - cardCount ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - cardCount : prevIndex - 1
    );
  };
  const goSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='wrapper'>
      <div className='card-wrapper'>
        <div className='arrow left' onClick={goToPrevSlide}>
          <img className='arrow-icon' src={arrowLeft} alt='Left Arrow'/>
        </div>
        <div className='cards' style={{transition: 'transform 0.5s ease' }}>
            {visibleCards.map((number) => (
              <Card key={number} card={card}/>
            ))}
        </div>
        <div className='arrow right' onClick={goToNextSlide}>
          <img className='arrow-icon' src={arrowRight} alt='Right Arrow'/>
        </div>
      </div>
      <div className='dots'>
        {dotArray.map((item, index) => (
          <div className='dot' onClick={() => goSlide(index)}>
            {index === currentIndex ?
              <img src={inactiveDot} alt='Active Dot'/>
              :
              <img src={activeDot} alt='Inactive Dot'/>
            }
          </div>
        ))}
      </div>
    </div>

  );
};

export default Cards;