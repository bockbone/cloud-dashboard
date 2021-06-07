function RecentUploadItem({ path, name, fileSize }) {
  return (
    <div className="flex w-[400px] justify-between items-center p-2 rounded-xl cursor-pointer hover:bg-gray-50 hover:shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="w-[60px] min-h-[60px] rounded-2xl">
          <img
            src={path}
            className="w-[60px] min-h-[60px] rounded-2xl object-cover"
          />
        </div>
        <div>
          <h4 className="text-gray-700 text-sm font-medium">{name}</h4>
          <p className="text-[10px] font-medium text-gray-500">
            10 Oct, 10:23pm
          </p>
        </div>
      </div>
      <p className="text-sm font-medium text-gray-700">{fileSize}MB</p>
    </div>
  );
}

export default RecentUploadItem;
