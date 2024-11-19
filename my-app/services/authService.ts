import { FormData } from "@/app/auth/signup/page";
import { axios } from "@/libs/axios";

export const signUp = async (account: FormData) => {
  return axios.post("/auth/signup", account);
};
