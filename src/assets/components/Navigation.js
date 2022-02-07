import bulb from '../img/bulb.svg'
import home from '../img/home.svg'
import settings from '../img/settings.svg'

const Navigation = () => {
    return ( 
    <div className=' bg-white h-[67px] w-full flex items-center pl-[93px]'>
        <button><img src={bulb}/></button>
        <button className='px-[65px]'><img src={home}/></button>
        <button><img src={settings}/></button>
    </div>  
 );
}
 
export default Navigation;