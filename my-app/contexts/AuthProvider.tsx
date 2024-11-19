"use client";
import { useEffect, useState } from "react";
import { Account, IUserAccount } from "./Auth.type";
import { axios } from "@/libs/axios";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [account, setAccount] = useState<IUserAccount | null>(null);
  const router = useRouter();
  const [token, setToken] = useState("");

  const logOut = () => {
    setAccount(null);
    setToken("");
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("ACCOUNT");
  };

  const logIn = async (data: Account) => {
    try {
      const res: {
        token: string;
        user: {
          name: string;
          id: string;
          isAdmin: boolean;
          // phone: string;
          email: string;
          status: "active" | "inactive";
          phone: string;
        };
      } = await axios.post(`/auth/login`, data);

      const { token, user } = res;
      const { name, email, phone } = user;

      const account = {
        name: name || "Unknown User",
        email: email || "unknown@mail.com",
        phone: phone || "Unknown phone number",
      };

      // // Set token and account
      setToken(token);
      setAccount(account);
      localStorage.setItem("TOKEN", token);
      localStorage.setItem("ACCOUNT", JSON.stringify(account));
      toast.success("Successfully logged in");
      router.replace("/");
    } catch (error) {
      toast.error("Login failed");
      throw error;
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentToken = localStorage.getItem("TOKEN");
      if (currentToken) {
        setToken(currentToken);
      }
    }
  }, []);
  return (
    <AuthContext.Provider value={{ token, account, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
