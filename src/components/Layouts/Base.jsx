import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Base = (props) => {
  return (
    <>
        <Header/>
        <div className='d-flex bg_img'>
        <Sidebar/>
        {props.children}
        </div>
        {/* <Footer/> */}
    </>
  )
}

export default Base