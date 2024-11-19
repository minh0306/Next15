import { createContext, useContext } from "react";
import { AuthContextType } from "./Auth.type";
export const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => {
  return useContext(AuthContext);
};
