function Button(props) {
  return (
    <button className={`flex justify-center
    items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full 
    ${props.backgroundColour? `${props.backgroundColour} ${props.textColour} ${props.borderColour}` :"bg-coral-red  text-white border-coral-red"}
    ${props.fullWidth &&'w-full'}`}>
       {props.label}
       {props.iconUrl && <img src={props.iconUrl} alt="icon" 
       className="ml-2 rounded-full w-5 h-5"/>}
    </button>
  )
}

export default Button
