import React from 'react';
import { useTimer } from '../../hooks/useTimer';
import styles from './styles.module.css';

import { languages } from './utils';

const Countdown: VTEXCustomComponent = () => {
   const active = true;
   const finalDate = '2022-03-25T20:05:54.521Z';
   const lang = 'pt-br';
   const backgroundColor = '#8257e5';

   if(!active) return null;

   const { daysSTR, hoursSTR, minutesSTR, secondsSTR } = useTimer(finalDate);
   const currentlang = languages.find(item => item.lang == lang);

   return(
      <div className={styles['countdown--container']} style={{ backgroundColor }}>
         <div className={styles['top-content']}>
            <h2>Ofertas Incríveis</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure pariatur 
               aspernatur ad autem sit unde aut molestiae, neque ratione labore ipsam recusandae 
               quod velit nisi consequatur earum cupiditate fuga!
            </p>
         </div>

         <div className={styles['bottom-content']}>
            <div className={styles['countdown--item']}>
               <div className={styles.content}>
                  <p>{daysSTR}</p>
                  <h5>{currentlang?.days ?? 'Days'}</h5>
               </div>
               <span className={styles.separator}>:</span>
            </div>
            <div className={styles['countdown--item']}>
               <div className={styles.content}>
                  <p>{hoursSTR}</p>
                  <h5>{currentlang?.hours ?? 'Hours'}</h5>
               </div>
               <span className={styles.separator}>:</span>
            </div>
            <div className={styles['countdown--item']}>
               <div className={styles.content}>
                  <p>{minutesSTR}</p>
                  <h5>{currentlang?.minutes ?? 'Minutes'}</h5>
               </div>
               <span className={styles.separator}>:</span>
            </div>
            <div className={styles['countdown--item']}>
               <div className={styles.content}>
                  <p>{secondsSTR}</p>
                  <h5>{currentlang?.seconds ?? 'Seconds'}</h5>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Countdown;