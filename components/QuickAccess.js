import QuickAccessItem from "./QuickAccessItem";

function QuickAccess() {
  const quickAccessData = [
    {
      path: "/cat-1.jpg",
      name: "cat-1.jpg",
    },
    {
      path: "/cat-2.jpg",
      name: "cat-2.jpg",
    },
    {
      path: "/cat-3.jpg",
      name: "cat-3.jpg",
    },
    {
      path: "/cat-4.jpg",
      name: "cat-4.jpg",
    },
  ];
  return (
    <div className="mx-10 space-y-2">
      <h2 className="text-gray-600 font-bold">Quick Access</h2>
      <div className="flex justify-between text-gray-500">
        {quickAccessData.map((data, i) => (
          <QuickAccessItem key={i} path={data.path} name={data.name} />
        ))}

        {/* <div className="relative w-[250px]">
          <div className=" ">
            <img src="/cat-1.jpg" className="rounded-2xl" />
          </div>
          <p className="absolute -bottom-1 w-full bg-gray-100 py-4 rounded-b-2xl text-center text-sm font-medium">
            Buidlding image
          </p>
        </div>
        <div className="relative w-[250px]">
          <div className=" ">
            <img src="/cat-1.jpg" className="rounded-2xl" />
          </div>
          <p className="absolute -bottom-1 w-full bg-gray-100 py-4 rounded-b-2xl text-center text-sm font-medium">
            Buidlding image
          </p>
        </div>
        <div className="relative w-[250px]">
          <div className=" ">
            <img src="/cat-1.jpg" className="rounded-2xl" />
          </div>
          <p className="absolute -bottom-1 w-full bg-gray-100 py-4 rounded-b-2xl text-center text-sm font-medium">
            Buidlding image
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default QuickAccess;
