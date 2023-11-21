import "./Servicecontainer.css";
import { Element } from "react-scroll";
import box1 from "./periodic.png";
import box2 from "./carwash.png";
import box3 from "./brake.png"
// import box4 from "./door.png";
import box5 from "./clipboard.png";
import box6 from "./searching.png";
import box7 from "./battery.png";
import box8 from "./car.png";
import box9 from "./tires.png";
import box0 from "./paint.png"

export const Servicecontainer = () => {
    return (
        <Element name='service'>
            <div className='servicecontainer'>
                <h1>Car Service in <span>Tamil</span>Nadu</h1>
                <p>Get discounted and priodic <span>car service,car repair,car wheel care service,cashless insurance claim</span> and much more in coimbatore.</p>
                <div className='service_avaiable'>
                    <div className='service_box'>
                       <img src={box1} alt=""/>
                       <p>Car Inspections</p>
                       
                    </div>
                    <div className='service_box'>
                    <img src={box2} alt=""/>
                       <p>Car Wash</p>
                    </div>
                    <div className='service_box'>
                    <img src={box3} alt=""/>
                    <p>Body Parts</p>
                      
                    </div>
                    {/* <div className='service_box'>
                    <img src={box4} alt=""/>
                    <p>Windshield & Lights</p>
                      
                    </div> */}
                    <div className='service_box'>
                    <img src={box5} alt=""/>
                    <p>Periodic Service</p>
                        
                    </div>
                    <div className='service_box'>
                    <img src={box6} alt=""/>
                    <p>Detailing Service</p>
                       
                    </div>
                    <div className='service_box'>
                    <img src={box7} alt=""/>
                    <p>Batteries</p>
                       
                    </div>
                    <div className='service_box'>
                    <img src={box8} alt=""/>
                    <p>Insurance</p>
                 
                    </div>
                    <div className='service_box'>
                    <img src={box9} alt=""/>
                    <p>Tires</p>
                     
                    </div>
                    <div className='service_box'>
                    <img src={box0} alt=""/>
                    <p>Painting</p>
                       
                    </div>
                
            
                </div>
            </div>

        </Element>
    );
};
export default Servicecontainer