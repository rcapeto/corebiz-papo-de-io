import { AvailablesLangs } from './index';

/** 
 * === Props ===
 * 1. active
 * 2. finalDate
 * 3. lang
 * 4. backgroundColor
 * 5. title
 * 6. description
 * 7. blockClass = https://rcapetio--corebizio.myvtex.com/
 */

export interface Props {
   active: boolean;
   finalDate: string;
   lang: AvailablesLangs;
   backgroundColor: string;
   title: string;
   description: string;
}

export const defaultProps: Props = {
   active: true,
   lang: 'pt-br',
   backgroundColor: '#8257e5',
   finalDate: '2022-04-30T20:05:54.521Z',
   title: 'Ofertas Incríveis, <span>aproveite!</span>',
   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure pariatur aspernatur ad autem sit unde aut molestiae, neque ratione labore ipsam recusandae quod velit nisi consequatur earum cupiditate fuga!'
};

export const schema: Schema = {
   title: 'Contador',
   type: 'object',
   properties: {
      active: {
         type: 'boolean',
         default: defaultProps.active,
         title: 'Ativo/Desativar',
      },
      lang: {
         type: 'string',
         default: defaultProps.lang,
         enum: ['pt-br', 'en-us', 'es-es'],
         title: 'Escolher Linguagem'
      },
      backgroundColor: {
         type: 'string',
         title: 'Escolher cor de fundo',
         description: 'Adicioaanr como hexadecimal',
         widget: {
            "ui:widget": "color"
         },
         default: defaultProps.backgroundColor,
      },
      finalDate: {
         type: 'string',
         format: 'date-time',
         widget: {
            "ui:widget": 'datetime'
         },
         default: defaultProps.finalDate,
      },
      title: {
         type: 'string',
         title: 'Titulo do componente',
         default: defaultProps.title,
      },
      description: {
         type: 'string',
         title: 'Descrição do componente',
         default: defaultProps.description,
      }
   }
};