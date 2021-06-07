import { ShareIcon } from "@heroicons/react/outline";
function SharedFolder() {
  const sharedData = [
    {
      filename: "Sketch Files",
      email: "john@doe.com",
    },
    {
      filename: "Autocad",
      email: "mike@doe.com",
    },
    {
      filename: "Final Revisions",
      email: "lucy@gmail.com",
    },
    {
      filename: "Autocad",
      email: "mike@doe.com",
    },
    {
      filename: "Sketch Files",
      email: "john@doe.com",
    },
  ];
  return (
    <div>
      <h2 className=" font-bold">Shared Folder</h2>
      {sharedData.map((data, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-2 rounded-xl cursor-pointer transition-all hover:bg-gray-50"
        >
          <ShareIcon className="w-12 h-12 bg-gray-100 p-3 rounded-xl text-purple-700" />
          <div className="transform -translate-x-6">
            <h4 className="text-xs font-medium text-purple-900">
              {data.filename}
            </h4>
            <p className="text-[10px] font-medium text-gray-400">
              Share with: {data.email}
            </p>
          </div>
          <p className="text-[10px] font-medium text-gray-400">
            10 OCt, 10:22pm
          </p>
        </div>
      ))}
    </div>
  );
}

export default SharedFolder;
