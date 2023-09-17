import Button from "../components/Button"
import {offer} from "../assets/images"
import {arrowRight} from "../assets/icons"
const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div> 
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
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconUrl={arrowRight}/>
          <Button label="Learn More" backgroundColour="bg-white" borderColour="border-coral-red" textColour="text-slate-grey"/>
        </div>
      </div> 
    </section>
  )
}

export default SpecialOffers
