import { FunctionComponent } from "react";
import "./Page.css";
import vector from '../assets/vector.svg'
import group40 from '../assets/group-40.svg'
import group from '../assets/group.svg'
import cart from '../assets/cart.svg'
export type PageType = {
  className?: string;
};

const Page: FunctionComponent<PageType> = ({ className = "" }) => {
  return (
    <div className={`page ${className}`}>
      <header className="content">
        <div className="container-parent">
          <div className="container">
            <a className="moody-studio">MOODY STUDIO</a>
          </div>
          <div className="image-container">
            <img
              className="image-shape-icon"
              loading="lazy"
              alt=""
              src={vector}
            />
            <div className="image-container-inner">
              <img
                className="frame-child"
                loading="lazy"
                alt=""
                src={group40}
              />
            </div>
            <div className="ellipse-parent">
              <div className="frame-item" />
              <div className="group-parent">
                <img
                  className="group-icon"
                  loading="lazy"
                  alt=""
                  src={cart}
                />
                <b className="b">3</b>
              </div>
            </div>
            <img className="group-icon1" alt="" src={group} />
          </div>
        </div>
        <div className="navigation">
          <img
            className="navigation-icon"
            loading="lazy"
            alt=""
            src="/vector-6.svg"
          />
          <div className="menu">
            <div className="menu-links">
              <a className="home">HOME</a>
              <a className="store">STORE</a>
              <a className="accessories">ACCESSORIES</a>
              <a className="brand">BRAND</a>
              <a className="pages">PAGES</a>
              <a className="about-us">ABOUT US</a>
              <a className="news">NEWS</a>
              <a className="contact-us">{`CONTACT US `}</a>
            </div>
          </div>
        </div>
        <div className="logo-container">
          <img
            className="logo-shape-icon"
            loading="lazy"
            alt=""
            src="/vector-6.svg"
          />
          <div className="homepage-brand-hm-home-bed-wrapper">
            <div className="homepage-brand-hm">{`HOMEPAGE/ BRAND/ H&M HOME/ BEDROOM`}</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Page;
