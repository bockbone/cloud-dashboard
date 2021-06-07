import {
  SearchIcon,
  ChevronDownIcon,
  BellIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="flex flex-1 w-screen px-10 py-4 justify-between border border-b-1 border-gray-100">
      <div className="flex items-center space-x-4">
        <div className="bg-purple-700 text-white w-8 h-8 text-sm rounded-full flex items-center justify-center">
          <p className="font-medium">M</p>
        </div>

        <p className="uppercase font-bold text-purple-700">My Cloud</p>
      </div>
      <div className="flex space-x-3">
        <div className="relative h-14">
          <input
            placeholder="Search files..."
            className="h-14 w-96 border border-gray-100 rounded-md py-2 pl-12 pr-2 text-xs font-medium text-gray-500 focus:outline-none shadow-sm"
          />
          <SearchIcon className="text-gray-500 w-6 h-6 absolute top-4 ml-4 cursor-pointer" />
        </div>
        <div className="h-14 w-40 border border-gray-100 rounded-md flex justify-between items-center px-3 text-sm font-medium text-gray-500 cursor-pointer transition-all ease hover:bg-gray-100 shadow-sm">
          <p>Filter</p>
          <ChevronDownIcon className="text-gray-500 w-6 h-6" />
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="relative cursor-pointer transition-all transform hover:rotate-[-20deg]">
          <BellIcon className="text-gray-300 w-7 h-7 " />
          <span className="absolute top-1 right-1 text-7xl bg-red-500 w-2 h-2 rounded-full"></span>
        </div>
        <div className="flex items-center space-x-4 cursor-pointer">
          <img
            src="https://bigheads.io/svg?accessory=none&body=chest&circleColor=blue&clothing=vneck&clothingColor=white&eyebrows=angry&eyes=wink&faceMask=false&faceMaskColor=black&facialHair=mediumBeard&graphic=react&hair=bob&hairColor=black&hat=none&hatColor=white&lashes=true&lipColor=turqoise&mask=false&mouth=grin&skinTone=light"
            alt="Big Head"
            className="w-12 h-12 bg-gray-400 rounded-full"
          />
          <div>
            <h2 className="text-gray-800 font-bold text-base">John Doe</h2>
            <p className=" text-gray-400 font-medium text-xs">
              johndoe@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
