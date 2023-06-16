import Card from "./Card";
import stayJson from "./../stays.json";

export default function Stays(props) {
  return (
    <div className="mb-10">
      <h2 className="text-6xl mt-20 ml-12 font-mons font-bold lg:text-3xl lg:mt-8 lg:ml-20">
        Stays in Finland
        <span className="text-5xl font-light ml-64 lg:text-2xl lg:ml-[60%]">
          {props.filterOut
            ? stayJson.filter(
                (item) =>
                  item.city === props.city && item.maxGuests >= props.guest
              ).length + " stays"
            : stayJson.length + " stays"}
        </span>
      </h2>
      <div className="lg:grid lg:grid-cols-3">
        {props.filterOut
          ? stayJson
              .filter(
                (item) =>
                  item.city === props.city && item.maxGuests >= props.guest
              )
              .map((items) => (
                <Card
                  key={items.title}
                  ImgUrl={items.photo}
                  superHost={items.superHost}
                  type={items.type}
                  beds={items.beds}
                  rating={items.rating}
                  title={items.title}
                />
              ))
          : stayJson.map((items) => (
              <Card
                key={items.title}
                ImgUrl={items.photo}
                superHost={items.superHost}
                type={items.type}
                beds={items.beds}
                rating={items.rating}
                title={items.title}
              />
            ))}
      </div>
    </div>
  );
}
