import React from 'react'
import HeroText from '../Section1/HeroText'
import Arrow from '../Section1/Arrow'

const LeftContent = () => {
    return (
        <div className='h-full flex flex-col justify-between  '>
            <HeroText />
            <Arrow />
        </div>
    )
}

export default LeftContent