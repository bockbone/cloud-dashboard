import { DotsHorizontalIcon } from "@heroicons/react/outline";
import FileItem from "./FileItem";

function FileManager() {
  return (
    <div className="min-w-[400px]">
      <div className="flex justify-between items-center text-gray-600">
        <h2 className=" font-bold">File Manager</h2>
        <DotsHorizontalIcon className="w-5 h-5 hover:cursor-pointer" />
      </div>
      <div className="grid grid-cols-2 gap-8 my-10">
        <FileItem />
        <FileItem />
        <FileItem />
        <FileItem />
      </div>

      <button className="bg-gray-100 w-full py-3 rounded-lg text-sm font-medium text-purple-800 focus:outline-none">
        Open File Manager
      </button>
    </div>
  );
}

export default FileManager;
