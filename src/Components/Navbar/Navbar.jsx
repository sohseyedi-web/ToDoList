import React from 'react'
import './Navbar.scss'

const Navbar = ({ unCompletedItem }) => {
    return (
        <header>
            {
                unCompletedItem ? (
                    <>
                        <nav className='navs' dir='rtl'>
                            <div className="navs-logo">SeyediTodo</div>
                            <div className="navs-text"><span>{unCompletedItem}</span> یادداشت تکمیل نشده</div>
                        </nav>
                    </>

                ) :
                    (
                        ''
                    )
            }
        </header>
    )
}

export default Navbar
