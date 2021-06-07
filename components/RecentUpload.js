import RecentUploadItem from "./RecentUploadItem";
function RecentUpload() {
  const recentData = [
    {
      path: "/cat-1.jpg",
      name: "cat-1.jpg",
      fileSize: 10,
    },
    {
      path: "/cat-2.jpg",
      name: "cat-2.jpg",
      fileSize: 12,
    },
    {
      path: "/cat-3.jpg",
      name: "cat-3.jpg",
      fileSize: 8,
    },
    {
      path: "/cat-4.jpg",
      name: "cat-4.jpg",
      fileSize: 2,
    },
    {
      path: "/cat-2.jpg",
      name: "cat-2.jpg",
      fileSize: 7,
    },
    {
      path: "/cat-3.jpg",
      name: "cat-3.jpg",
      fileSize: 8,
    },
  ];
  return (
    <div className="min-w-[430px]  ">
      <h2 className="text-gray-600 font-bold">Recently Uploaded</h2>
      <div className="h-[350px] space-y-4 mt-2 overflow-hidden overflow-y-scroll scrollbar scrollbar-thumb-purple-700 scrollbar-track-gray-200 scrollbar-thin">
        {recentData.map((data, i) => (
          <RecentUploadItem
            key={i}
            path={data.path}
            name={data.name}
            fileSize={data.fileSize}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentUpload;
