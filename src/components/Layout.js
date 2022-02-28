import React from 'react'
import SHeader from './Header'
import Footer from './Footer'
const Layout = ({children}) =>{

    return (
        <>
            <SHeader/>
            {children}
            <Footer />
        </>
    )
}

export default Layout

