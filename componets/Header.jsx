import React from 'react'
// import down from '../assets/img/ArrowDropDownOutlined.png'
import Image from 'next/image'
import Downarrow from './svg/downarrow'
const Header = () => {
    return (
        <>
            <header className='container' >
                <div className="header-logo">
                    <Image className='logo' src={'https://themadbrains.com/wp-content/uploads/2023/04/Layer-1.svg'} width={200} height={200}/>
                    <p className='launguage' style={{
                        padding: "12px",
                        fontSize: "15px"
                    }} >Language <Downarrow/></p>
                </div>
            </header>
        </>
    )
}

export default Header