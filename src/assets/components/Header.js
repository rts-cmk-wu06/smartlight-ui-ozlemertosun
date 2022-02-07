import Avatar from './Avatar';
import Heading from './Heading';

const Header = () => {

    return ( 
        <div className="flex w-full justify-between px-6 pt-[25px]">
            <Heading />
            <Avatar />
        </div>
     );
}
 
export default Header;

/* pt-[25px er for telefoninfo*/