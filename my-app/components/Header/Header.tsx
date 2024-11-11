import Cart from "../Cart/Cart";
import Logo from "../Logo/Logo";
import Search from "../SearchBar/Search";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const auth = false;
  return (
    <>
      {auth ? (
        <header className="w-full h-28 flex flex-col py-1 2xl:px-60 md:px-20  px-4 sm:px-8 bg-yellow-300 gap-1 text-nowrap">
          <HeaderNav />
          <div className="flex items-center gap-2 ">
            <Logo />
            <Search />
            <Cart />
          </div>
        </header>
      ) : (
        <header className="w-full h-20 flex flex-col py-1 2xl:px-60 md:px-20  px-4 sm:px-8 bg-white gap-1 text-nowrap">
          <div className="flex justify-between items-center h-full">
            <div className=" flex">
              <Logo />
              <h2 className="text-2xl">Sign up</h2>
            </div>
            <p>Need help?</p>
          </div>
        </header>
      )}
    </>
  );
};
export default Header;
