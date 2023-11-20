import React from 'react';
import {Link} from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
        <div className='header_left'>
            <h1>Repari<span>fy</span><span1><i class="fa-solid fa-truck-pickup"></i></span1></h1>
        </div>
        <div className='header_right'>
             <Link to='service' smooth={true} duration={600}>
                <h4>
                    SERVICE
                </h4>
             </Link>
             <Link to='Contact' smooth={true} duration={600}>
                <h4>
                    CONTACT
                </h4>
             </Link>
             <Link to='about' smooth={true} duration={600}>
                <h4>
                    ABOUT
                </h4>
             </Link>
             <Link to='Blog' smooth={true} duration={600}>
                <h4>
                    BLOG
                </h4>
             </Link>
             <Link to='faq' smooth={true} duration={600}>
                <h4>
                    FAQ
                </h4>
             </Link>
             {/* <Link to='sign' smooth={true} duration={600}>
             <h4 className='header_right_btn'>Sign in</h4>
             </Link> */}
            
        </div>
    </div>
  )
}

export default Header