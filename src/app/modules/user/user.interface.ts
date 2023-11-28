export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'teacher';
  isDeleted: boolean;
  status: 'in-progress' | 'blocked';
};
