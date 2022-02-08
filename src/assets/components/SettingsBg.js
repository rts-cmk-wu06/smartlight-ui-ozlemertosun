import ColorBtns from "./ColorBtns";
import IntensitySlider from "./IntensitySlider";
import Scenes from "./Scenes";

const SettingsBg = () => {
    return ( 
        <div className="bg-[#F6F8FB] px-6 rounded-t-[31px] h-[472px] mt-[140px]">

            <IntensitySlider />
            <ColorBtns />
            
            <Scenes />
            
        </div>
     );
}
 
export default SettingsBg;