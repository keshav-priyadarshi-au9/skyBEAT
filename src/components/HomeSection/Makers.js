import React from 'react'
import { Link } from 'react-router-dom'
import  keshav  from '../../assets/keshav.jpg'
import  roushan  from '../../assets/roushan.jpg'
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import './makers.css'

const Makers = () => {
    return(
        <div className="makers">
            <div>
                <Link to="/">
                    <input type="submit" className="back_btn" value="Back"/>
                </Link>
            </div>
            
            <h2 style={{textAlign:"center"}}>Developed By</h2>
            <hr/>

            <section className="div_section">
                
                <div id="card1" class="card" style={{width:"18rem"}}>
                    <img className="card-img-top" src={keshav} alt="maker"/>
                    <div className="card-body">
                        <h5 className="card-title">Keshav Priyadarshi</h5>
                        <p className="card-text">MERN Stack Web Developer</p>
                        <a href="mailto:keshavpriyadarshi93@gmail.com"><EmailIcon/></a>
                        <a href="#" ><FacebookIcon/></a>
                        <a href="#" ><InstagramIcon/></a>
                        <a href="#" ><TwitterIcon/></a>
                    </div>
                </div>
    
                <div id="card2" class="card" style={{width:"18rem"}}>
                    <img className="card-img-top" src={roushan} alt="maker"/>
                    <div className="card-body">
                        <h5 className="card-title">Roushan Raj</h5>
                        <p className="card-text">MERN Stack Web Developer</p>
                         <a href="mailto:roushanrajgodda@gmail.com"><EmailIcon/></a>
                        <a href="#"><FacebookIcon/></a>
                        <a href="#"><InstagramIcon/></a>
                        <a href="#"><TwitterIcon/></a>
                    </div>
                </div>
               
            </section>
        </div>    
    )
}
export default Makers