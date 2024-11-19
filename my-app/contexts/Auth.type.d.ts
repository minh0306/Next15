export interface IUserAccount {
  name: string;
  email: string;
  phone: string;
}

export interface AuthContextType {
  token: string;
  account: IUserAccount | null;
  logIn: (account: Account) => Promise<void>;
  logOut: () => void;
}

export type Account = {
  email: string;
  password: string;
};
