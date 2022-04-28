import { FunctionComponent } from 'react';

declare global {
   interface VTEXCustomComponent<Props = {}> extends FunctionComponent<Props> {
      getSchema?: (props: Props) => Schema;
      schema?: Schema;
      defaultProps?: Props;    
    }

   interface Schema {
    title: string;
    type:  Exclude<SchemaType, 'array'| 'string' | 'boolean' | 'number'>;
    default?: any;
    properties: SchemaProperties;
  }
}
type SchemaType = 'array' | 'object' | 'string' | 'boolean' | 'number';
type UiWidget = 'image-uploader' | 'textarea' | 'datetime' | 'color';

interface SchemaProperties {
  __editorItemTitle?: {
    default: string
    title: string
    type: Exclude<SchemaType, 'array'| 'object' | 'boolean' | 'number'>
  },
   [key: string]: {
      type: SchemaType;
      enum?: string[];
      enumNames?: string[];
      default?: any;
      title?: string;
      description?: string;
      properties?: SchemaProperties;
      format?: 'date-time',
      widget?: {
         "ui:widget"?: UiWidget
      },
      items?: {
         type: SchemaType;
         title?: string;
         properties?: SchemaProperties;
         default?: any;
      }
   }
}