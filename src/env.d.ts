//Typescript declaration file
///<reference types="vite/client"/>
declare module "*.vue" {
  import { DefineComponent } from "vue";
  //eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint

  const component: DefineComponent<{}, {}, any>;
  export default component;
}
