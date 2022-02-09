

import PhoneInfo from "../assets/components/PhoneInfo";
import SettingsBg from "../assets/components/SettingsBg";
import SettingsHeader from "../assets/components/SettingsHeader";
import Navigation from "../assets/components/Navigation";



const SettingsPage = () => {
    return ( 
        <div className="App">
        <div className="relative">
        <PhoneInfo />       
        <SettingsHeader />
        <SettingsBg />
        <Navigation />
        </div>
        </div>

     );
}
 
export default SettingsPage;