import { DotsVerticalIcon, FolderIcon } from "@heroicons/react/outline";

function CardItem({ color, title }) {
  const style1 = `bg-${color}-50 px-4 py-2 min-w-[224px] rounded-lg space-y-6 mb-8 shadow-xl cursor-pointer transition-all transform hover:translate-y-1`;
  const style2 = `flex justify-between items-center text-${color}-800`;
  const style3 = `text-base font-semibold text-${color}-900`;
  return (
    <div className={style1}>
      <div className={style2}>
        <FolderIcon className="w-12 h-12" />
        <DotsVerticalIcon className="w-8 h-8" />
      </div>
      <p className={style3}>{title}</p>
      <div className="text-xs flex justify-between font-medium text-gray-400">
        <p>17 files</p>
        <p>12 GB</p>
      </div>
    </div>
  );
}

export default CardItem;
