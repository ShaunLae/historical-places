import Card from './Card'
import data from '/data.json'

function Cards() {
    console.log(data);
  return (
    <>
        <h2 className='text-3xl font-bold text-white mb-12'>All Historical Places</h2>
        <div className="grid grid-cols-3 gap-8">
            {data.map((item, index) => {
                return (
                    <Card key={index} item={item} />
                )     
            })}
        </div>
    </>
  )
}

export default Cards
