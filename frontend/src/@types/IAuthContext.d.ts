export interface IAuthContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  login: (creds: { username: string, password: string }) => void;
  logout: () => void;
}
