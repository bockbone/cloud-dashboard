function QuickAccessItem({ path, name }) {
  return (
    <div className="relative w-[250px] cursor-pointer transition-all transform hover:-translate-y-1">
      <div className=" ">
        <img src={path} className="rounded-2xl" />
      </div>
      <p className="absolute -bottom-1 w-full bg-gray-100 py-4 rounded-b-2xl text-center text-sm font-medium">
        {name}
      </p>
    </div>
  );
}

export default QuickAccessItem;
