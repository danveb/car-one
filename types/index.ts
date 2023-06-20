import { MouseEventHandler } from "react";

// initialize CustomButtonProps interface 
// title (string), containerStyles (optional, string), handleClick function (optional, MouseEventHandler on HTML Button Element), btnType (optional, union of "button" type or "submit" type)
export interface CustomButtonProps {
  title: string; 
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>; 
  btnType?: "button" | "submit";
}

