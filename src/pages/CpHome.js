import Header from "../assets/components/Header";
import CpBackground from "../assets/components/CpBackground";
import Navigation from "../assets/components/Navigation";
import PhoneInfo from "../assets/components/PhoneInfo";


const CpHome = () => {
    return ( 
       <>
         <PhoneInfo />
        <Header />
        <CpBackground />
        <Navigation />
        </> 
     );
}
 
export default CpHome;