import backArrow from "../img/backArrow.svg"
import lightbulb from "../img/lightbulb.svg"


const SettingsHeader = () => {
    return ( 
        <div className="flex justify-between CustomPadding">
            <div className="pt-[43px] w-[85px]">
                <div className="flex justify-between">
                    <img src={backArrow} alt="backArrow"/>
                    <h1 className="TitleStyle">Bed</h1>
                </div>
                <h1 className="TitleStyle">Room</h1>
            </div>
        
            <div className="pt-[0px]">
                <img src={lightbulb} alt="lightbublb"/>
            </div>
        </div>
     );
}
 
export default SettingsHeader;