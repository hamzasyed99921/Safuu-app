import React,{useState} from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);
     const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  return (
    <>

        <div className='sidebar '>
            <div className="container_fluid">
                <div className='pt-4'>
                    <div className="sidebar_logo d-flex justify-content-center align-items-center">
                        <img src="assets/images/logo.png" className='w-50 img-fluid' alt="logo" />
                    </div>
                    <div className='sidebar_links d-flex justify-content-center align-items-center' data-bs-dismiss="offcanvas">
                        <ul id="myDIV">
                            <Link to="/" ><li className=''><img src="assets/images/download.png" className='img-fluid'  alt="" /> Dashboard</li></Link>
                            <Link to='/account'><li ><img src="assets/images/download (1).png" className='img-fluid' alt="" />Account</li></Link>
                            <Link to='/swap'><li ><img src="assets/images/download (2).png" className='img-fluid' alt="" />Swap</li></Link>
                            <Link to='/calculator'><li ><img src="assets/images/download (3).png" className='img-fluid' alt="" />Calculator</li></Link>
                            <Link to='/analytics'><li ><img src="assets/images/download (4).png" className='img-fluid' alt="" />Analytics</li></Link>
                            <Link><li ><img src="assets/images/download (5).png" className='img-fluid' alt="" />Docs</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    
  )
}

export default Sidebar

