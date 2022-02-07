import bed from '../img/bed.svg' 
import room from '../img/room.svg' 
import kitchen from '../img/kitchen.svg' 
import bathtube from '../img/bathtube.svg'
import outdoor from '../img/house.svg' 
import balcony from '../img/balcony.svg' 

const CpButtons = () => {

    const btnArray = [
        {
            logo: bed, 
            alt: "bed logo", 
            title: "Bed room",
            NrOfLights: 4
        },
        {
            logo: room, 
            alt: "living room logo", 
            title: "living room",
            NrOfLights: 2
        }, 
        {
            logo: kitchen, 
            alt: "Kitchen logo", 
            title: "Kitchen",
            NrOfLights: 5
        }, 
        {
            logo: bathtube, 
            alt: "Bathtube logo", 
            title: "Bathroom",
            NrOfLights: 1
        }, 
        {
            logo: outdoor, 
            alt: "outdoor logo", 
            title: "Outdoor",
            NrOfLights: 5
        }, 
        {
            logo: balcony, 
            alt: "Balcony logo", 
            title: "Balcony",
            NrOfLights: 2
        }, 
    ]

    return (
        <div className='grid grid-cols-2 gap-y-[19px] gap-x-[24px] mt-[20px]'>  
          {btnArray.map((btnDetails) => (
            <button className="bg-white w-[150px] h-[150px] rounded-[24px] pl-[19px] text-left flex-col">
                <div className='pt-[24.5px]'>   <img src={btnDetails.logo}  alt={btnDetails.alt}/> </div>
                <h3 className='pt-[26px] ButtonTitleStyle'>{btnDetails.title}</h3>
                <p className='ButtonSubTitleStyle'>{btnDetails.NrOfLights} lights</p>
            </button>
             ))} 
        </div>

      );
}
 
export default CpButtons;