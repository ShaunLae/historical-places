import Button from "./Button"

function Card({item}) {
    // console.log(item);
    const {name, image, description} = item;
  return (
    <div className='p-6 bg-yellow-50 rounded-2xl text-center'>
      <img src={image} alt='img' className='aspect-3/2 object-cover w-full'/>
      <h2 className="font-bold text-2xl">{name}</h2>
      <p>{description}</p>
      <h5 className="text-sm text-red-400 font-bold">Visited</h5>
      <div className="flex justify-between items-center">
        <Button>
            <i className="fa-solid fa-location-pin"></i>
            Mark as Visited</Button>
        <Button>
            View Details
            <i class="fa-solid fa-arrow-right"></i>
        </Button>
      </div>
    </div>
  )
}

export default Card
