import { FolderIcon } from "@heroicons/react/outline";
function FileItem() {
  return (
    <div className="bg-purple-50 space-y-1 p-4 rounded-xl cursor-pointer transform transition-all hover:-translate-y-1">
      <FolderIcon className="w-7 h-7 text-purple-800" />
      <h4 className="text-gray-700 font-bold text-sm">My Folder</h4>
      <p className="text-[10px] font-medium text-gray-400">
        created Jun 23, 2021
      </p>
    </div>
  );
}

export default FileItem;
