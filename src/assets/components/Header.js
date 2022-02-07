import Avatar from './Avatar';
import Heading from './Heading';

const Header = () => {

    return ( 
        <div className="flex w-full justify-between px-6">
            <Heading />
            <Avatar />
        </div>
     );
}
 
export default Header;