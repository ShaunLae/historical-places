import { Link, useParams } from "react-router";
import Button from "./Button";
import Card from "./Card";
import data from "/data.json";



function ViewDetails() {
    const {id} = useParams();
    // const place = data.filter((item)=>{
    //     return id === item.id;

    // })
    // console.log(place)
    
  return (
    <div className="bg-gray-900 w-full h-screen">

        
      <h2 className="text-3xl font-bold text-white mb-12">Historical Places</h2>
      <Link to={"/"}>
        <Button>
          Go Back
        </Button>
        </Link>
      <div className={`lg:w-4/12 md:w-6/12 mx-auto mb-12`}>
        <Card item={data[id]} />
      </div>
    </div>
  );
}

export default ViewDetails;
