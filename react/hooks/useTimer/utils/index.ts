export const ONE_SECOND_IN_MS = 1000;
export const SECONDS_IN_MINUTE = 60;
export const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
export const ONE_DAY_IN_SECONDS = 86400;

export const parseTimeRemaining = (secondsLeft: number) => {
   return {
      days : Math.round(secondsLeft / ONE_DAY_IN_SECONDS),
      hours : Math.floor(secondsLeft / SECONDS_IN_HOUR % 24),
      minutes : Math.floor((secondsLeft % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE),
      seconds : Math.floor((secondsLeft % SECONDS_IN_HOUR) % SECONDS_IN_MINUTE),
   }
};