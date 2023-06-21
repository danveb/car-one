import { MouseEventHandler } from "react";

// initialize CustomButtonProps interface 
// title (string), containerStyles (optional, string), handleClick function (optional, MouseEventHandler on HTML Button Element), btnType (optional, union of "button" type or "submit" type)
export interface CustomButtonProps {
  title: string; 
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>; 
  btnType?: "button" | "submit";
  textStyles?: string; 
  rightIcon?: string; 
  isDisabled?: boolean; 
}

// initialize SearchManufacturerProps interface
// manufacturer (string), setManufacturer function 
export interface SearchManufacturerProps {
  manufacturer: string; 
  // setManufacturer takes in manufacturer (string type) and returns void
  setManufacturer: (manufacturer: string) => void; 
}

// initialize CarProps interface
// follow properties on API 
export interface CarProps {
  city_mpg: number; 
  class: string; 
  combination_mpg: number; 
  cylinders: number; 
  displacement: number; 
  drive: string; 
  fuel_type: string; 
  highway_mpg: number; 
  make: string; 
  model: string; 
  transmission: string; 
  year: number; 
}

// initialize CustomFilter interface
// title (string) 
export interface CustomFilterProps {
  title: string; 
}