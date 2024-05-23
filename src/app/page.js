'use client'
import React, { useEffect, useState } from 'react';
import LotteryCard from './components/LotteryCard';
import styles from './style/Home.module.css';


const cosmicStyle = {
  backggroundColor: '#EEE1F0',
  title: {
    color:'#961A88',
    width:'93.86px',
    height:'14.22px'
  },
  round:{
  fontSize:'14px',
  color:'#961A88'
  },
  winner:{
    backggroundColor:'#595857',
    color:'white'
  },
  timerContainer:{
    backggroundColor:'#961A88'
  },
  nextDraw:{
    color:'white'
  },
  play:{
    backggroundColor:'white',
    color:'#961A88'
  },

}

const atomicStyle = {
  backggroundColor: '#EAF9F7',
  title: {
    color:'#00AEB1',
    width:'93.86px',
    height:'14.22px'
  },
  round:{
  fontSize:'14px',
  color:'#00AEB1'
  },
  winner:{
    backggroundColor:'#00AEB1',
    color:'white'
  },
  timerContainer:{
    backggroundColor:'#961A88'
  },
  nextDraw:{
    color:'white'
  },
  play:{
    backggroundColor:'white',
    color:'#961A88'
  },

}

const classicStyle = {
  backggroundColor: '#E9EEF6',
  title: {
    color:'#191978',
    width:'93.86px',
    height:'14.22px'
  },
  round:{
  fontSize:'14px',
  color:'#191978'
  },
  winner:{
    backggroundColor:'#00AEB1',
    color:'white'
  },
  timerContainer:{
    backggroundColor:'#191978'
  },
  nextDraw:{
    color:'white'
  },
  play:{
    backggroundColor:'white',
    color:'#961A88'
  },

}
const Home = () => {
  const [lotteries, setLotteries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cosmic_res = await fetch('/api/lottery/COSMIC', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          cache: 'no-store',
        });
        const cosmic = await cosmic_res.json();
        
        const classic_res = await fetch('/api/lottery/CLASSIC', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          cache: 'no-store',
        });
        const classic = await classic_res.json();
        
        const atomic_res = await fetch('/api/lottery/ATOMIC', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          cache: 'no-store',
        });
        const atomic = await atomic_res.json();

        setLotteries([cosmic, classic, atomic]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
debugger
  return (
    <div className={styles.container}>
      <h1>Latest Results</h1>
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <div className={styles.container}>
          {lotteries.map((lottery, index) => (


            <LotteryCard key={index} style={index==0?cosmicStyle:index==2?atomicStyle:classicStyle} lottery={lottery} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;