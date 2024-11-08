import Cart from "../Cart/Cart";
import Logo from "../Logo/Logo";
import Search from "../SearchBar/Search";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className="w-full h-32 flex flex-col py-3 2xl:px-60 md:px-20  px-4 sm:px-8 bg-yellow-300 gap-3 text-nowrap">
      <HeaderNav />
      <div className="flex items-center gap-2 ">
        <Logo />
        <Search />
        <Cart />
      </div>
    </header>
  );
};
export default Header;
