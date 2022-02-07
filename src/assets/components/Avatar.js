import avatar from '../img/dog.jpg'

const Avatar = () => {
    return ( 
    <div className='rounded-full pt-[42px]'> 
        <div className='relative'>
            <span className='absolute top-1 right-0 w-[10px] h-[10px] bg-[#FF9898] rounded-full border-[#707070] border-2'></span>
            <img className='rounded-full w-[53px] h-[53px] object-cover border-2' src={avatar} alt="avatar"/>
        </div>
    </div>
     );
}
 
export default Avatar;