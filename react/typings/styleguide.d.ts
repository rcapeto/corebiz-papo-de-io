declare module "vtex.styleguide" {
   import { ComponentType } from "react";
   
   export const Spinner: ComponentType<ComponentProps>;
   export const Checkbox: ComponentType<ComponentProps>;
   export const ToastConsumer: ComponentType<ComponentProps>;
 
   interface ComponentProps {
     [key: string]: any;
   }
 }