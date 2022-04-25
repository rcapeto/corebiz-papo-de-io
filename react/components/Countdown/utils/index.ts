export type AvailablesLangs = 'pt-br' | 'en-us' | 'es-es';

export type Langs = {
   lang: AvailablesLangs;
   days: string;
   hours: string;
   minutes: string;
   seconds: string;
}

export const languages: Langs[] = [
   {
      lang: 'pt-br',
      days: 'Dias',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos'
   },
   {
      lang: 'en-us',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds'
   },
   {
      lang: 'es-es',
      days: 'Días',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos'
   }
];

