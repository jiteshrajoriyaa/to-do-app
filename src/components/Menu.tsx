import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const Menu: React.FC = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isMenuOpen);

  return (
    <aside
      className={`flex flex-col items-center p-4 transition-all duration-500 ease-in-out dark:bg-gray-800 dark:text-white ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      <div className="w-full bg-gray-200 rounded-lg h-[15%] relative dark:bg-gray-800"></div>
      <img
        src={"src/assets/avtar.png"}
        alt="Profile"
        className="absolute m-10 sm:m-14 z-10 w-20 sm:w-24 h-20 sm:h-24 rounded-full border-4 border-white"
      />

      <div className="flex flex-col items-center gap-6 sm:gap-8 pt-20 sm:pt-24 w-full bg-custom-green p-4 shadow relative rounded-lg">
        <div className="bg-white rounded-lg w-full dark:bg-gray-800">
          <ul className="mt-4 mb-4 space-y-1 sm:space-y-2 flex flex-col items-center font-semibold">
            <li className="hover:bg-custom-green w-full text-center cursor-pointer p-2 text-sm sm:text-base">
              Home
            </li>
            <li className="hover:bg-custom-green w-full text-center cursor-pointer p-2 text-sm sm:text-base">
              About
            </li>
            <li className="hover:bg-custom-green w-full text-center cursor-pointer p-2 text-sm sm:text-base">
              Tasks
            </li>
            <li className="hover:bg-custom-green w-full text-center cursor-pointer p-2 text-sm sm:text-base">
              Settings
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Menu;


