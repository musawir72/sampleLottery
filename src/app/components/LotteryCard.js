import React, { useState } from 'react';
import PoolStatus from './PoolStatus';
import Timer from './Timer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faClock } from '@fortawesome/free-solid-svg-icons';
import styles from '../style/Home.module.css';

const LotteryCard = ({ lottery ,style}) => {
  const [showPoolStatus, setShowPoolStatus] = useState(lottery.showPoolDetail);
  const lotteri = lottery.result.data;

  const formatLastWinners = () => {
    return lotteri.previousWinningticket.slice(0, 5).map((ticket, index) => (
      <div key={index} className={styles.winnerCircle} style={{backgroundColor: style.winner.backggroundColor,color:style.color}}>
        {ticket}
      </div>
    ));
  };

  const handlePlayClick = () => {
    console.log('Play button clicked');
  };

  return (
    <div className={styles.card} style={{ backgroundColor: style.backggroundColor }}>
      <div className={styles.header}>
        <h2 className={styles.lotteryName} style={{width:style.title.width,height:style.title.height,color:style.title.color}}>{lotteri.lotteryName}</h2>
        <span className={styles.roundNumber} style={{fontSize:style.round.fontSize,color:style.round.color}}>Round No: {lotteri.roundNumber}</span>
      </div>
      <div className={styles.zoomIcon}>
        <div className={styles.lastWinnersList} >{formatLastWinners()}</div>
      </div>
      <div className={styles.winningPot}>Winning Pot: {lotteri.winningPot} LUCKI</div>
      <div className={styles.actions} style={{backgroundColor: style.timerContainer.backggroundColor,padding: '5px'}}>
        <div className={styles.timerContainer} >
        <Timer nextDraw={lotteri.nextDraw} />
         
          
        </div>
        <button className={styles.playButton} onClick={handlePlayClick} style={{backgroundColor:style.play.backggroundColor,color:style.play.color}}>
          Play
        </button>
      </div>
      <div 
        className={styles.statusButton} 
        onClick={() => setShowPoolStatus(!showPoolStatus)}
      >
        {showPoolStatus ? 'Close' : 'Show'} 
        <FontAwesomeIcon icon={showPoolStatus ? faAngleUp : faAngleDown} />
      </div>
      {showPoolStatus && <PoolStatus poolAmount={lotteri.poolAmount} />}
    </div>
  );
};

export default LotteryCard;