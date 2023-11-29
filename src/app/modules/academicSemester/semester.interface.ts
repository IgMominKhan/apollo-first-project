import { string } from "joi";

export type TSemesterNames = "Autumn" | "Summer" | "Fall";
export type TSemesterCodes = '01' | '02' | '03';


export type TMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TAcademicSemester = {
  name: TSemesterNames;
  code: TSemesterCodes;
  year: String;
  startMonth: TMonth;
  endMonth: TMonth;
};

export type TSemesterNameCodeMapper = {
  [key:string]: string
}
