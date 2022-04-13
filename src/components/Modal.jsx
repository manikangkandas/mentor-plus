import Logo from "./Logo";
import { LogoutIcon } from "@heroicons/react/outline";

const pages = ["Home", "About", "Contact", "", "", ""];

const Modal = ({ isModalOpen }) => {
  return (
    <div
      className={`xl:block absolute w-2/3 xl:w-full h-full bg-white bg-opacity-80 backdrop-blur-md right-0 top-0 xl:relative xl:col-span-1 p-4 ${
        isModalOpen ? `block` : `hidden`
      }`}>
      {/* nav header */}
      <div className="flex items-center justify-between xl:justify-center py-8">
        <Logo />
        <p className="cursor-pointer xl:hidden">😊</p>
      </div>

      {/* nav links */}
      <div className="space-y-2 w-full">
        {pages.map((page, i) => (
          <nav
            className="py-8 rounded-md bg-slate-50 hover:bg-slate-100 font-semibold grid place-content-center cursor-pointer"
            key={i}>
            <a href="#">{page}</a>
          </nav>
        ))}
      </div>
      {/* copyright */}
      <p className="font-semibold text-center mt-36">
        Developed by{" "}
        <a href="https://github.com/manikangkandas" className="text-blue-500">
          manikangkandas
        </a>
      </p>
    </div>
  );
};

export default Modal;
