type Month =
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

export type TAcamemicSemester = {
  name: string;
  code: '01' | '02' | '03';
  year: Date;
  startMonth: Month;
  endMonth: Month;
};
