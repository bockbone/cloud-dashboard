import CardItem from "./CardItem";
function Card() {
  return (
    <div className="flex space-x-6 ml-10 mt-10 overflow-x-scroll scrollbar-hide">
      <CardItem color="purple" title="Design" />
      <CardItem color="purple" title="Documents" />
      <CardItem color="purple" title="Music" />
      <CardItem color="purple" title="Images" />
      <CardItem color="purple" title="Images" />
    </div>
  );
}

export default Card;
