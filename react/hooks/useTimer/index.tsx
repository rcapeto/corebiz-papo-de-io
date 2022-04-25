import { useEffect, useState } from 'react';

import { ONE_SECOND_IN_MS, parseTimeRemaining } from './utils';

export const useTimer = (finalDate: string) => {
   if(!finalDate) {
      throw new Error('Please set a finalDate');
   }
   
   const seconds = (new Date(finalDate).getTime() - new Date().getTime()) / ONE_SECOND_IN_MS;
   const [secondsRemain, setSecondsRemain] = useState<number>(seconds);
   const [state, setState] = useState({ seconds: 0, minutes: 0, days: 0, hours: 0 });
   const [active, setActive] = useState(seconds > 0);

   useEffect(() => {
      if(secondsRemain <= 0) { 
         setActive(false);
         return;
      };

      setState(parseTimeRemaining(secondsRemain));
      
      setTimeout(() => {
         setSecondsRemain(state => state - 1);
      }, ONE_SECOND_IN_MS);
   }, [secondsRemain]);


   return {
      secondsRemain,
      ...state,
      secondsSTR: String(state.seconds).padStart(2, '0'),
      minutesSTR: String(state.minutes).padStart(2, '0'),
      hoursSTR: String(state.hours).padStart(2, '0'),
      daysSTR: String(state.days).padStart(2, '0'),
      active
   };
};