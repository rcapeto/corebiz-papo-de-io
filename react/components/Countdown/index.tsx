import React from 'react';
import { useTimer } from '../../hooks/useTimer';
import { Props , schema, defaultProps } from './utils/schema'
import styles from './styles.module.css';

import { languages } from './utils';

const Countdown: VTEXCustomComponent<Props> = ({ 
   active, backgroundColor, description, title, finalDate, lang
}) => {

   if(!active) return null;

   const { daysSTR, hoursSTR, minutesSTR, secondsSTR, active: timerActive} = useTimer(finalDate);
   const currentlang = languages.find(item => item.lang == lang);

   if(!timerActive) {
      return(
         <div className={styles.timeout}>Tempo esgotado 😔</div>
      );
   }

   const items = [
      {
         value: daysSTR,
         label: currentlang?.days ?? 'Days'
      },
      {
         value: hoursSTR,
         label: currentlang?.hours ?? 'Hours'
      },
      {
         value: minutesSTR,
         label: currentlang?.minutes ?? 'Minutes'
      },
      {
         value: secondsSTR,
         label: currentlang?.seconds ?? 'Seconds'
      }
   ];

   return(
      <div className={styles['countdown--container']} style={{ backgroundColor }}>
         <div className={styles['top-content']}>
            <h2 
               dangerouslySetInnerHTML={{ __html: title }}
            />
            <p>{description}</p>
         </div>

         <div className={styles['bottom-content']}>
            {
               items.map((item, index) =>(
                  <div className={styles['countdown--item']} key={String(index)}>
                     <div className={styles.content}>
                        <p>{item.value}</p>
                        <h5>{item.label}</h5>
                     </div>
                     { index < items.length - 1 && <span className={styles.separator}>:</span>}
                  </div>
               ))
            }
         </div>
      </div>
   );
};

Countdown.defaultProps = defaultProps;
Countdown.schema = schema;

export default Countdown;