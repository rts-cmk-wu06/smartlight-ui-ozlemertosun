import ColorBtns from "./ColorBtns";

const SettingsBg = () => {
    return ( 
        <div className="bg-[#F6F8FB] px-6 rounded-t-[31px] h-[472px] mt-[140px]">
            <h2 className="SubTitleStyle pt-[29px]">Intensity</h2>  

            <ColorBtns />
            
            <h2 className="SubTitleStyle pt-[29px]">Scenes</h2>  
            
        </div>
     );
}
 
export default SettingsBg;