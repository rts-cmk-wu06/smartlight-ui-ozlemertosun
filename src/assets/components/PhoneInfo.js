import time from "../img/Time.svg"
import connection from "../img/CellularConnection.svg"
import wifi from "../img/Wifi.svg"
import battery from "../img/Battery.svg"


const PhoneInfo = () => {
    return ( 
        <div className="flex justify-between pl-[21.8px] pr-[9px] pt-[9px] absolute w-full">
            <div>
                <img src={time}/>
            </div>
            
            <div className="flex gap-[5px]">
                <img src={connection} alt="logo"/>
                <img src={wifi}  alt="logo"/>
                <img src={battery}  alt="logo"/>
            </div>
        </div>
     );
}
 
export default PhoneInfo;