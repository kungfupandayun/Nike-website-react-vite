import Button  from "../components/Button"
import { shoe8 } from "../assets/images"
const SuperQuality = () => {
  return (
    <section id="about-us" 
    className="flex justify-between items-center ma-lg:flex-col
    gap-10 w-full max-container">
     <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin
        text-4xl capitalize font-bold
        lg:max-w-lg">
          We Provide You 
          <span className='text-coral-red '> Super </span>
          <span className='text-coral-red '> Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'> Discover more about Nike and how it cares about the Earthx xxxxx xxxxxxx xxx x .</p>
        <p className="mt-6 lg:max-w-lg text-info"></p>
        <div className="mt-11">
          <Button label="View details"/>
        </div>
      </div> 
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality
