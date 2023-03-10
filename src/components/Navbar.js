import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import ada_logo from "../img/ada-logo.png";
import cda_logo from "../img/cda-logo.png";
import harbor_logo from "../img/harbor-logo.png";
import carePay from "../img/carecredit.svg";
import facebook_logo from "../img/social/facebook.svg";
import linkdin_logo from "../img/social/linkdin.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main-navigation"
    >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Lakewood Dental Care" style={{ width: "160px" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={` navbar-start navbar-menu ${isActive && "is-active"}`}>
            {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
            <li className="navbar-item">
              <Link className="navbar-item" to="/">
                Home
              </Link>
            </li>
            <li className="navbar-item">
            <Link className="navbar-item" to="/products">
            Services
            </Link>
            </li>
            <li className="navbar-item">
            <Link className="navbar-item" to="/contact/examples">
            Fees & Insurance
            </Link>
            </li>
            <li className="navbar-item">
            <Link className="navbar-item" to="/blog">
            Dental Advice
            </Link>
            </li>
            <li className="navbar-item">
            <Link className="navbar-item" to="/contact">
              Contact Us
            </Link>
            </li>
            
        </ul>
       <div className="head--contact__info">
            <div className="h-contact__col">
                <ul>
                  <li>
                    <span>
                    PH:
                    </span>
                    <Link to="tel:(562) 867-1753">
                     (562) 867-1753
                    </Link>
                  </li>
                  <li>
                    <span>
                    FAX:
                    </span>
                    <Link to="tel:(562) 867-1753">
                     (562) 867-1753
                    </Link>
                  </li>
                </ul>
            </div>
            <div className="h-col h-member__col">
            <h4 className="h-title">Member of</h4>
                <span className="member_logo"><img src={ada_logo} alt="Lakewood Dental Care" /></span>
                <span className="member_logo"><img src={cda_logo} alt="Lakewood Dental Care" /></span>
                <span className="member_logo"><img src={harbor_logo} alt="Lakewood Dental Care" /></span>
            </div>
            <div className="h-col h-socialMedia__col">
              <h4 className="h-title">Follow Us</h4>
                <ul>
                  <li>
                    <Link to="https://www.facebook.com/JamesLeeDDS" target={"_blank"}>
                    <img src={facebook_logo} alt="Lakewood Dental Care"/>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.facebook.com/JamesLeeDDS" target={"_blank"}>
                    <img src={linkdin_logo} alt="Lakewood Dental Care"/>
                    </Link>
                  </li>
                </ul>
            </div>
            <div className="h-col H-carePay__col">
              <span><img src={carePay} alt="Lakewood Dental Care" /></span>
              <Link className="custom_btn" to="https://www.carecredit.com/Pay/545QMH/&sitecode=B3CPLAdToolkitPMPCard" target={"_blank"}>Pay Now</Link>
            </div>
       </div>
    </nav>
  );
};

export default Navbar;
