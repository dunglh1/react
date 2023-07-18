import React from "react";
import mainLogo from "../asset/MainLogo.png";
import frame1 from "../asset/Frame1.png";
import animation11 from "../asset/Animation1-1.png";
import animation21 from "../asset/Animation2-1.png";
import animation31 from "../asset/Animation3-1.png";
import playvideobutton from "../asset/Play_button.png";
import abimage from "../asset/unsplash_LRXYS0tSyGc.png";
import vector from "../asset/Vector.png";
import vectorfacebook from "../asset/Vector-facebook.png";
import vectorig from "../asset/Vector-ig.png";
import avatar from "../asset/unsplash_pTrhfmj2jDA-1.png";
import avatar1 from "../asset/unsplash_FVh_yqLR9eA-1.png";
import avatar2 from "../asset/unsplash_mEZ3PoFGs_k.png";
import ctnimation from "../asset/ContactAnimations.png";
import footerlogo from "../asset/FooteroLogo.png";
import "./style.css";
import "./style-tablet.css";
import "./style-mobile.css";
export default function Navbar() {
  return (
    <>
      <section className="section-background1">
        {/* HEADER------------- */}
        <div className="hamburger-container">
          <input type="checkbox" name="" id="toggler" />
          <div className="main-logo">
            <img src={mainLogo} alt="" />
          </div>
          <nav>
            <label htmlFor="toggler" className="navbar-toggler">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </label>
            <ul className="nav-list" id="nav-tablet">
              <li className="nav-item">
                <a href="" className="nav-link active">
                  Home+
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <button className="contact-button">Contact</button>
              </li>
            </ul>
          </nav>
        </div>

        {/* MAIN SLIDER--------- */}
        <div className="main-slider">
          <div className="main-body">
            <div className="mb-text">
              <h1>
                Clinic & beauty <br />
                consultant
              </h1>
              <p>
                It is a long established fact that a reader will be <br />
                by the readable conten of a page
              </p>
              <button className="more-detail-button">More Details</button>
            </div>
            <div className="frame1">
              <img src={frame1} alt="" />
            </div>
          </div>
        </div>
        <div className="slide-container">
          <div className="header-slide"></div>
          <div className="header-slide active"></div>
          <div className="header-slide"></div>
        </div>
      </section>
      {/* SECTION BACKGROUND 2 */}
      <section className="section-background2">
        <div className="main-services">
          <div className="main-services-text">
            <h4>Main services</h4>
            <h1>
              Learn services to focus <br />
              on your beauty
            </h1>
            <p>
              Porta rhoncus orci condimentum vitae lobortis eu dignissim non
              massa. Non parturient <br />
              amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
            </p>
          </div>
          <div className="main-services-card">
            <div className="card">
              <img src={animation11} alt="" />
              <h4>Beauty consultation</h4>
              <p>
                Non parturient amet, feugiat <br />
                tellus sagittis, scelerisque eget <br />
                nulla turpis.
              </p>
            </div>
            <div className="card">
              <img src={animation21} alt="" />
              <h4>Beauty consultation</h4>
              <p>
                Non parturient amet, feugiat <br />
                tellus sagittis, scelerisque eget <br />
                nulla turpis.
              </p>
            </div>
            <div className="card">
              <img src={animation31} alt="" />
              <h4>Beauty consultation</h4>
              <p>
                Non parturient amet, feugiat <br />
                tellus sagittis, scelerisque eget <br />
                nulla turpis.
              </p>
            </div>
          </div>
        </div>
        {/* ABOUT US---------------- */}
        <div className="about-us">
          <div className="text">
            <h4>About Us</h4>
            <h1>We are the best beauty clinic</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Elit, quam suscipit purus donec <br />
              amet. Egestas volutpat facilisi eu libero. Nunc, <br />
              ipsum ornare mauris sit quam quis enim. Varius <br />
              tellus in suspendisse placerat.
            </p>
            <p>
              Id dui erat sed quam tellus in purus. Pellentesque <br />
              congue fringilla cras tellus enim.
            </p>
            <div className="ab-button">
              <button className="learn-more">Learn more</button>
              <button className="watch-video">
                <img src={playvideobutton} alt="" />
                <p>Watch video</p>
              </button>
            </div>
          </div>
          <div className="ab-image">
            <img src={abimage} alt="" />
          </div>
        </div>
      </section>
      <section className="back-ground-section3">
        {/* PROFESSIONAL TEAM----------- */}
        <div className="professional">
          <div className="professional-text">
            <h4>Professional Teams</h4>
            <h1>The Professional Expert</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam.
            </p>
          </div>
          <div className="professional-card">
            <div className="pf-card">
              <img src={avatar} alt="" className="avatar" /> <h5>Surgeon</h5>
              <h4>Briyan Nevalli</h4>
              <p>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit ut
                <br />
                aliquam, purus sit
              </p>
              <div className="social">
                <div className="social-img">
                  <img src={vector} alt="" />
                </div>

                <div className="social-img">
                  <img src={vectorfacebook} alt="" />
                </div>

                <div className="social-img">
                  <img src={vectorig} alt="" />
                </div>
              </div>
            </div>
            <div className="pf-card-mid">
              <img src={avatar1} alt="" className="avatar" />{" "}
              <h5>Dermatologist</h5>
              <h4>Bella sebastian</h4>
              <p>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit ut
                <br />
                aliquam, purus sit
              </p>
              <div className="social">
                <div className="social-img">
                  <img src={vector} alt="" />
                </div>

                <div className="social-img">
                  <img src={vectorfacebook} alt="" />
                </div>

                <div className="social-img">
                  <img src={vectorig} alt="" />
                </div>
              </div>
            </div>
            <div className="pf-card">
              <img src={avatar2} alt="" className="avatar" />{" "}
              <h5>Stylist expert</h5>
              <h4>Lilly Adams</h4>
              <p>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit ut
                <br />
                aliquam, purus sit
              </p>
              <div className="social">
                <div className="social-img">
                  <img src={vector} alt="" />
                </div>

                <div className="social-img">
                  <img src={vectorfacebook} alt="" />
                </div>

                <div className="social-img">
                  <img src={vectorig} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT US */}
        <div className="contact-us">
          <div className="ct-left">
            <img src={ctnimation} alt="" />
          </div>
          <div className="ct-right">
            <h4>Contact Us</h4>
            <h1>
              Send your inquiry to <br />
              our expert team
            </h1>
            <p>Lorem ipsum dolor sit amet nulla turapis tellus.</p>
            <div className="name-input">
              <input type="text" className="name" placeholder="First name" />
              <input type="text" className="name" placeholder="Last name" />
            </div>
            <div className="address">
              <input type="text" className="mail" placeholder="Email address" />
              <input
                type="text"
                className="subject"
                placeholder="Subject message"
              />
            </div>
            <textarea
              name="inquiry"
              id=""
              cols="30"
              rows="10"
              placeholder="Your inquiry here"
              className="yourinquiry"
            ></textarea>
            <div className="send-message">
              <button className="send-message">Send message</button>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER------------------ */}
      <div className="site-footer">
        <div className="footer">
          <div className="ft-left">
            <div className="ft-img">
              <img src={footerlogo} alt="" />
            </div>
            <div className="ft-text">
              <p>
                <span className="ft-beauty">Beautice</span> is a Beauty Clinic
                WordPress Theme.
              </p>
              <div className="ft-phonemail">
                <div className="ft-phone">
                  <p>+521 569 8966.</p>{" "}
                </div>
                <div className="ft-mail">
                  <p>mail@company.com.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ft-right">
            <div className="pages">
              <h4>Pages</h4>
              <ul className="ft-nav">
                <li className="active">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Services</li>
                <li className="nav-item">Gallery</li>
                <li className="nav-item">Team</li>
              </ul>
            </div>
            <div className="info">
              <h4>Informations</h4>
              <ul className="ft-nav">
                <li className="active">Terms & conditions</li>
                <li className="nav-item">Privacy policy</li>
                <li className="nav-item">Blog</li>
                <li className="nav-item">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="back-to-top">
          <section></section>
          <a href="#" className="gotopbtn">
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
        <div className="end">
          <div className="social-media">
            <button className="facebook-f"></button>
            <button className="twitter-t"></button>
            <button className="linked-in"></button>
            <button className="youtube-y"></button>
            <button className="instagram-i"></button>
          </div>
          <div className="copy-right">
            <h4>© AltDesain Studio 2021 - All right reserved.</h4>
          </div>
        </div>
      </div>
    </>
  );
}
