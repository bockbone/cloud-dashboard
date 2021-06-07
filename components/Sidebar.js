import {
  ViewGridIcon,
  ClipboardListIcon,
  ShareIcon,
  HeartIcon,
  NewspaperIcon,
  ChevronDoubleDownIcon,
  PhotographIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";
import Icon from "./Icon";

function Sidebar() {
  return (
    <div className="flex flex-col px-10 pt-10 pb-5 border-r border-gray-200 space-y-16">
      <div className="grid grid-cols-2 gap-8">
        <Icon text="Dashboard" IconRender={ViewGridIcon} />
        <Icon text="All Files" IconRender={ClipboardListIcon} />
        <Icon text="Shared" IconRender={ShareIcon} />
        <Icon text="Favorites" IconRender={HeartIcon} />
        <Icon text="Recent" IconRender={NewspaperIcon} />
        <Icon text="Request" IconRender={ChevronDoubleDownIcon} />
        <Icon text="Pictures" IconRender={PhotographIcon} />
        <Icon text="Videos" IconRender={VideoCameraIcon} />
        <Icon text="Documents" IconRender={DocumentTextIcon} />
        <Icon text="Signed" IconRender={ClipboardCheckIcon} />
      </div>
      <div className="space-y-20">
        <div className="space-y-2">
          <h4 className="text-md font-bold">25.32 GB used</h4>
          <p className="text-xs font-semibold">79% used - 6.64 GB free</p>
          <div className="relative">
            <div className="w-full h-2 bg-gray-100 rounded-full"></div>
            <div className="absolute top-0 w-4/5 h-2 bg-red-400 rounded-full"></div>
          </div>
        </div>
        <button className="text-xs font-medium text-gray-300 bg-purple-800 py-4 px-12 rounded-2xl shadow-md focus:outline-none">
          Add more space
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
