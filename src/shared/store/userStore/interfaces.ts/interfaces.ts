export type TUser = {
  email: string;
};

export interface IUser {
  user: TUser;
  setUser(email: string,userId:string): void;
}
