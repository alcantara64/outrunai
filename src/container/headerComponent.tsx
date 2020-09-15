import React from 'react';

export const HeaderComponent = () => {
    return(		<header>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 col-sm-2 col-xs-6 logo">
                    <a href="index.html"><img src="images/outrunai-logo.jpg" alt="Outrun AI" /></a>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6 nav-wrapper">

                    
                    <nav>
                        <ul className="sf-menu" id="menu">
                            
                            <li><a href="#78">Products <i className="fa fa-angle-down"></i></a>
                                     <ul>
                                            <li><a href="hospitality-suite.html">Hospitality Suite</a></li>
                                            <li><a href="hospitality-ai-insights.html">Hospitality AI Insights</a></li>
                                                                                           
                                      </ul>
                            
                            </li>	
                            <li><a href="#solution">Solutions <i className="fa fa-angle-down"></i></a>	

                                      <ul>
                                            <li><a href="#hotel">Hotel Smart Dash Board</a></li>
                                            <li><a href="#hotel">Hotel P&L  Smart AI</a></li>
                                            <li><a href="#hotel">Hotel Response AI</a></li>
                                            <li><a href="#hotel">Hotel Market Place AI</a></li>
                                            <li><a href="#hotel">Hotel AI models</a></li>
                                            <li><a href="#hotel">Hotel AI security</a></li>
                                                                                           
                                      </ul>
                                    </li>
                                    
                             <li><a href="#industries">Industries <i className="fa fa-angle-down"></i></a>
                             <ul>
                                            <li><a href="#banking">Banking</a></li>
                                            <li><a href="#banking">Hospitality</a></li>
                                            <li><a href="#banking">Retail</a></li>
                                            
                                      </ul>
                             
                             </li>
                             <li><a href="#company">Company <i className="fa fa-angle-down"></i></a>
                                      <ul>
                                            <li><a href="#about">About</a></li>
                                            <li><a href="#partners">Partners</a></li>
                                            <li><a href="#news">News</a></li>
                                            <li><a href="#careers">Careers</a></li>
                                            
                                      </ul>
                             
                             </li>
                           
                                      <li><a href="#contact">Contact AI Specialist</a></li>
                    </ul>
                                        
                    </nav>

                </div>
                
                <div className="col-md-3 col-sm-3 col-xs-8 col-md-offset-1 login-reg pull-right" >
                <ul>
                <li className="bg-info"><a href="#sign" >Sign In</a></li>
                <li><a href="#signup">Sign Up</a></li>
                </ul>
                </div>
                
            </div>
        </div>
    </header>)
}