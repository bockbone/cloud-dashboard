function Categories() {
  const categories = [
    {
      name: "Document",
    },
    {
      name: "Design",
    },
    {
      name: "Music",
    },
    {
      name: "Image",
    },
    {
      name: "Video",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-gray-600 font-bold">Categories</h2>
      <div className="space-y-2 mt-6">
        {categories.map((category, i) => (
          <p
            key={i}
            className="text-sm font-medium text-gray-400 py-3 px-2 rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Categories;
