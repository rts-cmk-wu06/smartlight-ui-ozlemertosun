import Slider from 'react-input-slider';
import React, { useState } from 'react';

import OffBulb from "../img/OffBulb.svg"
import OnBulb from "../img/OnBulb.svg"


const IntensitySlider = () => {

    const [state, setState] = useState({ x: 0, y: 0 });

    return (<div>
    
    <h2 className="SubTitleStyle pt-[29px] pb-[21px]">Intensity</h2>  
    
    <div className='flex'>
    
        {/* OFFBULB */}
        <div className='h-[24px] w-[17px]'>
            <img src={OffBulb} alt="bulb" />
        </div>
    
    <div className='px-[10px]'>
    
    <Slider
    
    axis="x"
    
    x={state.x}
    
    onChange={({ x }) => setState(state => ({ ...state, x }))}
    
    styles={{
    
    track: {
    
    backgroundColor: 'lightgray',
    
    width: 258,
    
    height: 1
    
    },
    
    active: {
    
    backgroundColor: 'lightgray'
    
    },
    
    thumb: {
    
    width: 12,
    
    height: 12
    
    },
    
    disabled: {
    
    opacity: 0.5
    
    }
    
    }}
    
    />
    
        </div>
        
            {/* ONBULB */}
            <div className='h-[24px] w-[17px]'>
                <img src={OnBulb} alt="bulb" />
            </div>
        
        </div>
    
    </div>
    );
    
    };
 
export default IntensitySlider;