import React from 'react'
import "./Topcontent.css";
import Jeep from './jeep.png';
const Topcontent = () => {
  return (

    <div className='topcontent'>
      <div className='topcontent_welcome'>
      
        <h1><span>Welcome</span> to our premier <span>Reparify</span>  website, where automotive excellence meets unrivaled customer<span>care</span> .</h1>
        <img src={Jeep} alt='' />
      </div>
        <div className='topcontent_container'>
            <h1>Experience The Best Car Service In TamilNadu</h1>
            <p>Get instant quotes for your car service</p>
            <div className='option'>
            <select id="cars" className='car'>
            <option value="Maruti Suzuki">Maruti Suzuki</option>
            <option value="Hyndai">Hyndai</option>
            <option value="honda">Honda</option>
            <option value="audi">Audi</option>
            <option value="tata">Tata</option>
            <option value="Ford">Ford</option>
            <option value="Mahindra">Mahindra</option>
            <option value="Skoda">Skoda</option>
          </select><br />
          <input className='mobile' type='number' placeholder='Mobile Number'></input><br />
          <button className='btn'>Checked Price</button>
        </div>
      </div>
    </div>
  )
}

export default Topcontent