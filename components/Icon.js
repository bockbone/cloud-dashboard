function Icon({ text, IconRender }) {
  return (
    <div className="flex flex-col cursor-pointer space-y-4 items-center group">
      <IconRender className="w-14 h-14 text-purple-700 bg-gray-100 p-4 rounded-xl transition-all ease-in-out duration-200 group-hover:bg-purple-800 group-hover:text-gray-100 " />
      <p className="text-xs font-medium text-gray-400 transition-all ease-in-out duration-200 group-hover:text-purple-800 group-hover:font-bold">
        {text}
      </p>
    </div>
  );
}

export default Icon;
