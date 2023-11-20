import React from 'react';
import "./Contact.css";
import { Element } from 'react-scroll';
import phone from './phone.png';
import office from './office-building.png';
import mail from './email.png';


const Contact = () => {
  return (
    <Element name='Contact'>
        <div className='contact_container'>
            <div className='contact_container_box'>
                <div className='contact_box'>
                    <h1>HELP LINE NUMBER</h1>
                    <h1>_________________</h1>
                    <p><i class="fa-solid fa-phone"></i>  0123456789</p><br/><br/><br/>
                    <p><i class="fa-brands fa-whatsapp"></i> 0987654321</p>
                    <div className='phone_logo'><br/><br/><br/><br/><br/><br/><br/>
                    <img src={phone} alt='' />
                    </div>

                    </div>
                <div className='contact_box'>
                    <h1>OFFICE ADDRESS</h1>
                    <h1>_________________</h1>
                    <p>Reparify Motor Service </p><br/><br/>
                    <p><i class="fa-solid fa-location-dot"></i> Sri krishna Engineering college,</p><br/><br/><br/>
                     <p>Kuniyamuthur,Coimbatore,</p><br/><br/>
                    <p>641008.</p>
                    <img  src={office} alt='' /> 
                </div>
                <div className='contact_box'>
                    <h1>EMAIL</h1>
                    <h1>______</h1>
                    <p><i class="fa-solid fa-envelope"></i>   abcd@gmail.com</p><br/><br/>
                    <p><i class="fa-brands fa-microsoft"></i> abcd@outlook.com</p><br/><br/>
                    <p><i class="fa-solid fa-envelope"></i>  abcd@skcet.com</p>
                    <img  src={mail} alt='' /> 
                   
                </div>
            </div>
        <div>
            
        </div>
        </div>

    </Element>
  )
}

export default Contact