import React from 'react';
import { Link } from 'react-router-dom';
import accessUrl from '../../config/loginUrl' ;
import './landingpage.css' ;
import logo from '../../assets/skyBEAT.png' ;

const LandingPage = () => {
    return(
        <div className='row no-gutters' >
            <div className='col-md-6 no-gutters' >
                <div className='leftSide' >
                    <div className='logoC' >
                        <div className='logoWrapper' >
                            <img src={logo} alt='logoImage'  className="img-fluid logoImage" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 no-gutters' >
                <div className='rightSide' >
                    <div className="rightContainer" >

                        <div className='heading' >
                            <h3>
                                YOU TELL <br/>
                                THE STORY, <br/>
                                WE SET <br/>
                                THE TONE
                            </h3>
                                <div className="makerNlogin">
                                    <a id="loginBox" href={`${accessUrl}`}>Login with skyBEAT</a>
                                    <Link to="/makers" className="makers_btn">Makers of skyBEAT</Link>
                                </div>
                            
                        </div>
                    </div>
                </div>
                    <div class="animation-area">
                    <ul class="box-area">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                </div>
            </div>
        // </div>
    )
}
export default LandingPage;