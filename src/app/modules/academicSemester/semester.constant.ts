import {
  TMonth,
  TSemesterCodes,
  TSemesterNameCodeMapper,
  TSemesterNames,
} from "./semester.interface";

export const semesterNames: TSemesterNames[] = ["Autumn", "Summer", "Fall"];

export const semesterCodes: TSemesterCodes[] = ["01", "02", "03"];

export const months: TMonth[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const semesterNameCodeMapper: TSemesterNameCodeMapper = {
  Autumn: "01",
  Summer: "02",
  Fall: "03",
};
