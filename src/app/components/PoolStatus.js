import React from 'react';
import { faEthereum, faBitcoin } from '@fortawesome/free-brands-svg-icons'; // Use free-brands-svg-icons for Ethereum and Bitcoin
import { faDog } from '@fortawesome/free-solid-svg-icons'; // Use free-solid-svg-icons for Doge
import { faSol, faTrx } from '@fortawesome/free-brands-svg-icons'; // Correct import for Sol and Tron
import { faCoins } from '@fortawesome/free-solid-svg-icons'; // Use free-solid-svg-icons for generic coins icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import styles from '../style/Home.module.css';



const PoolStatus = ({ poolAmount }) => {
debugger
  if(poolAmount==null){
    return <p>No polls</p>
  }
  // Mapping of coin symbols to FontAwesome icons
  const iconMapping = {
    ETH: faEthereum,
    BTC: faBitcoin,
    DOGE: faDog,
    SOL: faSol,
    TRX: faTrx,
    // Add more mappings as needed
    DEFAULT: faCoins,
  };

  return (
    <div className={styles.poolStatus}>
      <h3>Current Pool Status</h3>
      {poolAmount.map((pool, index) => (
        <div key={index} className={styles.poolItem}>
          <span className={styles.iconContainer}>
            <FontAwesomeIcon icon={iconMapping[pool.coinSymbol] || iconMapping.DEFAULT} />
          </span>
          <div className={styles.poolContent}>
            <span className={styles.coinSymbol}>{pool.coinSymbol}</span>: 
            <span className={styles.poolAmount}>{pool.poolAmount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PoolStatus;