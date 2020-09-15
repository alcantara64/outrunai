import React from 'react';
import { FooterComponent } from '../../container/footerComponent';
import { HeaderComponent } from '../../container/headerComponent';

const HomeComponent = () => {
  return (
    <div className="page-wrapper">
      <HeaderComponent />

      <div className="clearfix"></div>

      <div className="banner-section">
        <div className="container">
          <div className="taglines">
            <div className="col-sm-6">
              <h5>How 5G Network will help Outrun Hospitality</h5>
              <a href="5G-network.html" className="btn btn-primary btn-sm">
                More Details
              </a>
              <h1>
                <span className="line1">IT’S TIME</span>
                <br />
                <span className="line2">TO MAKE</span>
                <br />
                <span className="line3">ALL DATA</span>
                <br />
                <span className="line4">ACTIONABLE</span>
                <br />
              </h1>
              <h4>
                Accelerate your business
                <br />
                with proven <span>AI-based Technology Experts</span>
              </h4>
            </div>
          </div>
          <div className="col-sm-6"></div>
        </div>
      </div>
      <div className="appointment-v1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <div className="left">
                <p>How 5G network enable for Outrun Hospitality</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="right">
                <a href="contact.php">More Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};
export default HomeComponent;
