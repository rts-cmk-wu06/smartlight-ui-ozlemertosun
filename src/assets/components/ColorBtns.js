import extraBtn from "../img/EkstraBtn.svg"

const ColorBtns = () => {

    const ColorArray = [
       "#FF9B9B", "#94EB9E", "#94CAEB", "#A594EB", "#DE94EB", "#EBD094",
    ]

   
    return ( 
        <>
            <h2 className="SubTitleStyle pt-[29px]">Colors</h2> 
          
            <div className='flex gap-x-[16px] mt-[23px]'>  
                {ColorArray.map((color) => (
                <button className="w-[29px] h-[29px] rounded-full" style={{background:color}}></button> 
             ))}  
             <div className="w-[29px] h-[29px]"><img src={extraBtn}/></div>
            </div>
            
          
        </>
     );
}
 
export default ColorBtns;