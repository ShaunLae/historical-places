import { useState } from "react"
import Button from "./Button"
import Card from "./Card"
import data from '/data.json'

function RandomPlace() {
    const [index, setIndex] = useState(0);
  return (
    <div>
        <h2 className='text-3xl font-bold text-white mb-12'>Historical Places</h2>
      <div className="inline-block mb-8" onClick={() =>{
        setIndex(Math.floor(Math.random() * data.length))
      }}>
        <Button >
            Suggest Random Place
        </Button>
      </div>
      <div className="w-4/12 mb-12">
        <Card item={data[index]} />
      </div>
    </div>
  )
}

export default RandomPlace
