"use client";
import Cart from "../CartIcon/CartIcon";
import Logo from "../Logo/Logo";
import Search from "../SearchBar/Search";
import HeaderNav from "./HeaderNav";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/auth/signup" && pathname !== "/auth/login" ? (
        <header className="w-full h-28 flex flex-col py-1 2xl:px-60 md:px-20 px-4 sm:px-8 bg-yellow-300 gap-1 text-nowrap">
          <HeaderNav />
          <div className="flex items-center gap-2 ">
            <Logo />
            <Search />
            <Cart />
          </div>
        </header>
      ) : (
        <header className="w-full h-20 flex flex-col py-1 2xl:px-60 md:px-20 px-4 sm:px-8 bg-white gap-1 text-nowrap">
          <div className="flex justify-between items-center h-full">
            <div className=" flex">
              <Logo />
              <h2 className="text-2xl">
                {pathname === "/auth/signup" ? "Sign up" : "Log in"}
              </h2>
            </div>
            <p className=" text-red-500">Need help?</p>
          </div>
        </header>
      )}
    </>
  );
};
export default Header;
