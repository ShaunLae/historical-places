import { Link, useParams } from "react-router";
import Button from "./Button";
import { Activity } from "react";

function Card({ item }) {
  // console.log(item);
  const { name, image, description } = item;
  const {id} = useParams();
  console.log(id);
  return (
    <div className="p-6 aspect-4/3 bg-yellow-50 rounded-2xl text-center">
      <img src={image} alt="img" className="aspect-4/2 object-cover w-full" />
      <h2 className="font-bold mt-3 text-xl">{name}</h2>
      <p>{description}</p>
      <h5 className="text-sm text-red-400 mt-2 mb-3 font-bold">Visited</h5>
      <div className={!id? "flex justify-between" : ""}>
        <Button>
          <i className="fa-solid fa-location-pin"></i>
          Mark as Visited
        </Button>
        <Activity mode={!id ? "visible" : "hidden"}>
          <Link to={`/place/${item.id}`}>
            <Button className="bg-amber-300">
              View Details
              <i className="fa-solid fa-arrow-right"></i>
            </Button>
          </Link>
        </Activity>
        
      </div>
    </div>
  );
}

export default Card;
