import { MenuIcon } from "@heroicons/react/outline";
import Logo from "./Logo";
const Header = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <header
      className="flex items-center justify-between p-4 bg-white h-16
    xl:hidden">
      <Logo />
      <MenuIcon
        className="h-8 cursor-pointer xl:hidden"
        onClick={() => setIsModalOpen(!isModalOpen)}
      />
    </header>
  );
};

export default Header;
