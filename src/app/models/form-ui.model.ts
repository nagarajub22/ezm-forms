
export enum IFromUIControlType {
    Text="text",
    Checkbox="checkbox",
    Radio="radio",
    List_Single="list-single",
    List_Multiple="list-multiple",
    Date="date",
  }
  
  export interface IFormUI {
    title: string;
    steps: IFormUIStep[];
  }
  
  export interface IFormUIStep {
    title: string;
    controls: IFormUIControl[];
  }
  
  export interface IFormUIControl {
    id: string;
    label: string;
    type: IFromUIControlType;
    required: boolean;
  }