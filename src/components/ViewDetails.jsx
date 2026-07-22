import { Link, useParams } from "react-router";
import Button from "./Button";
import Card from "./Card";
import data from "/data.json";

function ViewDetails() {
    const {id} = useParams();
    // console.log(typeof id); // string
    // const place = data.filter((item)=>{
    //     return id === item.id;
    // })
    const matchplace = data.filter(item => item.id === Number(id));
    // console.log(matchplace);
    
  return (
    <div className="bg-gray-900 w-full h-screen p-8">
      <h2 className="text-3xl font-bold text-white mb-12">Historical Places</h2>
      <Link to={"/"}>
        <Button>
          Go Back
        </Button>
      </Link>
      <div className={`lg:w-4/12 md:w-6/12 mx-auto mb-12`}>
        <Card item={matchplace[0]} />
      </div>
    </div>
  );
}

export default ViewDetails;
